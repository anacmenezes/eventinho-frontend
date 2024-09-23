import "./card.css";

interface CardProps {
    price: string,
    title: string,
    date: string,
    image: string
}

export function Card({ price, image, title, date } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <h2>{date}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}