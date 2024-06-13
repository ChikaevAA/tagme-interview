import React from "react";
import { LayoutContainer } from "./styles";

type Props = { children: React.ReactNode }

export const Layout = React.memo<Props>((props) => (
		<LayoutContainer>
			{props.children}
		</LayoutContainer>
	));
