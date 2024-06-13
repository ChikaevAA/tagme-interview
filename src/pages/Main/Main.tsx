import React from 'react';
import {Button} from "@app/components";
import styled from "styled-components";

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


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Counter = styled.div`
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    padding: 4px 8px;
`

const Row = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`
