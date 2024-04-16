import { useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import './Franchise.css'

const Franchise = ({ img, name, video }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`medias relative w-64 h-36 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 border-2 ${
        hovering
          ? "dark:border-slate-100 border-neutral-950"
          : "border-transparent"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`w-full h-full object-cover ${
          hovering ? "" : "dark:bg-gray-900 bg-slate-400"
        }`}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        {hovering && (
          <div className="absolute inset-0">
            <ReactPlayer
              url={video}
              playing
              loop
              width="100%"
              height="100%"
              className="hover:scale-105"
              style={{ position: "absolute", zIndex: -1,
              transform: "scale(1.05)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Franchise.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  video: PropTypes.string,
};

export default Franchise;
