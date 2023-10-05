import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Favorite() {

  const {loader} = useContext(AuthContext);

    const favoriteData = JSON.parse(localStorage.getItem("favoritesRecipe"));
   
    const [favoriteDataState, setFavoriteDataState] = useState(favoriteData);

    function handleRemove(id,recipeName){
        //console.log(id, recipeName);
        
        let favoriteDataa = favoriteDataState.filter(data => {
            return !(data.chefId === id && data.recipeName === recipeName);
          });
      
        setFavoriteDataState(favoriteDataa);
        localStorage.setItem("favoritesRecipe",JSON.stringify(favoriteDataa));
    }

    if(loader){
      //navigate("/login");
      window.location.replace('/login');
    }

    if(favoriteData.length===0){
        return (
        <Container>
          <div className="mt-5 mb-5" style={{display:"flex", justifyContent:"center"}}>
            <span style={{fontSize:"30px", fontWeight:"600"}}>No Data Found !!!</span>
        </div>
        </Container>
        )
    }

  return (
    <Container>
        <div className="mt-5 mb-5" style={{display:"flex", justifyContent:"center"}}>
            <span style={{fontSize:"30px", fontWeight:"600"}}>My Favorites Recipes</span>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th style={{fontSize:"20px", padding:"30px"}}>Sr. No</th>
        <th style={{fontSize:"20px", padding:"30px"}}>Image</th>
        <th style={{fontSize:"20px", padding:"30px"}}>Chef Name</th>
        <th style={{fontSize:"20px", padding:"30px"}}>Recipe</th>
        <th style={{fontSize:"20px", padding:"30px"}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        favoriteDataState.map((data,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" />
                        </div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {data.chefName}
                    </td>
                    <td>
                        {data.recipeName}
                    </td>
                    <td>
                        <button className="btn btn-outline btn-error" onClick={()=>handleRemove(data.chefId,data.recipeName)}>Remove</button>
                    </td>
                    
              </tr>
            )
        })
      }
     
    
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
    </Container>
  )
}
