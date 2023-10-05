import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeDiv">
        <Header/>
        <Outlet/>
        <div className="footerDiv">
          <Footer/>
        </div>
       
    </div>
  )
}
