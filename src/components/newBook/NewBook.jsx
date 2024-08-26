import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const NewBook = () => {
    const [title, setTitle] = useState("");
    // const [bookForm, setBookForm] = useState({
    //     title: "",
    //     author: "",
    //     rating: "",
    //     pageQty: "",
    //     imageUrl: "",
    // });


    const handleTitleChange = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
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
                <Form className="text-white">
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