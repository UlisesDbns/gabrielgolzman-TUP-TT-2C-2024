import { useState } from "react";

import BookList from "../bookList/BookList";
import NewBook from "../newBook/NewBook";
import { Button, Col, Row } from "react-bootstrap";

const booksArray = [
    {
        bookTitle: "100 años de soledad",
        bookAuthor: "Gabriel García Marquez",
        bookRating: Array(5).fill("*"),
        pageCount: 410,
        imageUrl:
            "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
        bookTitle: "Asesinato en el Orient Express",
        bookAuthor: "Agatha Christie",
        bookRating: Array(4).fill("*"),
        pageCount: 256,
        imageUrl:
            "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80.jpg",
    },
    {
        bookTitle: "Las dos torres",
        bookAuthor: "J.R.R Tolkien",
        bookRating: Array(5).fill("*"),
        pageCount: 352,
        imageUrl:
            "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80.jpg",
    },
    {
        bookTitle: "50 sombras de Grey",
        bookAuthor: "E.L James",
        bookRating: Array(1).fill("*"),
        pageCount: 514,
        imageUrl:
            "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
];

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState(booksArray);

    const handleAddBook = (newBook) => {
        const bookTransformed = {
            ...newBook,
            bookRating: Array(parseInt(newBook.rating, 10)).fill("*"),
            pageCount: parseInt(newBook.pageCount, 10)
        };
        setBooks([bookTransformed, ...books]);
    };

    return (
        <>
            <Row className="w-100">
                <Col />
                <Col className="d-flex justify-content-center">
                    <h2 className="my-4">Book Champions App</h2>
                </Col>
                <Col className="d-flex justify-content-end align-items-center me-3">
                    <Button onClick={onLogout}>Cerrar sesión</Button>
                </Col>
            </Row>
            <NewBook onAddBook={handleAddBook} />
            <BookList books={books} />
        </>);
};

export default Dashboard;