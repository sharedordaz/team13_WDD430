import { ArtItem } from "./types"

/**
 * Sorts an array of ArtItem objects based on the specified sorting style.
 * @param {string | null} style - The sorting style ('alphabetical' for alphabetical sorting).
 * @param {ArtItem[]} artArray - The array of ArtItem objects to be sorted.
 * @returns {ArtItem[]} The sorted array of ArtItem objects.
 */
export function sortWorks(style: string | null, artArray: ArtItem[]){

    switch (style){
     case 'alph':
        return artArray.sort((a, b) => a.name.localeCompare(b.name));
     case 'alph-reverse':
        return artArray.sort((a, b) => b.name.localeCompare(a.name));
    default:
        return artArray

    }

}
