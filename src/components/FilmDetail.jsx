import PropTypes from "prop-types";

const truncatePlot = (plot) => {
  if (plot && plot.length > 600) {
    return plot.substring(0, 600) + "...";
  } else {
    return plot;
  }
};

const FilmDetail = ({ title, plot, img }) => {
  const newPlot = truncatePlot(plot);

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 rounded-lg max-w-[900px] p-6">
      <div className="flex flex-col gap-8 max-w-[450px]">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p>{newPlot}</p>
      </div>
      <div>
        <img src={img} alt={title} className="rounded-md" />
      </div>
    </div>
  );
};

FilmDetail.propTypes = {
  title: PropTypes.string,
  plot: PropTypes.string,
  img: PropTypes.string,
};

export default FilmDetail;
