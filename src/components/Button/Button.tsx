import React from "react";
import { ButtonContainer } from "./styles";

type Props = {
	children: React.ReactNode;
	square?: boolean
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
	const { children, square = false, ...rest } = props;

	return (
		<ButtonContainer {...rest} $square={square}>
			{children}
		</ButtonContainer>
	);
};
