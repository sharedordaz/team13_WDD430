import createCard from "./card"

export default function MainGrid(){

    const jsonData = require('./test.json');

    const artItems = jsonData.artItems || [];
    
    const allCards = artItems.map((artItem: any) => {
        return createCard(artItem)
        })

    return(allCards)
}
