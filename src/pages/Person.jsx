import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

const Person = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://crudcrud.com/api/8aebc22725e945babdeb6302bd1e576a/people/" +
            id
        );
        const data = await response.json();
        setPerson(data);
        setError(null);
      } catch (error) {
        setError(
          "Une erreur est survenue, êtes vous sûr que cette personne existe ?"
        );
      }

      setLoading(false);
    })();
  }, [id]);

  const handleDelete = async (id) => {
    await axios.delete(
      "https://crudcrud.com/api/8aebc22725e945babdeb6302bd1e576a/people/" + id
    );
    navigate("/people", {
      replace: true,
    });
  };

  if (error) {
    return <p style={{ color: "tomato" }}>{error}</p>;
  }

  return (
    <>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <h2>{`${person.firstName} ${person.lastName}`}</h2>
          <Button onClick={() => handleDelete(id)}>
            Supprimer la personne
          </Button>
        </>
      )}
    </>
  );
};

export default Person;
