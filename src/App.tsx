import * as React from "react";
import { Main } from "@app/pages";
import { Layout } from "@app/components";
import { Theme } from "@app/styles";

function App() {
	return (
		<>
			<Theme/>
			<Layout>
				<Main/>
			</Layout>
		</>
	)
}

export default App
