import React, { useContext } from 'react';
import { TopBar, NavLogo, H1 } from './Styled';

const Navigation = (props) => {
	return (
		<TopBar>
			<NavLogo>
				<H1>Spanish Conjugator</H1>
			</NavLogo>
		</TopBar>
	);
};

export default Navigation;
