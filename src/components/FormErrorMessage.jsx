import PropTypes from "prop-types";

const FormErrorMessage = ({ error }) => {
  return <p className="dark:text-red-500 text-rose-800 font-semibold text-sm leading-tight pt-2 text-center">{error}</p>;
};

FormErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default FormErrorMessage;
