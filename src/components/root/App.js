import { Component } from 'react';
import { Container } from 'reactstrap'
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom'
import CartDetail from "../cart/CartDetail"
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';
 
class App extends Component {

  render() {
    return (
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/saveProduct/:productId" component={AddOrUpdateProduct}/>
          <Route path="/saveProduct/" exact component={AddOrUpdateProduct}/>
          <Route path="/cart" exact component={CartDetail}/>
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;
