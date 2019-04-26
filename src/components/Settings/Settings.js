import React, { useState } from 'react';
import '../../app.css';
import PropTypes from 'prop-types';
import VerbTenses from './VerbTenses';
import NumberPerson from './VerbNumberPerson';

const Settings = (props) => {
	const [ updateSettings, setUpdateSettings ] = useState(false);

	const changeSettings = (event) => {
		const { filterData } = props;
		event.preventDefault();
		setUpdateSettings(!updateSettings);
		if (updateSettings) {
			alert('Your settings are updated.');
			filterData(event);
		}
	};

	const hide = 'settings-buttons-hide';
	const display = 'settings-buttons-display';
	const { updateVerbTenses, updateNumPerson } = props;

	let content = (
		<div className="settings">
			<button type="button" onClick={changeSettings} className="button-options">
				{updateSettings ? 'Update level' : 'Change level'}
			</button>
			<div className="two-dropdowns">
				<div className={updateSettings ? display : hide}>
					<VerbTenses updateVerbTenses={updateVerbTenses} />
				</div>
				<div className={updateSettings ? display : hide}>
					<NumberPerson updateNumPerson={updateNumPerson} />
				</div>
			</div>
		</div>
	);
	return content;
};

Settings.propTypes = {
	updateVerbTenses: PropTypes.func,
	updateNumPerson: PropTypes.func,
	filterData: PropTypes.func
};

export default Settings;
