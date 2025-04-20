
const ReadBook = ({ book }) => {
    const { image, bookName, rating, publisher, author, yearOfPublishing } = book;

    return (
        <div className="flex gap-4 bg-slate-100 rounded p-4">
            <div>
                <img className="h-[200px] w-[300px] object-cover" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-around">
                <h2 className="text-2xl font-semibold text-gray-700"> {bookName} </h2>
                <address>
                    <div className="font-normal text-gray-600">
                        <p>Published by: {publisher} in {yearOfPublishing} </p>
                        <p>Author: {author} </p>
                        <p>Total Rating: {rating} </p>
                    </div>
                </address>
            </div>

        </div>
    )
}

export default ReadBook;