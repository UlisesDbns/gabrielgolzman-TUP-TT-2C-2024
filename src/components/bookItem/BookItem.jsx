import { Card } from "react-bootstrap";

import "./BookItem.css";

const BookItem = ({ title, author, rating, pageCount, imageUrl }) => {
    const starAmount = rating?.length;

    return (
        <Card className="card-container">
            <Card.Img height={400} variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{starAmount} {' '}
                    {starAmount > 1 ?
                        "estrellas" :
                        "estrella"}
                </div>
                <p>{pageCount} páginas</p>
            </Card.Body>
        </Card>
    );
};

export default BookItem;