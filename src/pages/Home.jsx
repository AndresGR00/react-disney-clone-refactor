import HighlightsCarousel from "../components/HighlightsCarousel";
import FranchisesContainer from "../components/FranchisesContainer";
import { COMEDY_SERIES, NEW_CONTENT } from "../data/homeFilms.data";
import Film from "../components/Film";

const Home = () => {
  return (
    <>
      <section>
        <HighlightsCarousel />
      </section>
      <section>
        <FranchisesContainer />
      </section>
      <section className="flex flex-col gap-4 justify-center items-center pb-6 pr-4 pl-4">
        <h2 className="font-semibold text-3xl self-start ml-16">Comedy Series</h2>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {COMEDY_SERIES.map((serie) => (
            <li key={serie.id}>
              <Film img={serie.img} name={serie.name} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-4 justify-center items-center pb-8 pr-4 pl-4">
        <h2 className="font-semibold text-3xl self-start ml-16">New on Disney+</h2>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {NEW_CONTENT.map((content) => (
            <li key={content.id}>
              <Film img={content.img} name={content.name} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
