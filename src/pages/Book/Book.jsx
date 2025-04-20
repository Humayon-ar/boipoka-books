// Icons
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {



    const { bookId, bookName, author, image, rating, totalPages, category, tags, yearOfPublishing } = book;

    return (
        <Link to={`book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-3">
                <figure className="h-[200px] bg-slate-200">
                    <img className="rounded" src={image} alt={bookName} />
                </figure>
                <div className="p-3 space-y-3">
                    <div className="flex gap-2">
                        {
                            tags.map(tag => <span key={tag} className="text-green-800 font-semibold p-2 bg-slate-100 rounded-lg"> {tag} </span>)
                        }
                    </div>

                    <h2 className="text-xl font-semibold "> {bookName} </h2>
                    <p className="font-semibold text-gray-600">By: {author} </p>
                    <div className="border border-dotted"></div>
                    <div className="flex justify-between font-semibold text-gray-600">
                        <p> {category} </p>
                        <p className="flex items-center gap-1"> {rating} <FaStarHalfAlt /> </p>
                    </div>

                </div>

            </div>
        </Link>

    )
}

export default Book;