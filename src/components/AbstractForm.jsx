import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AbstractForm = () => {
  const [fields, setFields] = useState({
    firstName: {
      label: "Prénom",
      type: "text",
      value: "",
      props: {},
    },
    lastName: {
      label: "Nom",
      type: "text",
      value: "",
      props: {},
    },
    age: {
      label: "Âge",
      type: "number",
      value: 18,
      props: {
        min: 0,
        max: 120,
      },
    },
  });
  const handleClick = () => {
    alert("clicked");
  };
  const handleChange = (event) => {
    console.log(event);
    setFields((prev) => ({
      ...prev,
      [event.target.name]: {
        ...prev[event.target.name],
        value: event.target.value,
      },
    }));
  };
  return (
    <div>
      {Object.entries(fields).map(([key, field]) => (
        <Input
          key={key}
          value={field.value}
          onChange={handleChange}
          id={key}
          name={key}
          label={field.label}
          type={field.type}
          {...field.props}
        />
      ))}

      <Button onClick={handleClick}>Valider</Button>
    </div>
  );
};

export default AbstractForm;
