const Button = ({ children, onClick, type = "button", ...rest }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: 15,
        borderRadius: 10,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
