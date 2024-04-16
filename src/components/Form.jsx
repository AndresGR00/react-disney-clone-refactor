import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormErrorMessage from "./FormErrorMessage";
import { ERRORS_DICTIONARY } from "../data/errorsDictionary";
import { useState } from "react";

const Form = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      email: "",
      content: "",
      customer: "",
    },
  });

  const [thanks, setThanks] = useState(false);
  const [submittedContent, setSubmittedContent] = useState("");

  const submit = (formData) => {
    setThanks(true);
    setSubmittedContent(formData.content);
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="flex flex-col rounded-md gap-6 w-[300px] dark:bg-gray-900 bg-slate-400 p-4 mt-6 mb-6"
    >
      <div>
        <FormInput
          inputName="email"
          inputType="email"
          register={register}
          isRequired={true}
          requiredMessage={ERRORS_DICTIONARY.email.emailIsRequired}
          regexPattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[com]{3,}$/}
          patternMessage={ERRORS_DICTIONARY.email.emailPattern}
          placeholder={"Ex: john@doe.com"}
        />
        {formState.errors.email ? (
          <FormErrorMessage error={formState.errors.email.message} />
        ) : null}
      </div>

      <div>
        <FormInput
          inputName="content"
          inputType="text"
          register={register}
          isRequired={true}
          requiredMessage={ERRORS_DICTIONARY.content.contentIsRequired}
          placeholder={"Film or serie"}
        />
        {formState.errors.content ? (
          <FormErrorMessage error={formState.errors.content.message} />
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold pb-1" htmlFor="customer">
          Current customer?
        </label>
        <select
          id="customer"
          className="p-2 border rounded-lg bg-slate-100 dark:bg-stone-950"
          placeholder="-"
          {...register("customer", {
            required: {
              value: true,
              message: ERRORS_DICTIONARY.customer.customerIsRequired,
            },
          })}
        >
          <option disabled value="" defaultValue>
            -
          </option>
          ;<option value="yes">Yes</option>;<option value="no">No</option>;
        </select>
        {formState.errors.customer ? (
          <FormErrorMessage error={formState.errors.customer.message} />
        ) : null}
      </div>

      <button
        type="submit"
        disabled={!formState.isDirty}
        className="dark:bg-gray-700 dark:hover:bg-gray-800 bg-slate-500 hover:bg-slate-600 rounded-full p-2 text-center text-base font-semibold cursor-pointer disabled:cursor-not-allowed"
      >
        Send
      </button>

      {thanks ? (
        <div className="flex flex-col gap-2">
          <p className="dark:text-lime-600 text-green-800">
            Thank you very much for sending your message.
          </p>
          <p className="dark:text-lime-600 text-green-800">
            This is the content you have requested:{" "}
            <span className="font-semibold">{submittedContent}</span>
          </p>
        </div>
      ) : null}
    </form>
  );
};

export default Form;
