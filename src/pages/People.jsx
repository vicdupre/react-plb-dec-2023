import { Link, Outlet, useLoaderData } from "react-router-dom";
import Button from "../components/Button";

const loader = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/8aebc22725e945babdeb6302bd1e576a/people"
  );
  const people = await response.json();
  return { people };
};

const People = () => {
  const { people } = useLoaderData();

  return (
    <>
      <h2>Personnes</h2>
      <Link to={"/people/add"}>
        <Button>Ajouter une personne</Button>
      </Link>
      <Outlet />
      <ul>
        {people.map((person) => {
          return (
            <Link key={person._id} to={person._id}>
              <li>{`${person.firstName} ${person.lastName}`} </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export { loader };
export default People;
