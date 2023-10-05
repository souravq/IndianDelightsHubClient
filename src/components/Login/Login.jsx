import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Login() {

  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const {user,LoginUser,GoogleSignIn,GithubSignIn, error} = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogin(event){
    event.preventDefault();
    setErrorMessage("");
    const loginData = event.target;
    const emailId = loginData.emailid.value;
    const password = loginData.password.value;
    if(password.length<6){
      setErrorMessage("Please Enter minimum 6 characters Password !!!");
      return;
    }
    LoginUser(emailId,password);
    setLoader(true);
  }
  function handleGoogleSignIn(){
    GoogleSignIn();
  }
  function handleGithubSignIn(){
    GithubSignIn();
  }

  useEffect(()=>{
    if(error){
      setLoader(false);
      setErrorMessage("Email Id and Password are Invalid !!!");
    }
   
  },[error])

  useEffect(()=>{
    if(user){
      setLoader(false);
      navigate("/");
    }
    
  },[user,navigate])

  

  if(loader){
    return(
      <Container style={{ height: "450px" }} className="items-center">
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
          <span className="loading loading-bars loading-lg"></span>
        </div>
       
      </Container>
    )
  }

  return (
    <div style={{ height: "58vh"}}>
      <Container style={{ height: "100%" }}>
        <div
          className="card bg-primary-content  glass"
          style={{ height: "100%" }}
        >
          <div className="card-body items-center text-center p-10">
            <h2 className="card-title">Login Here!</h2>
            <span>We are using cookies for no reason.</span>
           

            <div style={{ width: "500px" }}>
              <form onSubmit={handleLogin}>
                <div>
                  <input
                    type="email"
                    name="emailid"
                    placeholder="Enter email id"
                    className="input input-bordered input-info w-full max-w-xs"
                    required
                  />
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input input-bordered input-info w-full max-w-xs"
                    required
                  />
                </div>

                <br />
                <div className="card-actions justify-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-ghost">Reset</button>
                </div>
              </form>
            </div>
            
            <div>
                <button className="btn btn-outline btn-accent" onClick={handleGoogleSignIn}>Sign in with Google</button>&nbsp;&nbsp;
                <button className="btn btn-outline btn-info" onClick={handleGithubSignIn}>Sign in with Github</button>
                </div>
           
                  <div>
                    <span>Dont have an account <Link to="/register"><button className="btn btn-link">Register </button></Link>here</span>
                </div>
            <div>
             <p style={{color:"red"}}>{errorMessage}</p> 
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
