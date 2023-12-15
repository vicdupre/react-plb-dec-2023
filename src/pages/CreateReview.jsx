import { useNavigate } from "react-router-dom";
import AbstractForm from "../components/AbstractForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle } from "../redux/actions/articlesActions";
import { createReview } from "../redux/actions/reviewsActions";

const CreateReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    title: {
      label: "Titre",
      type: "text",
      value: "",
      props: {},
    },
    content: {
      label: "Contenu",
      type: "text",
      value: "",
      props: {},
    },
  });
  const handleSubmit = async (event, values) => {
    event.preventDefault();
    console.log(values);
    dispatch(createReview(fields.title.value, fields.content.value));
    navigate("/reviews");
  };
  return (
    <>
      <h2>Ajouter une revue</h2>
      <AbstractForm
        onSubmit={handleSubmit}
        fields={fields}
        setFields={setFields}
      />
    </>
  );
};

export default CreateReview;
