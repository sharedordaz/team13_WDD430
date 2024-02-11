import { ArtItem, Artist } from "./types"

/**
 * Sorts an array of ArtItem objects based on the specified sorting style.
 * @param {string | null} style - The sorting style ('alph' or 'alph-reverse' 'price for price' for alphabetical sorting).
 * @param {ArtItem[]} artArray - The array of ArtItem objects to be sorted.
 * @returns {ArtItem[] | Artist[]} The sorted array of ArtItem objects.
 */
export function sortArray(style: string | null, artArray: (ArtItem[] | Artist[])){

    switch (style){
     case 'alph':
        return artArray.sort((a, b) => a.name.localeCompare(b.name));
     case 'alphrev':
        return artArray.sort((a, b) => b.name.localeCompare(a.name));
     case 'price':
        return artArray.sort((a, b) => (a as ArtItem).price - ((b as ArtItem).price));
     case 'pricerev':
        return artArray.sort((a, b) => (b as ArtItem).price - ((a as ArtItem).price));
    default:
        return artArray;

    }
}
