import { Link } from "react-router-dom";
import { routes } from "../router";
import Header from "../components/layout/Header";

const Title = () => {
  return (
    <>
      <h1>Title</h1>
      <a href="/">Lien classique</a>
      <Link to={routes.home}>Lien React Router</Link>
    </>
  );
};

export default Title;
