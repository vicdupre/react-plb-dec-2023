import { useNavigate } from "react-router-dom";
import FirstForm from "../components/FirstForm";
import AbstractForm from "../components/AbstractForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle } from "../redux/actions/articlesActions";

const CreateArticle = () => {
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
    dispatch(createArticle(fields.title.value, fields.content.value));
    navigate("/articles");
  };
  return (
    <>
      <h2>Ajouter un article</h2>
      <AbstractForm
        onSubmit={handleSubmit}
        fields={fields}
        setFields={setFields}
      />
    </>
  );
};

export default CreateArticle;
