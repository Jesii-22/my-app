import Image from "next/image";

const Card = () => {
    return(
        <div style={{backgroundColor: 'red', padding: '30px', margin: '30px'}}> 
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h3>Card Title</h3>
        <p>Card Descripcion</p>
        <button>Click Me Alicia</button>
        </div>
    )
};

export default Card;