import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/productContext';

import CartContext from './contexts/cartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const { Provider } = ProductContext;

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{ cart }}>
			<Navigation />

			{/* Routes */}
			
				<Provider value={{ products, addItem }}>
					<Route exact path="/">
						<Products />
					</Route>
				</Provider>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			
			</CartContext.Provider>
		</div>
	);
}

export default App;
