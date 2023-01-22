import { Route, Routes } from "react-router-dom";

import { Notfound } from "../pages/NotFound/Notfound";
import Home from "../pages/Home/Home";

import { Beauty } from "../pages/Products/Beauty/Beauty";
import { Electronics } from "../pages/Products/Electronics/Electronics";
import { Fashion } from "../pages/Products/Fashion/Fashion";
import { Flights } from "../pages/Products/Flights/Flights";
import { Grocery } from "../pages/Products/Grocery/Grocery";
import { HomeFurniture } from "../pages/Products/HomeFurniture/HomeFurniture";
import { MobilesTablets } from "../pages/Products/MobilesTablets/MobilesTablets.jsx";
import { Poco } from "../pages/Products/MobilesTablets/Poco";
import { Top } from "../pages/Products/TopOffers/Top";
import { TvsAppliances } from "../pages/Products/TvsAppliances/TvsAppliances";
import Cart from "../pages/Cart/Cart";
import Induction from "../pages/Products/Induction/Induction";
import ActionToys from "../pages/Products/ActionToys/ActionToys";
import MensFashion from "../pages/Products/FashionMens/FashionMens";
import WomensFashion from "../pages/Products/FashionWomens/WomensFashion";

// eslint-disable-next-line import/no-anonymous-default-export
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/induction" element={<Induction />} />
      <Route path="/mens_fashion" element={<MensFashion />} />
      <Route path="/womens_fashion" element={<WomensFashion />} />
      <Route path="/action_toys" element={<ActionToys />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/homefurniture" element={<HomeFurniture />} />
      <Route path="/mobiletablets" element={<MobilesTablets />} />
      <Route path="/tvAppliances" element={<TvsAppliances />} />
      <Route path="/top" element={<Top />} />
      <Route path="/poco" element={<Poco />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};
export default AllRoutes;
