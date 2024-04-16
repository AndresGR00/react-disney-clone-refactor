import PropTypes from "prop-types";

const NavButton = ({ displayClass, icon, name }) => {
  return (
    <button className={`${displayClass} dark:bg-gray-700 dark:hover:bg-gray-800 bg-slate-500 hover:bg-slate-600 rounded-full flex items-center justify-center gap-4 py-3 px-7 text-center text-base font-semibold`}>
      {icon && <span className=" dark:fill-slate-100 fill-neutral-950">{icon}</span>}
      <p>{name}</p>
    </button>
  );
};

NavButton.propTypes = {
  displayClass: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string,
};

export default NavButton;
