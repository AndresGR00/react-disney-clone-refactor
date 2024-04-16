import FilmsIcon from "./Icons/FilmsIcon";
import HomeIcon from "./Icons/HomeIcon";
import MyList from "./Icons/MyList";
import SearchIcon from "./Icons/SearchIcon";
import SeriesIcon from "./Icons/SeriesIcon";

export const LINKS_DATA = [
  {
    route: "",
    icon: <HomeIcon />,
    name: "Home",
    id: 1,
  },
  {
    route: "search",
    icon: <SearchIcon />,
    name: "Search",
    id: 2,
  },
  {
    route: "request",
    icon: <MyList />,
    name: "Request",
    id: 3,
  },
  {
    route: "films",
    icon: <FilmsIcon />,
    name: "Films",
    displayClass: "films-icon",
    id: 4,
  },
  {
    route: "series",
    icon: <SeriesIcon />,
    name: "Series",
    displayClass: "series-icon",
    id: 5,
  },
];
