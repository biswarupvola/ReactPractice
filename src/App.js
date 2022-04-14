import './App.css';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './pages/Home';
import ProductDetails from './pages/ProductsDetails';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    
      <Switch>
        
        <Route path="/" component={Home} exact />
        <Route path="/details"  component={ProductDetails} exact />
        <Route path="/checkout"  component={Checkout} exact />

      </Switch>
     
    
  );
}

export default App;
