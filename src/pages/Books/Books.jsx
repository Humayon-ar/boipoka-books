import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-5">Books</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        data.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default Books;