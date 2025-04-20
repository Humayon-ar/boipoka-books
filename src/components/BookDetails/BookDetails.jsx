import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {

    const { id } = useParams();
    const bookID = parseInt(id);

    const data = useLoaderData();
    const matchedBook = data.find(book => book.bookId === bookID);

    const { bookId, bookName, author, image, review, rating, totalPages, category, tags, yearOfPublishing, publisher } = matchedBook;


    return (
        <div className="flex gap-5 my-5">
            <div className="bg-slate-200 rounded-lg p-5 flex-grow-1 flex items-center justify-center">
                <img className="h-[450px] inline" src={image} alt="It's a photo" />
            </div>
            <div className=" space-y-3 w-[600px]">
                <h2 className="text-3xl font-bold"> {bookName} </h2>
                <p className="font-semibold text-gray-500">By: {author} </p>
                <div className="border border-dash border-gray-300"></div>
                <h4> {category} </h4>
                <div className="border border-dash border-gray-300"></div>

                <p>
                    <span className="text-xl font-bold">Reviews: </span>
                    {review}
                </p>
                <div className="border border-dash border-gray-300"></div>

                <div>
                    <span className="font-bold text-xl">Tags: </span>
                    {
                        tags.map(tag => <span key={tag} className="font-semibold text-green-700 bg-slate-100 p-2 rounded-lg"> #{tag} </span>)
                    }
                </div>
                <div className="border border-dash border-gray-300"></div>
                <table id="book-details-table" className="table-auto">
                    <tbody>
                        <tr>
                            <th>Number of page: </th>
                            <td> {totalPages} </td>
                        </tr>
                        <tr>
                            <th>Publisher :</th>
                            <td> {publisher} </td>
                        </tr>
                        <tr>
                            <th>Year of Publishing :</th>
                            <td> {yearOfPublishing} </td>
                        </tr>
                        <tr>
                            <th>Rating :</th>
                            <td> {rating} </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button className="btn btn-outline-ghost mr-5">Read</button>
                    <button className="btn btn-info text-white ">Wishlist</button>
                </div>
            </div>

        </div>
    )
}

export default BookDetails;