import Film from "../components/Film";
import useApi from "../hooks/useApi";

const Series = () => {
  const { data, loading } = useApi(`${import.meta.env.VITE_API_URL}&s=game&type=series`)

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-5xl pt-16">Series</h1>
      {loading ? (
        <p className='font-semibold text-lg pt-10'>Loading...</p>
      ) : (
        <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
          {data.map((serie) => (
            <li key={serie.imdbID}>
              <Film img={serie.Poster} name={serie.Title} id={serie.imdbID}  />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Series