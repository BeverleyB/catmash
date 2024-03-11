import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Vote from './pages/Vote/vote';
import Result from './pages/Result/result';

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Vote />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;
