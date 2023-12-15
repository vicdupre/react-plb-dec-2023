import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom/dist";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews.reviews);

  return (
    <>
      <h2>Revues</h2>
      <Link to={"/reviews/add"}>
        <Button>Ajouter une revue</Button>
      </Link>
      <Outlet />
      <ul>
        {reviews.map((review) => {
          return (
            <Link key={review.id} to={review.id.toString()}>
              <li>{review.title} </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
