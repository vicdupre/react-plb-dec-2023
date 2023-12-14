import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const FirstForm = ({ onSubmit = (values) => {} }) => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
  });
  const handleReset = () => {
    setFields({
      firstName: "",
      lastName: "",
    });
  };
  const handleChange = (event) => {
    console.log(event);
    setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={fields.firstName}
        onChange={handleChange}
        id="firstName"
        name="firstName"
        label="Prénom"
        required
      />
      <Input
        value={fields.lastName}
        onChange={handleChange}
        id="lastName"
        name="lastName"
        label="Nom"
        required
      />
      <Button type="submit">Valider</Button>
      <Button onClick={handleReset} type="reset">
        Reset
      </Button>
    </form>
  );
};

export default FirstForm;
