import BookItem from "../bookItem/BookItem";

const BookList = ({ books }) => {

    const booksMapped = books
        .map(book => (<BookItem
            key={`${book.bookTitle}.${book.bookAuthor}`}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
        />));

    return (
        <>
            <p>El libro seleccionado</p>
            <div className="d-flex justify-content-center flex-wrap gap-4">
                {booksMapped}
            </div>
        </>

    );
};

export default BookList;

