import PropTypes from "prop-types";

const FormInput = ({
  inputName,
  inputType,
  register,
  isRequired,
  requiredMessage,
  regexPattern,
  patternMessage,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold pb-1" htmlFor={inputName}>
        {inputName.charAt(0).toUpperCase() + inputName.slice(1)}
      </label>
      <input
        placeholder={placeholder}
        className="p-2 border rounded-lg bg-slate-100 dark:bg-stone-950"
        id={inputName}
        type={inputType}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: requiredMessage,
          },
          pattern: {
            value: regexPattern,
            message: patternMessage,
          },
        })}
      />
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  register: PropTypes.func,
  isRequired: PropTypes.bool,
  requiredMessage: PropTypes.string,
  regexPattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
