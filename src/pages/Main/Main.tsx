import React from "react";
import { Button } from "@app/components";
import { Container, Counter, Row } from "./styles";

export const Main = React.memo(() => {
	const [count, setCount] = React.useState<number>(0);

	const onIncrement = () => setCount(count + 1);
	const onDecrement = () => setCount(count - 1);

	return (
		<Container>
			<Counter>count {count}</Counter>
			<Row>
				<Button square onClick={onIncrement}>+</Button>
				<Button square onClick={onDecrement}>-</Button>
			</Row>
		</Container>
	);
});

