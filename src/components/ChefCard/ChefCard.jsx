import { Link } from "react-router-dom";
//import chefCardImage from "../../assets/chef-card.jpeg";
import "./ChefCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ChefCard(props) {
  const chefData = props;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <div style={{width:"40%",padding:"10px"}}>
        <LazyLoadImage src={chefData.chefData.chefPicture} alt="Movie" style={{borderRadius:"10px",height:"100%" , width:"300px"}} loading="lazy"/>
    </div>
    <div className="card-body">
        <h2 className="card-title">{chefData.chefData.chefName}</h2>
        <br/>
        <p>Experience: {chefData.chefData.experienceYears} years</p>
        <p>Number Of Recipes: {chefData.chefData.recipesCount}</p>
        <p>Likes: {chefData.chefData.likes}</p>
        <div className="card-actions justify-end">
        <Link to={`chef/${chefData.chefData.id}`}><button className="btn btn-outline btn-primary" >View Recipes</button></Link>
        </div>
    </div>
</div>
  )
}
