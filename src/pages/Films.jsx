import Film from "../components/Film";
import useApi from "../hooks/useApi";

const Films = () => {
  const { data, loading } = useApi(
    `${import.meta.env.VITE_API_URL}&s=love&type=movie`
  );
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-5xl pt-16">Films</h1>
      {loading ? (
        <p className="font-semibold text-lg pt-10">Loading...</p>
      ) : (
        <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
          {data.map((film) => (
            <li key={film.imdbID}>
              <Film img={film.Poster} name={film.Title} id={film.imdbID} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Films;
