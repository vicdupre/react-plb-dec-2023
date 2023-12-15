import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AbstractForm = ({ onSubmit, fields, setFields }) => {
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
    <form onSubmit={(e) => onSubmit(e, fields)}>
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

      <Button type="submit">Valider</Button>
    </form>
  );
};

export default AbstractForm;
