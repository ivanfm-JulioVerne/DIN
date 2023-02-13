import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import React from 'react';

export default(props) => {
	const [ count, setCount ] =React.useState(0);
	
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const reset = () => setCount(0);
	
	return (<Counter value={count} 
		increment={increment} 
		decrement={decrement} reset={reset} />);
}