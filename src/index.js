import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import "./index.css"

const products = [
  { id: 1, name: "Phone", price: 299},
  { id: 2, name: "Latop", price: 999},
  { id: 3, name: "Headphones", price: 99},
  { id: 4, name: "camera", price: 799}
];

class App extends React.Component {
  state = {
    activePage : 'store',
    cart: []
  }
  handleAdd = item => {
    this.setState(prev => ({
      cart: [...prev.cart,item]
    }))
  }

  handlePageChange = page => {
    this.setState({ activePage: page })
  }
  render() {
    const { activePage, cart } = this.state;

    return (
      <div className="App">
        <NavBar onPageChange={this.handlePageChange} cartCount={cart.length} />
        <main>
          {activePage === 'store' ? 
            <ItemPage items={products} onAddToCart={this.handleAdd}/> : <CartPage items={cart} />
          }
          
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)