import { Container } from "@mui/material";
import "./ContactUs.css";
import { Link } from "react-router-dom";
//import { Marker, Popup, TileLayer } from "react-leaflet";
//import { Map } from "leaflet";
//import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//const position = [51.505, -0.09]
const ContactUs = () => {
  return (
    <Container fixed>
      <div className="card hero  bg-base-200 mt-24">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rb3kSwAQ8kOrZoAHe8cKehACyjO5ZqssXw&usqp=CAU"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Indian Delights Hub!</h1>
            <p className="py-6">
            IndianDelightsHub is your culinary gateway to the diverse and flavorful world of Indian cuisine. Immerse yourself in a rich tapestry of tastes, textures, and aromas crafted by our skilled chefs. Whether you are a seasoned home cook or a culinary enthusiast, our platform offers an exclusive collection of recipes spanning the vast landscape of Indian cooking.
            </p>
            <Link to="/"><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
      {/* <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div> */}
     
    </Container>
  );
};

export default ContactUs;
