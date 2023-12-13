import PropTypes from "prop-types";

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
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
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
