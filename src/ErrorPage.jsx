import { Container } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/practicaldev/image/fetch/s--xAPSfOhW--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y4jht4xh0rsps1o56rcz.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div id="error-page">
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
