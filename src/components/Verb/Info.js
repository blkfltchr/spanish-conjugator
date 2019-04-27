import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const Info = (props) => {
	console.log(props);
	const { infinitive, infinitive_english, tense_english, mood_english } = props;
	return (
		<div className="verb-info">
			<div className="twelve">Verb:</div>
			<div className="twenty-four">
				{infinitive}
				<div />
				<span>({infinitive_english})</span>
			</div>
			<div className="twelve">Tense:</div>
			<div className="tense" data-tip="React-tooltip">
				{tense_english} {mood_english === 'Subjunctive' ? `(${mood_english})` : null}
				<ReactTooltip place="right" type="info" effect="float">
					{tooltip(tense_english)}
				</ReactTooltip>
			</div>
		</div>
	);
};

Info.propTypes = {
	infinitive: PropTypes.string,
	infinitive_english: PropTypes.string,
	tense_english: PropTypes.string,
	mood_english: PropTypes.string
};

export default Info;

const tooltip = (value) => {
	if (value === 'Present') {
		return 'Present example';
	}
	if (value === 'Future') {
		return 'Future example';
	}
	if (value === 'Imperfect') {
		return 'Imperfect';
	}
	if (value === 'Preterite') {
		return 'Preterite';
	}
	if (value === 'Conditional') {
		return 'Conditional';
	}
	if (value === 'Present Perfect') {
		return 'Present Perfect';
	}
	if (value === 'Future Perfect') {
		return 'Future Pefect';
	}
	if (value === 'Past Perfect') {
		return 'Past Perfect';
	}
	if (value === 'Preterite (Archaic)') {
		return 'Preterite';
	}
	if (value === 'Conditional Perfect') {
		return 'Conditional Perfect';
	}
	if (value === 'Present') {
		return 'Present';
	}
	if (value === 'Imperfect') {
		return 'Imperfect';
	}
	if (value === 'Future') {
		return 'Future';
	}
	if (value === 'Present Perfect') {
		return 'Present Perfect';
	}
	if (value === 'Future Perfect') {
		return 'Future Perfect';
	}
	if (value === 'Past Perfect') {
		return 'Past Perfect';
	}
	if (value === 'Affirmative Present') {
		return 'Affirmative Present';
	}
	if (value === 'Negative Present') {
		return 'Negative Present';
	} else {
		return 'ERROR';
	}
};
