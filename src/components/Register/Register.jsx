import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Register() {

  const [errorMessage, setErrorMessage] = useState("");

  const {user,RegisterUser,GoogleSignIn,GithubSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  function handleRegister(event){
    event.preventDefault();
    setErrorMessage("");

    let targetValue = event.target;

    let userName = targetValue.username.value;
    let emailId = targetValue.emailid.value;
    let password = targetValue.password.value;
    let photoUrl = targetValue.photourl.value;
    if(password.length<6){
      setErrorMessage("Please Enter minimum 6 characters Password !!!");
      return;
    }

    console.log(userName, emailId,password,photoUrl);
    RegisterUser(emailId,password);
    setLoader(true);
    targetValue.reset();
  }

  function handleGoogleSignIn(){
    GoogleSignIn();
  }

  function handleGithubSignIn(){
    GithubSignIn();
  }

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
    <div style={{}}>
      <Container style={{height:"100%"}}>
        <div className="card bg-primary-content  glass" style={{height:"100%"}}>
          <div className="card-body items-center text-center p-10">
            <h2 className="card-title">Register Here!</h2>
            <span>We are using cookies for no reason.</span>
            <br/>

            <div style={{width:"500px"}}>
              <form onSubmit={handleRegister}>
                  <div>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name="username"
                        className="input input-bordered input-info w-full max-w-xs"
                      />
                    </div><br/>
                    <div>
                      <input
                        type="email"
                        placeholder="Enter Email Id"
                        name="emailid"
                        className="input input-bordered input-info w-full max-w-xs"
                        required
                      />
                    </div><br/>
                    <div>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="input input-bordered input-info w-full max-w-xs"
                        required
                      />
                    </div><br/>
                    <div>
                      <input
                        type="password"
                        placeholder="Enter Photo URL"
                        name="photourl"
                        className="input input-bordered input-info w-full max-w-xs"
                      />
                    </div>
                
                <br/>
                <div className="card-actions justify-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-ghost">Reset</button>
                </div><br/>
                </form>
                <div>
                <button className="btn btn-outline btn-accent" onClick={handleGoogleSignIn}>Sign in with Google</button>&nbsp;&nbsp;
                <button className="btn btn-outline btn-info" onClick={handleGithubSignIn}>Sign in with Github</button>
                </div><br/>
                <div>
                    <span>Have an account <Link to="/login"><button className="btn btn-link">Login </button></Link>here</span>
                </div>
                <div>
             <p style={{color:"red"}}>{errorMessage}</p> 
            </div>
            
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
