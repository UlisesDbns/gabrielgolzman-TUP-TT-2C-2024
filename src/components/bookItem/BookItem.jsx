import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import "./BookItem.css";

const BookItem = ({ title, author, rating, pageCount, imageUrl }) => {
    const [bookTitle, setBookTitle] = useState(title);
    const starAmount = rating?.length;

    const handleClick = () => {
        setBookTitle("Actualizado!");
    };

    return (
        <Card className="card-container">
            <Card.Img height={400} variant="top" src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"} />
            <Card.Body>
                <Card.Title>{bookTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{starAmount} {' '}
                    {starAmount > 1 ?
                        "estrellas" :
                        "estrella"}
                </div>
                <p>{pageCount} páginas</p>
                <Button onClick={handleClick}>Actualizar</Button>
            </Card.Body>
        </Card>
    );
};

export default BookItem;