import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Profile from "components/Profile";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <Profile /> */}
      <PostList hasNavigation={true} />
      <Footer />
    </div>
  );
}
