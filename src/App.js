import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/movie/:id" element={<Detail />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
