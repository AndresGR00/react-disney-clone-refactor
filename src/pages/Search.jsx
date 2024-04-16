import SearchInput from "../components/SearchInput";
import { useState } from "react";
import Film from "../components/Film";
import useApi from "../hooks/useApi";

const Search = () => {
  const [query, setQuery] = useState("war");
  const { data, error, loading } = useApi(
    `${import.meta.env.VITE_API_URL}&s=${query}`
  );

  const onHandleInput = (event) => {
    if (event.target.value === "") {
      setQuery("war");
    } else {
      setQuery(event.target.value);
    }
  };

  return (
    <div className="min-h-[69vh] top-0">
      <section className="pt-10 pb-4">
        <SearchInput onChange={onHandleInput} />
      </section>
      <section className="flex flex-col items-center justify-center gap-6">
        {loading ? (
          <p className="font-semibold text-lg pt-10">Loading...</p>
        ) : error ? (
          <p className="font-semibold text-lg pt-10">
            No results found with this term
          </p>
        ) : (
          <ul className="flex flex-wrap justify-center items-center gap-4 p-6 pb-16">
            {data.map((search) => (
              <li key={search.imdbID}>
                <Film
                  img={search.Poster}
                  name={search.Title}
                  id={search.imdbID}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Search;
