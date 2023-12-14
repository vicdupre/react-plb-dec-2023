import PropTypes from "prop-types";
import styles from "./Input.module.css";
const Input = (props) => {
  const {
    value,
    onChange,
    type,
    label,
    placeholder,
    name,
    id,
    required,
    ...rest
  } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${styles["input-root"]} rounded`}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        id={id}
        {...rest}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  required: false,
};

export default Input;
