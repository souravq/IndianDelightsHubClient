//import { useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
//import { Container } from "@mui/material";
//import { useNavigate } from "react-router-dom";

export default function PrivateAuth(props) {

//const navigate = useNavigate();

console.log(window.location.pathname);
console.log(window.location.href);  
const pathname = window.location.pathname;
console.log(pathname);

const {userId} = useContext(AuthContext);
console.log(userId);

return (
    <div>{props.children}</div>
  )
}

