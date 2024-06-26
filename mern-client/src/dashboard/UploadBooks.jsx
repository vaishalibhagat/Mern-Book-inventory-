import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategory = [
    "Art",
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
  ];

  const [selectedBookCategory, setselectedBookCategory] = useState(
    bookCategory[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  };

  //handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const book_title = form.book_title.value;
    const author = form.author.value;
    const image_url = form.image_url.value;
    const category = form.categoryName.value;
    const book_pdf_url = form.book_pdf_url.value;
    const book_description = form.book_description.value;

    const bookObj = {
      author,
      image_url,
      category,
      book_description,
      book_title,
      book_pdf_url,
    };

    //send data to db
    // Send data to the server
    fetch("https://mern-book-inventory-api.vercel.app/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Uploaded successfully..");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[980px] flex-col flex-wrap gap-4"
      >
        {/* {1st row } */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput
              id="book_title"
              type="text"
              placeholder="Book name"
              required
            />
          </div>

          {/* {author name } */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="Author Name" value="Author Name" />
            </div>
            <TextInput
              id="author"
              type="text"
              placeholder="Auther Name"
              required
            />
          </div>
        </div>

        {/* {2nd row } */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Image URL" />
            </div>
            <TextInput
              id="image_url"
              type="text"
              placeholder="Book image URL"
              required
            />
          </div>

          {/* {category} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="input_state" value="Book Category" />
            </div>

            <select
              className="w-full rounded"
              name="categoryName"
              id="category"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3rd row  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea
            className="w-full"
            id="book_description"
            type="text"
            placeholder="Write your Book Description..."
            rows={4}
          />
        </div>

        {/* book pdf url  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_pdf_url" value="Book PDF URL" />
          </div>
          <TextInput
            id="book_pdf_url"
            name="book_pdf_url"
            type="text"
            placeholder="Book pdf url"
            required
          />
        </div>

        <Button className="mt-5" type="submit">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBooks;
