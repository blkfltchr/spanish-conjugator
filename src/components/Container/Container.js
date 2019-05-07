import React from 'react';
import Verb from '../Verb/index.js';
import styled from 'styled-components';

const Container = () => {
	return (
		<MyDiv>
			<Verb />
		</MyDiv>
	);
};

export default Container;

const MyDiv = styled.div`
	position: relative;
	width: 75%;
	margin: 100px auto;
`;
