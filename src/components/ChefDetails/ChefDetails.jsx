import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../AuthProvider/AuthProvider";

//import chefCardImage from "../../assets/chef-card.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ChefDetails() {

   
  const {loader} = useContext(AuthContext);
  console.log(loader);

  const chefData = useLoaderData();

  const chef = chefData[0];


  //const navigate = useNavigate();

  const [favoriteArr, setfavoriteArr] = useState([]);


  const storageData = JSON.parse(localStorage.getItem("favoritesRecipe"));
  console.log(storageData);


  function handlefavorite(index,recipeName){
    
    setfavoriteArr([...favoriteArr,index]);
    toast("The recipe is added in your favorites !!!");

    const obj ={
      chefId:chef.id,
      chefName:chef.chefName,
      recipeName:recipeName,
    }
   
    storageData.push(obj);

    localStorage.setItem("favoritesRecipe",JSON.stringify(storageData))

  }

  if(chefData===null){
    return(
      <Container>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"450px"}}>
          <span className="loading loading-spinner text-secondary"></span>
        </div>
      </Container>
    )  
  }

    if(loader){
      //navigate("/login");
      window.location.replace('/login');
    }
 
  return (
    <Container>
      <ToastContainer position="top-right"/>
      <div className="hero bg-primary-content glass">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <LazyLoadImage src={chef.chefPicture} style={{borderRadius:"10px" , height:"100%"}}/>
          <div>
            <h1 className="text-5xl font-bold">{chef.chefName}!</h1>
            <p className="py-6">{chef.bio}</p>
            <p>Likes : {chef.likes}</p>
            <p>Recipes : {chef.recipesCount}</p>
            <p>Experience : {chef.experienceYears}</p><br/>
            <Link to="/"><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto bg-primary-content glass">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th style={{fontSize:"20px", padding:"30px"}}>Recipe Name</th>
                <th style={{fontSize:"20px"}}>Cooking Method</th>
                <th style={{fontSize:"20px"}}>Ingredients</th>
                <th style={{fontSize:"20px"}}>Rating</th>
                <th style={{fontSize:"20px"}}>Add to Favorite</th>
              </tr>
            </thead>
            <tbody>
              {chef.recipes.map((data, index) => {

                const m = data.cookingMethod;

                const breakpoint = /\d.|\d./;

                const splitted = m.split(breakpoint);
                //console.log(splitted);

                return (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{data.recipeName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                        <ol>
                        {splitted.slice(1,splitted.length).map((item,index)=>{
                        return (<li key={index}>{index+1}. {item}</li>)

                        })}
                        </ol>
                       
                    </td>
                    <td>{data.ingredients.map((item,index)=>{
                        return (<li key={index}>{item}</li>)

                    })}</td>
                    <td>
                      {data.rating}
                    </td>
                    
                    {
                      favoriteArr.includes(index)?(
                            <>
                            {
                              //console.log({chefId:chef.id,chefName:chef.chefName,recipeName:data.recipeName})
                            }
                          <th>
                            <button className="btn glass" disabled="disabled" >Add to Favoritee</button>
                          </th>
                        </>
                      )
                      
                      :
                      (
                        <>
                        {
                          //console.log({chefId:chef.id,chefName:chef.chefName,recipeName:data.recipeName})
                        }
                      <th>
                        <button className="btn glass"  onClick={()=>handlefavorite(index,data.recipeName,)}>Add to Favorite</button>
                      
                    </th>
                    </>
                    )
                    }
                    
                  </tr>
                );
              })}
            </tbody>
            
            
          </table>
        </div>
      </div>
    </Container>
  );
}
