import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../redux/actions/reviewsActions";

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reviews = useSelector((state) => state.reviews.reviews);
  const review = reviews.find((review) => review.id == id);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(deleteReview(id));
    navigate("/reviews", {
      replace: true,
    });
  };

  if (!review) {
    return <p style={{ color: "tomato" }}>Cette revue n'existe pas</p>;
  }

  return (
    <>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
      <Button onClick={handleDelete}>Supprimer la revue</Button>
    </>
  );
};

export default Review;
