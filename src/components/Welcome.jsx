import PropTypes from "prop-types";

const Welcome = ({ name, children }) => {
  return (
    <div>
      <p>Hello {name} !</p>
      {children}
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node, //Tout élément affichable par le navigateur : JSX, chaine de caractères, chiffres...
};

Welcome.defaultProps = {
  name: "World",
};

export default Welcome;
