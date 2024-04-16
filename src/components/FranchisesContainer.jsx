import Franchise from "./Franchise/Franchise";
import FRANCHISES_DATA from "../data/franchises.data";


const FranchisesContainer = () => {
    return (
        <div className="flex gap-4 flex-wrap justify-center items-center pb-10 pr-4 pl-4">
         {FRANCHISES_DATA.map(( {name, img, video, id} ) => (
            <Franchise key={id} img={img} name={name} video={video} />
         ))}
        </div>
      )
}

export default FranchisesContainer