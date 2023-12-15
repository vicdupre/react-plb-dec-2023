import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom/dist";

const Articles = () => {
  const articles = useSelector((state) => state.articles.articles);

  return (
    <>
      <h2>Articles</h2>
      <Link to={"/articles/add"}>
        <Button>Ajouter un article</Button>
      </Link>
      <Outlet />
      <ul>
        {articles.map((article) => {
          return (
            <Link key={article.id} to={article.id.toString()}>
              <li>{article.title} </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
