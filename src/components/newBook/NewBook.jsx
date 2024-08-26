import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const NewBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [pageQty, setPageQty] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    // const [bookForm, setBookForm] = useState({
    //     title: "",
    //     author: "",
    //     rating: "",
    //     pageQty: "",
    //     imageUrl: "",
    // });


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handlePageQtyChange = (event) => {
        setPageQty(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleSubmitBook = (event) => {
        event.preventDefault();
        const newBook = {
            title,
            author,
            rating,
            pageQty,
            imageUrl
        };
        console.log(newBook);
    };

    // const handleTitleChange = (event) => {
    //     event.preventDefault();
    //     setBookForm(prevBookForm => ({
    //         ...prevBookForm,
    //         title: event.target.value
    //     }));
    // };

    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={handleSubmitBook}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar título"
                                    onChange={handleTitleChange}
                                    value={title}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar autor"
                                    onChange={handleAuthorChange}
                                    value={author}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    onChange={handleRatingChange}
                                    value={rating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    onChange={handlePageQtyChange}
                                    value={pageQty}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                onChange={handleImageUrlChange}
                                value={imageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"


                            >
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;