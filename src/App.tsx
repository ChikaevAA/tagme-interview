import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "@app/pages";
import { Layout } from "@app/components";
import { Theme } from "@app/styles";

function App() {
	return (
		<BrowserRouter>
			<Theme/>
			<Layout>
				<Routes>
					<Route index element={<Main/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>


	)
}

export default App
