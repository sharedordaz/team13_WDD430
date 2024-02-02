import createCard from "./card";

export default async function MainGrid() {
  const allCards = await myfetch();
  //console.log("ALLCARDS:", allCards)
  return allCards;
}

async function myfetch() {
  const url = 'http://localhost:3000/database';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error reading the database');
    }

    const jsonData = await response.json();
    //console.log("Reading this:\n", jsonData);

    const artItems = jsonData[0].artItems;
    const allCards = artItems.map((artItem: any) => createCard(artItem));
    //console.log(allCards)

    return allCards;
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle the error or return a default value
    return [];
  }
}

