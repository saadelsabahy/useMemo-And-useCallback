import React, { useState, useCallback } from 'react';
import Child from './components/Child';

function App() {
	const [counter, setcounter] = useState(0);
	const [inputValue, setinputValue] = useState('');
	const updateCounterFromChild = useCallback(() => {
		setcounter(counter + 1);
	}, [counter]);
	/* 	const updateInput = useCallback((e) => setinputValue(e.target.value), [
		inputValue,
	]); */
	return (
		<div>
			<h2>hello from parent : - {counter} </h2>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setinputValue(e.target.value)}
			/>
			<button onClick={() => setcounter(counter + 1)}>+1</button>
			<Child
				counter={counter}
				updateCounterFromChild={updateCounterFromChild}
			/>
		</div>
	);
}

export default App;
