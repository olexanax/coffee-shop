import { Outlet, Link } from "react-router-dom";
import Div from "./LayoutStyles";

const Layout = () => {
  return (
    <Div>
      <nav>
        <ul>
          <li>
            <Link to="/">CoffeeHouse</Link>
          </li>
          <li>  
            <Link to="/OurCoffee">OurCoffee</Link>
          </li>
          <li>
            <Link to="/ForYourPleasure">ForYourPleasure</Link>
          </li>
          <li>
            <Link to="/AboutItem">AboutItem</Link>
          </li>
        </ul>
      </nav>    
      <Outlet />
      <h1>fooootttteeeerrrrrr</h1>
    </Div>
  )
};

export default Layout;
