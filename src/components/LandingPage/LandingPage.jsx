import "./LandingPage.css";
//import chefImage from "../../assets/chef_image.png";
import { Container } from "@mui/material";
import ChefCard from "../ChefCard/ChefCard";
import { useLoaderData } from "react-router-dom";

import chef from "../../assets/chef-image.avif";

import { lazy } from "react";

const chefImage = lazy(() => import("../../assets/chef-image.avif"));
console.log(chefImage);

export default function LandingPage() {
  const chefData = useLoaderData();

  // Set and Get LocalStorage
  const data = localStorage.getItem("favoritesRecipe");
  if (!data) localStorage.setItem("favoritesRecipe", JSON.stringify([]));

  return (
    <div>
      <Container fixed>
        {/* Hero Section */}
        <div
          className="hero"
          style={{ backgroundImage: `url(${chef})`, height: "700px" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Embark on a Culinary Odyssey with IndianDelightsHub
              </h1>
              <p className="mb-5">
                Spice Up Your Kitchen: From the sizzle of street food to the
                richness of royal delicacies, our recipes bring the essence of
                India to your home.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Our Hero Chef */}
        <div
          className="mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            Meet Our Hero Chefs
          </span>
        </div>
        <div className="chefCardDiv mt-5 mb-10">
          {chefData.slice(0, 6).map((chef) => {
            return (
              <div className="chefCardComponent" key={chef.id}>
                <ChefCard chefData={chef} />
              </div>
            );
          })}
        </div>
        {/* Our delicious Cuisine */}
        <div
          className="mt-5 mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
          Our delicious Cuisine
          </span>
        </div>
        
        <div className="carousel rounded-box mb-5">
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBnFnRGbbd27_2Brn2NwFRGXcadyG1HtGsTFEWUlzZn0qccxCeQSuBQGnPbe1CL6rwCI&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuuVlqBUAMXNQER49K9Vp2rwL4_NZr6quXFg&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozCjLTvxdpiY1nTTvq0OuzcUvZYgrJPOyQ&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8r6Swn8ujvKEGarTIIDfdTf1qXZz91FXcJQ&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuuVlqBUAMXNQER49K9Vp2rwL4_NZr6quXFg&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS8EOf9CFwW5b58OWHXoYQDX536ZJOc4oGw&usqp=CAU" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_bl8NOjRaAWED-X88zLDQ1C_aoVZk8O0lg&usqp=CAU" alt="Burger" />
        </div>
        </div>

      {/* Cooking Tips */}
      <div
          className="mt-5 mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
          Cooking Tips
          </span>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mb-10">
          <figure><img src="https://res.cloudinary.com/dlwhuhzzp/image/upload/v1695840491/cuisine/gkb2wis0uneta0f4vu6q.webp" alt="Tadka" style={{height:"100%", borderRadius:"10px"}}/></figure>
          <div className="card-body">
            <h2 className="card-title">Mastering the Art of Tadka!</h2>
            <p>Tadka, also known as tempering, is a fundamental technique in Desi cooking. It involves infusing hot oil or ghee with whole spices like cumin seeds, mustard seeds, and curry leaves. This flavorful mixture is then added to a dish, imparting a burst of aroma and taste. To master the art of tadka, start by heating your chosen fat in a pan over medium heat. Add the whole spices and let them sizzle, releasing their essence into the oil. Be careful not to burn them! The tadka is typically added towards the end of cooking to preserve its freshness. Experiment with different combinations of spices to create your own signature tadka!</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>

      </Container>
    </div>
  );
}
