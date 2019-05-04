<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
=======
import React, { useState, useEffect, useContext } from "react";
>>>>>>> fae4cd68a94ecceb64f519b067f50d893a4979bc

import '../../app.css';

<<<<<<< HEAD
import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import { VerbTenseFilters } from '../Filters/VerbTensesFilters';
import Input from './Input';
import { LevelContext } from '../../Context/Store';

const Verb = (props) => {
	const [ correct, setCorrect ] = useState(false);
	const [ randomVerb, setRandomVerb ] = useState({});
	const [ randomPerson, setRandomPerson ] = useState([]);
	const [ data, setData ] = useState(latamSpanish(VerbTenseFilters[0]));
	const [ NumberPerson, setNumberPerson ] = useState('Latam');
	const [ level, setLevel ] = useContext(LevelContext);
	const [ count, setCount ] = useState(0);
	useEffect(
		() => {
			randomize();
		},
		[ correct ]
	);
=======
import Settings from "../Settings/Settings";
import { spainSpanish, latamSpanish } from "../Filters/NumPersonFilters";
import { VerbTenseFilters } from "../Filters/VerbTensesFilters";
import Input from "./Input";
import { UsernameContext } from "../../Context/Store";

import axios from "axios";
import jwt_decode from "jwt-decode";

const Verb = props => {
  const [correct, setCorrect] = useState(false);
  const [randomVerb, setRandomVerb] = useState({});
  const [randomPerson, setRandomPerson] = useState([]);
  const [data, setData] = useState(latamSpanish(VerbTenseFilters[0]));
  const [NumberPerson, setNumberPerson] = useState("Latam");
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [username, setUsername] = useContext(UsernameContext);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const { username, id } = jwt_decode(token);
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("https://glacial-hamlet-47910.herokuapp.com/api/conjugator", options)
      .then(res => {
        // setVerbData(res.data);
        console.log("success");
        setUsername(username);
        console.log("Hello ", username);
      })
      // .then(res => console.log(res.data))
      // .then(verbData => console.log(verbData))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    randomize();
  }, [correct]);
>>>>>>> fae4cd68a94ecceb64f519b067f50d893a4979bc

	const randomize = () => {
		let randomVerb = data[Math.floor(Math.random() * data.length)];
		let randomPerson = Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7];
		// This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
		do {
			randomVerb = data[Math.floor(Math.random() * data.length)];
			randomPerson = Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7];
		} while (randomPerson[1] === '' || randomVerb.mood_english === 'Imperative Negative');
		setRandomVerb(randomVerb);
		setRandomPerson(randomPerson);
	};

	const handleRefresh = () => {
		setCorrect(false);
		setRandomVerb({});
		setRandomPerson([]);
		randomize();
	};

	const addCounter = () => {
		setCount(count + 1);
	};

	const resetCounter = () => {
		setCount(0);
	};

	const updateNumPerson = (event) => {
		setNumberPerson(event.target.value);
	};

	const updateVerbTenses = (event) => {
		setLevel(event.target.value);
		console.log(event.target.value);
		handleRefresh();
	};
	const filterData = (event) => {
		event.preventDefault();
		const Level = parseInt(level);
		if (NumberPerson === 'Spain') {
			const spainSpan = spainSpanish(VerbTenseFilters[Level]);
			setData(spainSpan);
		}

<<<<<<< HEAD
		if (NumberPerson === 'Latam') {
			const latamSpan = latamSpanish(VerbTenseFilters[Level]);
			setData(latamSpan);
		}
		handleRefresh();
	};
	console.log('Answer:', randomPerson[1]);
	return (
		<div>
			<Input
				data={data}
				randomPerson={randomPerson}
				randomVerb={randomVerb}
				randomize={randomize}
				addCounter={addCounter}
				resetCounter={resetCounter}
				count={count}
				level={level}
			/>
			<Settings filterData={filterData} updateVerbTenses={updateVerbTenses} updateNumPerson={updateNumPerson} />
		</div>
	);
=======
  // const filterData = event => {
  //   event.preventDefault();
  //   const Level = parseInt(level);
  //   if (NumberPerson === "Spain") {
  //     const spainSpan = spainSpanish(VerbTenseFilters[Level]);
  //     setData(spainSpan);
  //   }

  //   if (NumberPerson === "Latam") {
  //     const latamSpan = latamSpanish(VerbTenseFilters[Level]);
  //     setData(latamSpan);
  //   }
  //   handleRefresh();
  // };
  console.log("Answer:", randomPerson[1]);
  return (
    <div>
      <Input
        data={data}
        randomPerson={randomPerson}
        randomVerb={randomVerb}
        randomize={randomize}
        addCounter={addCounter}
        resetCounter={resetCounter}
        count={count}
      />
      <Settings
        // filterData={filterData}
        updateVerbTenses={updateVerbTenses}
        updateNumPerson={updateNumPerson}
      />
    </div>
  );
>>>>>>> fae4cd68a94ecceb64f519b067f50d893a4979bc
};

export default Verb;
