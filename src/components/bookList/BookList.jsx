import { useState } from "react";

import BookItem from "../bookItem/BookItem";

const BookList = ({ books }) => {
    const [titleSelected, setTitleSelected] = useState("");

    const handleTitleUpdate = (newTitle) => {
        setTitleSelected(newTitle);
    };

    const booksMapped = books
        .map(book => (<BookItem
            key={`${book.bookTitle}.${book.bookAuthor}`}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            onTitleUpdated={handleTitleUpdate}
        />));

    return (
        <>
            {titleSelected !== "" &&
                <p>El libro seleccionado:
                    <span className="fw-bold"> {titleSelected}</span>
                </p>}
            <div className="d-flex justify-content-center flex-wrap gap-4">
                {booksMapped}
            </div>
        </>

    );
};

export default BookList;

