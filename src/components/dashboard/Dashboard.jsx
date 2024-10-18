import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

import BookList from "../bookList/BookList";
import NewBook from "../newBook/NewBook";
import { AuthContext } from "../services/authContext/AuthContext";

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    const { user, handleLogout } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7120/api/Book", {
            headers: {
                accept: "application/json",
                "Authorization": `Bearer ${user.token}`
            },
        })
            .then(response => response.json())
            .then((bookData) => {
                const booksMapped = bookData
                    .map((book) => ({
                        id: book.id,
                        bookTitle: book.title,
                        bookAuthor: book.author,
                        pageCount: book.pagesAmount,
                        imageUrl: book.imageUrl,
                        summary: book.summary,
                        bookRating: Array(book.rating).fill("*"),
                    }))
                    .sort((a, b) => b.id - a.id);
                setBooks(booksMapped);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleAddBook = (newBook) => {
        const bookTransformed = {
            ...newBook,
            bookRating: Array(parseInt(newBook.rating, 10)).fill("*"),
            pageCount: parseInt(newBook.pageCount, 10)
        };

        const bookToPost = {
            title: newBook.bookTitle,
            author: newBook.bookAuthor,
            rating: newBook.rating,
            pagesAmount: newBook.pageCount,
            imageUrl: newBook.imageUrl
        };

        fetch("https://localhost:7120/api/Book", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify(bookToPost)
        })
            .then(response => {
                if (response.ok) return response.json();

                else throw new Error("The response has some errors");
            })
            .then(() => {
                setBooks([bookTransformed, ...books]);
            })
            .catch(error => console.error(error));
    };

    const handleLogoutUser = () => {
        handleLogout();
        navigate("/login");
    };

    return (
        <>
            <Row className="w-100">
                <Col />
                <Col className="d-flex justify-content-center">
                    <h2 className="my-4">Book Champions App</h2>
                </Col>
                <Col className="d-flex justify-content-end align-items-center me-3">
                    <Button onClick={handleLogoutUser}>Cerrar sesión</Button>
                </Col>
            </Row>
            <NewBook onAddBook={handleAddBook} />
            <BookList books={books} />
        </>);
};

export default Dashboard;