import React, { useState, useRef } from 'react';
import Reward from 'react-rewards';
import PropTypes from 'prop-types';
import Person from './Person';
import AccentButtons from './AccentButtons';
import Info from './Info';
import Checkmark from '../Checkmark/Checkmark';

const Input = (props) => {
	const [ value, setValue ] = useState('');
	const [ bestStreak, setBestStreak ] = useState(0);
	const [ totalAnswers, setTotalAnswers ] = useState(0);
	const [ correctAnswers, setCorrectAnswers ] = useState(0);
	const [ answered, setAnswered ] = useState(false);
	const [ helperText, setHelperText ] = useState(null);
	const [ correct, setCorrect ] = useState(false);
	const refReward = useRef(null);

	const handleChange = (event) => {
		setCorrect(false);
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		const { randomPerson, addCounter, resetCounter } = props;
		event.preventDefault();
		const userInput = value.toLowerCase();
		if (answered === true) {
			setTotalAnswers(totalAnswers + 1);
			handleRefresh();
			setAnswered(false);
		} else if (randomPerson[1] === userInput) {
			addCounter();
			setCorrectAnswers(correctAnswers + 1);
			setTotalAnswers(totalAnswers + 1);
			// alert('Correct!')
			handleRefresh();
			setCorrect(true);
			addStreak();
		} else if (randomPerson[1] !== userInput) {
			setHelperText(`False, the correct answer is ${randomPerson[1].toUpperCase()}.`);
			setAnswered(true);
			resetCounter();
		}
	};

	const handleExample = (event) => {
		const { data, randomVerb } = props;
		const hablar = data.filter((verb) => verb.infinitive === 'hablar');
		const hablarTense = hablar.filter((verb) => verb.tense_english === randomVerb.tense_english);
		const hablarMood = hablarTense.filter((verb) => verb.mood_english === randomVerb.mood_english);
		const hablarExample = hablarMood[0];
		event.preventDefault();
		setHelperText(`Yo + Hablar + ${randomVerb.tense_english} = YO ${hablarExample.form_1s.toUpperCase()}`);
	};

	const addAccent = (event) => {
		event.preventDefault();
		const accent = event.target.value;
		setValue(value + accent);
	};

	const handleRefresh = () => {
		const { randomize } = props;
		setValue('');
		setHelperText(null);
		setCorrect(false);
		randomize();
	};

	const addStreak = () => {
		const { count } = props;
		if (count >= bestStreak) {
			setBestStreak(bestStreak + 1);
			if (bestStreak % 5 === 0) {
				refReward.current.rewardMe();
			}
		}
	};
	const { randomPerson, randomVerb, count } = props;
	const { infinitive, tense_english, mood_english, infinitive_english, verb_english } = randomVerb;
	const buttonText = randomPerson[1] !== value.toLowerCase() && answered ? 'Next verb' : 'Submit';
	const percentage = totalAnswers < 1 ? 0 : (correctAnswers / totalAnswers * 100).toFixed(0);
	console.log(infinitive_english);
	return (
		<div>
			<div className="verb-info-wrapper">
				<div className="verb-streak">
					<div className="current-best-streak">
						<div className="streak">current streak:</div>
						<div className="twenty-four">{count}</div>
					</div>
					<Reward ref={refReward} type="emoji">
						<div className="current-best-streak">
							<div className="streak">best streak:</div>
							<div className="twenty-four">
								{bestStreak} <span role="img" aria-label="salsa dancer" />
							</div>
						</div>
					</Reward>
					<div className="current-best-streak">
						<div className="streak">percentage:</div>
						<div className="twenty-four">{percentage}%</div>
					</div>
				</div>
				<Info
					infinitive={infinitive}
					infinitive_english={infinitive_english}
					tense_english={tense_english}
					mood_english={mood_english}
					verb_english={verb_english}
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="input-section">
					<Person randomPerson={randomPerson[0]} />
					<input
						type="text"
						value={value}
						placeholder="Enter conjugated verb..."
						onChange={handleChange}
						className="input"
					/>
					<Checkmark correct={correct} />
				</div>
				<div className="text-under-input">
					<AccentButtons addAccent={addAccent} />
					<div className="hover-text" type="button" role="button" tabIndex={0} onClick={handleExample}>
						Show example <i className="far fa-arrow-alt-circle-right" />
					</div>
				</div>
				<div className="helper-text">
					{helperText && <div>{helperText}</div>}
					<button className="submit-button" type="submit" onClick={handleSubmit}>
						{buttonText}
					</button>
				</div>
			</form>
		</div>
	);
};

Input.propTypes = {
	randomPerson: PropTypes.string,
	addCounter: PropTypes.func,
	resetCounter: PropTypes.func,
	data: PropTypes.array,
	randomVerb: PropTypes.object,
	randomize: PropTypes.func,
	count: PropTypes.number
};

export default Input;
