import createCard from "./card";
import { Artist, ArtItem } from './types';

import { headers } from 'next/headers';


export default async function MainGrid() {

  const headersList = headers();
  const host: string | null = headersList.get('host');
  const url = headersList.get('next-url');

  const allCards = await myfetch(host);
  console.log("HOST:", host, '\nURL:', url);
  return allCards;
}

export const artistArray: Artist[] = [];

async function myfetch(host: string | null) {

  const baseUrl = 'http://' + host;
  //const baseUrl = 'http://localhost:3000';
  const url = baseUrl + '/database?_=' + Date.now();
  console.log(url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error reading the database');
    }

    const jsonData = await response.json();
    //console.log("Reading this:\n", JSON.stringify(jsonData));

    const artists = jsonData[0].artists;

    const allCards: JSX.Element[] = [];
    //console.log('ARTISTS:' + artists)
    artists.forEach((artist: Artist) => {
        let artItems = artist.artItems;
        //console.log("--------------\n" + artist.name + artItems)
        artItems.forEach((artItem: ArtItem) => {
            const card = createCard(artItem, artist.name)
            allCards.push(card);

        });


        artistArray.push(artist)
    });

    //console.log(artistArray)

    //console.log(allCards)

    return allCards;
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle the error or return a default value
    return [];
  }
}

