import React from 'react';
import styled from "styled-components";

type Props = { children: React.ReactNode }

export const Layout = React.memo<Props>((props) => (
		<Container>
			{props.children}
		</Container>
	));

const Container = styled.div`
    display: flex;
    height: 100dvh;
    width: 100dvw;

    align-items: center;
    justify-content: center;
    background: #FFF;
`;
