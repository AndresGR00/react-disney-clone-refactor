import PropTypes from "prop-types";

const SearchInput = ({ onChange }) => {

  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <form action="#" className="w-full px-6">
      <input
        onChange={handleChange}
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Title, character or genre"
        className="dark:bg-gray-900 dark:hover:bg-gray-800 bg-slate-400 hover:bg-slate-500 dark:placeholder-slate-100 placeholder-gray-950 rounded-full py-3 px-7 text-base font-semibold w-full"
      />
    </form>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func,
};

export default SearchInput;
