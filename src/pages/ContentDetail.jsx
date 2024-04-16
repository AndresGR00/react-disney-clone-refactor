import { useParams } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";
import { useEffect, useState } from "react";

const ContentDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}&i=${id}&plot=full`
        );
        const processedRes = await res.json();
        setData(processedRes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilm();
  }, [id]);

  return (
    <section className="flex justify-center items-start]">
      <FilmDetail title={data.Title} plot={data.Plot} img={data.Poster} actors={data.Actors} director={data.Director} />
    </section>
  );
};

export default ContentDetail;
