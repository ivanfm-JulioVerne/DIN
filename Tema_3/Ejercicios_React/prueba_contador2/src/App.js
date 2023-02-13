import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import React from 'react';

export default(props) => {
	const [ count, setCount ] =React.useState(0);
	const [ value, setValue ] =React.useState("");
	const [ step, setStep ] =React.useState(0);
	const max=5;
	
	/*const inc = c => {
		if(c>=max)return c;
		return c + 1;
	}
	const increment = () => setCount(inc(count));*/

	//const increment = () => setCount(count + 1);

	const cambiaStep = () => setStep(step => step+1);
	const increment = () => setCount(c=>c+1);
	const decrement = () => setCount(c=>c-1);
	const reset = () => setCount(()=>0);
	const incrementStep = () => setStep(c=>c+1);
	const decrementStep = () => setStep(c=>c-1);
	const resetStep = () => setStep(()=>0);
	const updateValue = () => setValue("Valor actualizado")
	React.useEffect(()=>{
		console.log("Ejecutando el efecto dependiente de count y value")
		document.title="Tu contador es "+count},[count,value]);
	React.useEffect(()=>{
		console.log("Ejecutando el efecto dependiente de value")
		document.title="Tu contador es "+count},[value]);

	React.useEffect(()=>{
		console.log("Ejecutando el efecto dependiente de count ")
		document.title="Tu contador es "+count},[count]);
	
	React.useEffect(()=>{
		console.log("Ejecutando el efecto dependiente de step ")
		setCount(count=>count+step);
		document.title="Tu contador es "+count},[step]);
	
	return (
	<>
		<label>Count</label>
		<Counter value={count} 
			increment={increment} 
			decrement={decrement} reset={reset} />
		<label>Step</label>
		<Counter value={step} 
			increment={incrementStep} 
			decrement={decrementStep} reset={resetStep} />
		<span>{value}</span>
		<br/>
		<button onClick={cambiaStep}>Actualizar Step</button>
		<button onClick={updateValue}>Actualizar Valor</button>
	</>
	);
}
