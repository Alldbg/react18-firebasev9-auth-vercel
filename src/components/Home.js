import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import * as Sentry from "@sentry/react";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

const captureExceptionSentry =  (e) => {

  try {
    throw "Color already exists";
} catch (e) {
    Sentry.captureException(e);
    console.error(e);
}
}


  return (
    <>
      <div className="p-4 box mt-3 text-center" onClick={captureExceptionSentry}>
        Hello Welcome <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;