import { Outlet, Link } from "react-router-dom";

import Wrapper from "./LayoutStyles";

import logo from '../../img/beans-logo.svg'


const Layout = () => {
  return (
      <Wrapper>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Coffee House</Link>
              </li>
              <li>  
                <Link to="/OurCoffee">Our Coffee</Link>
              </li>
              <li>
                <Link to="/ForYourPleasure">For Your Pleasure</Link>
              </li>
            </ul>
          </nav>    
        </header>
        <Outlet />
        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/">Coffee House</Link>
              </li>
              <li>  
                <Link to="/OurCoffee">Our Coffee</Link>
              </li>
              <li>
                <Link to="/ForYourPleasure">For Your Pleasure</Link>
              </li>
            </ul>
          </nav>    
          <img src={logo} alt=''/>
        </footer>
      </Wrapper>
  )
};

export default Layout;