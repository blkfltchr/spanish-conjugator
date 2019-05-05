import React, { useState, useEffect, useContext } from "react";
import "../../app.css";
import { VerbContext } from "../../Context/Store";

import Settings from "../Settings/Settings";
// import { spainSpanish } from "../Filters/NumPersonFilters";
// import { VerbTenseFilters } from "../Filters/VerbTensesFilters";
import Input from "./Input";
import { UsernameContext } from "../../Context/Store";

import axios from "axios";
import jwt_decode from "jwt-decode";

// import Filter, { FilterLevels } from "../Filters/Filter";

const Verb = props => {
  const [verbData, setVerbData] = useContext(VerbContext);
  const [correct, setCorrect] = useState(false);
  const [randomVerb, setRandomVerb] = useState({});
  const [randomPerson, setRandomPerson] = useState([]);
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
        setVerbData(res.data);

        // console.log("success");
        setUsername(username);
        // console.log("Hello ", username);
      })
      // .then(res => console.log(res.data))
      // .then(verbData => console.log(verbData))
      .catch(err => console.log(err));
  }, []);
  // console.log(verbData);

  useEffect(() => {
    // console.log("VerbData is ", verbData);
    setRandomVerb(verbData[Math.floor(Math.random() * verbData.length)]);
  }, [verbData]);

  useEffect(() => {
    if (randomVerb) {
      // console.log("RV is ", randomVerb);
      // console.log(randomVerb.infinitive);
      setRandomPerson(
        Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7]
      );
      // console.log("rV infinitive", JSON.stringify(randomVerb.infinitive));
    }
  }, [randomVerb]);

  useEffect(() => {
    if (randomPerson) {
      // console.log("RP is ", randomPerson);
      console.log("Answer:", randomPerson[1]);
    }
  }, [randomPerson]);

  // useEffect(() => {
  //   console.log("level is", level);
  // });

  useEffect(() => {
    randomize();
  }, [correct]);

  const randomize = () => {
    setRandomVerb(verbData[Math.floor(Math.random() * verbData.length)]);
    setRandomPerson(
      Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7]
    );
    do {
      setRandomVerb(verbData[Math.floor(Math.random() * verbData.length)]);
      setRandomPerson(
        Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7]
      );
    } while (
      setRandomPerson[1] === "" ||
      randomVerb.mood_english === "Imperative Negative"
    );
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

  const updateNumPerson = event => {
    setNumberPerson(event.target.value);
    console.log("from update level is", level);
  };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    console.log("from updateVerbTenese level is", level);
    handleRefresh();
  };

  //////********************** */LEVEL DATA FILTERING HAPPENS BELOW HERE *******************************////////
  const LevelOne = verbData.filter(
    verb =>
      verb.tense_english === "Present" && verb.mood_english === "Indicative"
  );

  const Two = verbData.filter(
    verb =>
      verb.tense_english === "Preterite" && verb.mood_english === "Indicative"
  );

  const LevelTwo = LevelOne.concat(Two);

  const LevelThree = verbData.filter(
    verb =>
      (verb.tense_english === "Present" &&
        verb.mood_english === "Indicative") ||
      (verb.tense_english === "Preterite" && verb.mood_english === "Indicative")
  );

  const Four = verbData.filter(
    verb =>
      verb.tense_english === "Present Perfect" &&
      verb.mood_english === "Indicative"
  );

  const LevelFour = LevelThree.concat(Four);

  const Five = verbData.filter(
    verb =>
      verb.tense_english === "Future" && verb.mood_english === "Indicative"
  );

  const LevelFive = LevelFour.concat(Five);

  const Six = verbData.filter(
    verb =>
      verb.tense_english === "Present Perfect" &&
      verb.mood_english === "Indicative"
  );

  const LevelSix = LevelFive.concat(Six);

  const VerbTenseFilters = [
    LevelOne,
    LevelTwo,
    LevelThree,
    LevelFour,
    LevelFive,
    LevelSix
    // miniData
  ];
  //////********************** */LEVEL DATA FILTERING HAPPENS ABOVE HERE *******************************////////

  const filterData = event => {
    event.preventDefault();
    const Level = parseInt(level);
    console.log(Level);
    if (NumberPerson === "Spain") {
      const spainSpan = spainSpanish(VerbTenseFilters[Level]);
      // const spainSpan = spainSpanish(Level);
      setVerbData(spainSpan);
    }

    if (NumberPerson === "Latam") {
      const latamSpan = latamSpanish(VerbTenseFilters[Level]);
      // const latamSpan = latamSpanish(Level);
      setVerbData(latamSpan);
    }
    handleRefresh();
  };

  return (
    <div>
      {randomVerb && randomPerson ? (
        <Input
          data={verbData}
          randomPerson={randomPerson}
          randomVerb={randomVerb}
          randomize={randomize}
          addCounter={addCounter}
          resetCounter={resetCounter}
          count={count}
        />
      ) : null}
      <Settings
        filterData={filterData}
        updateVerbTenses={updateVerbTenses}
        updateNumPerson={updateNumPerson}
      />
    </div>
  );

  function latamSpanish(data) {
    return data.map(verb => ({
      infinitive: verb.infinitive,
      infinitive_english: verb.infinitive_english,
      mood: verb.mood,
      mood_english: verb.mood_english,
      tense: verb.tense,
      tense_english: verb.tense_english,
      verb_english: verb.verb_english,
      form_1s: verb.form_1s,
      form_2s: verb.form_2s,
      form_3s: verb.form_3s,
      form_1p: verb.form_1p,
      form_3p: verb.form_3p,
      gerund: verb.gerund,
      gerund_english: verb.gerund_english,
      pastparticiple: verb.pastparticiple,
      pastparticiple_english: verb.pastparticiple_english
    }));
  }

  function spainSpanish(data) {
    return data.map(verb => ({
      infinitive: verb.infinitive,
      infinitive_english: verb.infinitive_english,
      mood: verb.mood,
      mood_english: verb.mood_english,
      tense: verb.tense,
      tense_english: verb.tense_english,
      verb_english: verb.verb_english,
      form_1s: verb.form_1s,
      form_2s: verb.form_2s,
      form_3s: verb.form_3s,
      form_1p: verb.form_1p,
      form_2p: verb.form_2p,
      form_3p: verb.form_3p,
      gerund: verb.gerund,
      gerund_english: verb.gerund_english,
      pastparticiple: verb.pastparticiple,
      pastparticiple_english: verb.pastparticiple_english
    }));
  }
};

export default Verb;
