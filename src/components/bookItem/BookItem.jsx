import { Button, Card } from "react-bootstrap";

import "./BookItem.css";

const BookItem = ({ title, author, rating, pageCount, imageUrl, onTitleUpdated }) => {
    const starAmount = rating?.length;

    const handleClick = () => {
        onTitleUpdated(title);
    };

    return (
        <Card className="card-container">
            <Card.Img height={400} variant="top" src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{starAmount} {' '}
                    {starAmount > 1 ?
                        "estrellas" :
                        "estrella"}
                </div>
                <p>{pageCount} páginas</p>
                <Button onClick={handleClick}>Seleccionar</Button>
                <Button className="ms-3" variant="danger" onClick={() => { }}>Eliminar libro</Button>
            </Card.Body>
        </Card>
    );
};

export default BookItem;