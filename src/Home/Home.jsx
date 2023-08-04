import React from "react";
import Slider from '../Components/Slider/Slider'
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import './home.scss'
import Categories from "../Components/Categories/Categories";
import Contact from "../Components/Contact/Contact";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";


const Home = () => {
    return (
        <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
        </div>
    )
}


export default Home