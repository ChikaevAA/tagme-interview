import { NormalizeStyle } from "./normalize";
import { GlobalStyle } from "./global";
import React from "react";

export const Theme = React.memo(() => (
	<>
		<GlobalStyle />
		<NormalizeStyle />
	</>
))
