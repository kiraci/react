import logo from './logo.svg';
import './App.css';
import NavComp from "./components/NavComp"
import { Container, Row } from 'reactstrap'
import CategoryList from './components/CategoryList';
import { Component } from 'react';
import ProductList from './components/ProductList'
import alertify from 'alertifyjs';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import CartList from './components/CartList'
import NotFound from './components/NotFound'

class App extends Component {

  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      products: [],
      currentCategory: "",
      cart: []
    };
  }

  componentDidMount() {
    this.getProducts();
  };

  getProducts = (categoryID) => {

    let url = "http://localhost:3000/products";

    if (categoryID) {
      url = "http://localhost:3000/products?categoryId=" + categoryID;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(item => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });

    alertify.success(product.productName + " added to cart!", 2);
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(item => item.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!", 2);
  }

  render() {
    return (
      <Container>
        <NavComp removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row className="mb-5">
          <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
        </Row>
        <Row>
          <Switch>
            <Route exact path="/" render={
              props => (
                <ProductList {...props} addToCart={this.addToCart} products={this.state.products} />
              )
            } />
            <Route exact path="/cart" render={
              props => (
                <CartList {...props} removeFromCart={this.removeFromCart} cart={this.state.cart} />
              )
            } />
            <Route component={NotFound} />
          </Switch>

        </Row>
      </Container>
    );
  }
}
/*<div className="App">
  <header className="App-header">
    <Styled red={true} />
    <Parent />
    <Counter />
    <Greet name="ahmet" />
    <Navbar/>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>*/

export default App;
