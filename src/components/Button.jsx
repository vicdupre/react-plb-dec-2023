const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: 15,
        borderRadius: 10,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
