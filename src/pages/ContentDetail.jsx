import { useParams } from "react-router-dom";
import FilmDetail from "../components/FilmDetail";
import useApi from "../hooks/useApi";

const ContentDetail = () => {
  const { id } = useParams();
  
  const { data } = useApi(`${import.meta.env.VITE_API_URL}&i=${id}&plot=full`);

  return (
    <section className="flex justify-center items-start]">
      <FilmDetail title={data.Title} plot={data.Plot} img={data.Poster}/>
    </section>
  );
};

export default ContentDetail;

