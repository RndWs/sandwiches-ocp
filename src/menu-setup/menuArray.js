
// IMPORT FUNCTIONS
import getUrl from "../functions/getUrl";

const BASE_URL = getUrl();
console.log(`BASE_URL: ${BASE_URL}`);

const menuArray = [
  {
    link: BASE_URL + "/",
    name: "Home",
    url: "components/Home",
    index: true
  },
  {
    link: BASE_URL + "/menu",
    name: "Menu",
    url: "components/Menu",
  },
  {
    link: BASE_URL + "/orders",
    name: "Orders",
    url: "components/Orders",
  },
  {
    link: BASE_URL + "/grids",
    name: "Grids",
    url: "components/Grids",
  },
  {
    link: BASE_URL + "/lists",
    name: "Lists",
    url: "components/Lists",
  },
  {
    link: BASE_URL + "/settings",
    name: "Settings",
    url: "components/Settings",
  },
];

export default menuArray;