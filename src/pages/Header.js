import {Link} from 'react-router-dom'
import Cart from"./Cart"

const Header = (props) =>{

    return (
        <>  
        
        <nav >
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        <Cart/>
        </>
        
    )
}

export default Header;