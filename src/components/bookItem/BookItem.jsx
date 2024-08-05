const BookItem = ({ title, author, rating, pageCount }) => {
    const starAmount = rating?.length;

    return (
        <>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{starAmount} {' '}
                {starAmount > 1 ?
                    "estrellas" :
                    "estrella"}
            </div>
            <p>{pageCount} páginas</p>
        </>
    );
};

export default BookItem;