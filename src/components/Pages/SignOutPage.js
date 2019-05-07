import React, { useEffect } from 'react';
import Dreamer from '../../assets/dreamer.svg';
import { Svg, Words, MyLink } from './PagesStyled';
import { PageContainer } from '../Navigation/Styled';

const SignOutPage = () => {
	return (
		<PageContainer>
			<Words>
				<Svg src={Dreamer} alt="goodbye" />
				<h2>hasta luego</h2>
				<MyLink to="/login">Log Back In</MyLink>
			</Words>
		</PageContainer>
	);
};

export default SignOutPage;
