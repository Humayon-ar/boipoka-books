
const Book = ({book}) => {

    const {bookId, bookName, author, image, rating, totalPages, category, tags, yearOfPublishing} = book;
    console.log(bookName)
    return (
        <div>
            This is book
        </div>
    )
}

export default Book;