import Image from 'next/image'
export default function createCard(item: any){
    return (
    <div>
        <h4>{item.name}</h4>
           <Image
      src="/placeholder-image.jpg"
      width={500}
      height={500}
      alt={item.description}
    />
        <p>{item.description}</p>
        <p>Price: ${item.price} </p>

    </div>


    )
    }
