import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
// import OtherBook from './OtherBook';
import Review from "./Review";

const Ho = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      {/* <OtherBook /> */}
      <Review />
    </div>
  );
};

export default Ho;
