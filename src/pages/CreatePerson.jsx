import { Form, redirect, useNavigate } from "react-router-dom";
import FirstForm from "../components/FirstForm";
import Button from "../components/Button";

const action = async ({ params, request }) => {
  const formData = await request.formData();
  const res = await fetch(
    "https://crudcrud.com/api/8aebc22725e945babdeb6302bd1e576a/people",
    {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(Object.fromEntries(formData)),
    }
  );
  const data = await res.json();
  redirect("/people");
  return data;
};

const CreatePerson = () => {
  return (
    <>
      <h2>Ajouter une personne</h2>
      <Form method="post" action="/people">
        <label htmlFor="firstName">Prenom</label>
        <input name="firstName" id="firstName" />
        <label htmlFor="lastName">Nom</label>
        <input name="lastName" id="lastName" />
        <Button type="submit">Envoyer</Button>
      </Form>
    </>
  );
};

export { action };
export default CreatePerson;
