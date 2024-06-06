import React from "react";
import "../blog/blog.css"; // Assuming you have a CSS file for styling

function Blog() {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <p>
        Welcome to our blog! Here you will find the latest updates, book
        reviews, author interviews, and literary insights. Our blog is dedicated
        to book enthusiasts who love to explore new worlds through words.
      </p>
      <div className="blog-posts">
        <div className="blog-post">
          <h2>Exploring the Classics</h2>
          <p>
            Dive into the timeless works that have shaped literature. From
            Shakespeare to Tolstoy, explore the classics that have stood the
            test of time.
          </p>
          <a href="#">Read more</a>
        </div>
        <div className="blog-post">
          <h2>Modern Literary Gems</h2>
          <p>
            Discover the contemporary books that are making waves in the
            literary world. Find out which modern authors are redefining
            storytelling.
          </p>
          <a href="#">Read more</a>
        </div>
        <div className="blog-post">
          <h2>Author Interviews</h2>
          <p>
            Get to know your favorite authors better. Our interviews provide a
            glimpse into the minds of the writers behind the stories you love.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
