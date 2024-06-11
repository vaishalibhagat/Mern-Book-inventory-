import React from "react";
import "../about/About.css";
import img from "./image/about.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>About Our Book Inventory System</h1>
      <p>
        Welcome to our Book Inventory System! Our mission is to help book
        enthusiasts buy and sell their favorite books at the best prices. We
        provide a user-friendly platform where you can explore a wide range of
        books, discover captivating stories, and manage your book inventory
        effortlessly.
      </p>
      <img src={img} alt="" />
      <h2>Our Features</h2>
      <ul>
        <li>
          Comprehensive book listings with detailed descriptions and reviews
        </li>
        <li>Advanced search and filter options to find your perfect read</li>
        <li>Easy-to-use interface for buying and selling books</li>
        <li>Secure transactions and reliable customer support</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        We aim to create a vibrant community of book lovers who can share their
        passion for reading. By providing the best deals and a seamless user
        experience, we hope to make book trading and discovering new reads as
        enjoyable as possible.
      </p>
    </div>
  );
}

export default About;
