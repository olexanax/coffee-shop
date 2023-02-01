import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoffeHouse from "./pages/CoffeeHouse/CoffeeHouse";
import ForYourPleasure from "./pages/ForYourPleasure/ForYourPleasure";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import AboutItem from "./pages/AboutItem/AboutItem";
import Layout from "./pages/Layout/Layout";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeHouse />} />
          <Route path="OurCoffee" element={<OurCoffee />} />
          <Route path="ForYourPleasure" element={<ForYourPleasure />} />
          <Route path="AboutItem/:id" element={<AboutItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
