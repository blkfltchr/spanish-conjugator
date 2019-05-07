import React from 'react';
import Work from '../../assets/work.svg';
import ReactImage from '../../assets/react.svg';
import GitImage from '../../assets/git.svg';
import { AboutDiv, AboutImgDiv, AboutH3Div, StlyedH3 } from './Styled';

const About = () => {
	return (
		<AboutDiv>
			<AboutH3Div>
				<StlyedH3> Made With Hard Work & </StlyedH3>

				<StlyedH3>&nbsp; Using ReactJS &nbsp; </StlyedH3>

				<a href="https://github.com/conjugator/spanish-conjugator">
					<StlyedH3>&nbsp; Check out our Repo on Github!</StlyedH3>
				</a>
			</AboutH3Div>
			<AboutImgDiv>
				<img src={Work} alt="work" width="30%" />
				<img src={ReactImage} alt="React" width="30%" />
				<img src={GitImage} alt="version control" width="30%" />
			</AboutImgDiv>
		</AboutDiv>
	);
};

export default About;
