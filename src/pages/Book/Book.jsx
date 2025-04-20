// Icons
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ book }) => {



    const { bookId, bookName, author, image, rating, totalPages, category, tags, yearOfPublishing } = book;

    return (

        <div className="card bg-base-100 shadow-sm p-3">
            <figure className="h-[200px] ">
                <img className="object-cover rounded" src={image} alt={bookName} />
            </figure>
            <div className="p-3 space-y-3">
                <div className="flex gap-2">
                    {
                        tags.map(tag => <span className="text-green-800 font-semibold p-2 bg-slate-100 rounded-lg"> {tag} </span>)
                    }
                </div>

                <h2 className="text-xl font-semibold "> {bookName} </h2>
                <p className="font-semibold text-gray-600">By: {author} </p>

                <div className="flex justify-between font-semibold text-gray-600">
                    <p> {category} </p>
                    <p className="flex items-center gap-1"> {rating} <FaStarHalfAlt /> </p>
                </div>

            </div>

        </div>

    )
}

export default Book;