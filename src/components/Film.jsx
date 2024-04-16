import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Film = ({ img , name, id }) => {
  if (id) {
    return (
      <Link to={`/content/${id}`}>
        <img className="dark:hover:border-slate-100 hover:border-neutral-950 rounded-xl w-[300px] h-[180px] object-cover object-center border-2 p-1 border-transparent transition-all duration-300 transform hover:scale-105" src={img} alt={name} />
      </Link>
    );
  } else {
    return (
      <img className="dark:hover:border-slate-100 hover:border-neutral-950 rounded-xl w-[300px] h-[180px] object-cover object-center border-2 p-1 border-transparent transition-all duration-300 transform hover:scale-105" src={img} alt={name} />
    );
  }
}

Film.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
}

export default Film