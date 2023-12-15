import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../redux/actions/articlesActions";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articles = useSelector((state) => state.articles.articles);
  const article = articles.find((article) => article.id == id);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(deleteArticle(id));
    navigate("/articles", {
      replace: true,
    });
  };

  if (!article) {
    return <p style={{ color: "tomato" }}>Cet article n'existe pas</p>;
  }

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Button onClick={handleDelete}>Supprimer l'article</Button>
    </>
  );
};

export default Article;
