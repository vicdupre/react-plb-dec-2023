import { useNavigate } from "react-router-dom";
import FirstForm from "../components/FirstForm";

const CreatePerson = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const res = await fetch(
      "https://crudcrud.com/api/8aebc22725e945babdeb6302bd1e576a/people",
      {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    navigate("/people");
    /* 
        Ou avec Axios 
        const { data } = await axios.post(
          "https://crudcrud.com/api/dc97da7254e1469fac645feb71642e33/people",
          values
        ); */
  };
  return (
    <>
      <h2>Ajouter une personne</h2>
      <FirstForm onSubmit={handleSubmit} />
    </>
  );
};

export default CreatePerson;
