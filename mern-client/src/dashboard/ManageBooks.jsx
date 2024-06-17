import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-inventory-api.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  //delete book
  const handleDelete = (id) => {
    fetch(`https://mern-book-inventory-api.vercel.app/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("Book is deleted successfully.."));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>

      <div className="relative overflow-x-auto">
        <table className="mb-2 block lg:w-[1189px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Edit or Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={book._id}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{book.book_title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">$20</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-book/${book._id}`}
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 text-white px-4 py-1 rounded-sm hover:bg-blue-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
