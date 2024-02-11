import artistCard from "./artistCard.tsx";
import createCard from "./card";
import { sortArray } from "./sorter";
import { Artist, ArtItem, Sort } from './types';

import { headers, useHeaders } from 'next/headers';

import { useRouter } from 'next/router';

export default async function MainGrid() {
    
  const headersList = headers();

  const host: string | null = headersList.get('host');
  let referer = headersList.get('referer');
    if (referer){
      let sort = referer.replace(`http://${host}/?sort=`, "");
      console.log("HOST:", host, '\nREFERER:', referer, '\nSORT:', sort);
      const allCards = await myfetch(host, sort);
      return allCards;

        }
    else{
        let sort = undefined;
        console.log("HOST:", host, '\nREFERER:', referer, '\nSORT:', sort);
        const allCards = await myfetch(host, "alph");
        return allCards;


        }
/*  for (const key of headersList.entries()){
        console.log(key);
      }*/
}

export const artistArray: Artist[] = [];

async function myfetch(host: string | null, sort: Sort) {

  const baseUrl = 'http://' + host;
  //const baseUrl = 'http://localhost:3000';
  const url = baseUrl + '/database?_=' + Date.now();
  console.log('Database URL:', url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error reading the database');
    }

    const jsonData = await response.json();
    //console.log("Reading this:\n", JSON.stringify(jsonData));

    const artists = jsonData[0].artists;
    let sortedArtists;
    if (sort == "artalphrev"){
        console.log('true')
    sortedArtists = sortArray('alphrev', artists);
    }

    else {
    sortedArtists = sortArray('alph', artists);
    }

    const allCards: JSX.Element[] = [];
    //console.log('ARTISTS:' + artists)
    sortedArtists.forEach((artist: any) => {
        allCards.push(artistCard(artist, 'block'));

        let artItems = artist.artItems;
        let sortedItems = sortArray(sort, artItems)
        //console.log("--------------\n" + artist.name + sortedItems)
        sortedItems.forEach((artItem: any) => {
            //console.log (artItem.name);
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

