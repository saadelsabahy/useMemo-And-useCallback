import React, { memo, useMemo } from 'react';
import './child.css';
function Child({ counter, updateCounterFromChild }) {
	console.log('child rendering !!');
	const loopValue = useMemo(() => {
		let loopValue = 0;
		for (let i = 0; i < 500_000_000; i++) {
			loopValue++;
		}
		return loopValue;
	}, []);
	return (
		<div className='child'>
			Child-- {loopValue} {counter}
			<button onClick={updateCounterFromChild}>child counter </button>
		</div>
	);
}

export default memo(Child);
