import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../../app.css";
import { VerbContext, LevelContext } from "../../Context/Store";

import Settings from "../Settings/Settings";
import { spainSpanish, latamSpanish } from "../Filters/NumPersonFilters";
import {} from "../Filters/VerbTensesFilters";
import Input from "./Input";

import Filter from "../Filters/Filter";

const Verb = props => {
  const [verbData, setVerbData] = useContext(VerbContext);
  const [correct, setCorrect] = useState(false);
  const [randomVerb, setRandomVerb] = useState({});
  const [randomPerson, setRandomPerson] = useState([]);
  // const [data, setData] = useState([]);
  const [NumberPerson, setNumberPerson] = useState("Latam");
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImFzaCIsImlhdCI6MTU1Njc2NjUzMCwiZXhwIjoxNTU2ODUyOTMwfQ._Ddno-1a-C3OjQCqkzG05JBSNIrc5q3DJuRVWIGs1TA";
    const userName = jwt_decode(token);
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("https://glacial-hamlet-47910.herokuapp.com/api/conjugator", options)
      .then(res => {
        setVerbData(res.data);
      })
      // .then(res => console.log(res.data))
      // .then(verbData => console.log(verbData))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log(verbData);
  // }, [verbData]);

  useEffect(() => {
    // randomize();
  }, [correct]);

  const randomize = () => {
    setRandomVerb(verbData[Math.floor(Math.random() * verbData.length)]);
    console.log(randomVerb);
    setRandomPerson(
      Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7]
    );
    // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
    do {
      setRandomVerb(verbData[Math.floor(Math.random() * verbData.length)]);
      setRandomPerson(
        Object.entries(randomVerb)[Math.floor(Math.random() * 5) + 7]
      );
    } while (
      randomPerson[1] === "" ||
      randomVerb.mood_english === "Imperative Negative"
    );
    // setRandomVerb(myRandomVerb);
    // setRandomPerson(myRandomPerson);
  };

  const handleRefresh = () => {
    setCorrect(false);
    setRandomVerb({});
    setRandomPerson([]);
    // randomize();
  };

  const addCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const updateNumPerson = event => {
    setNumberPerson(event.target.value);
  };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    handleRefresh();
  };

  const filterData = event => {
    event.preventDefault();
    const Level = parseInt(level);
    if (NumberPerson === "Spain") {
      const spainSpan = spainSpanish(VerbTenseFilters[Level]);
      setVerbData(spainSpan);
    }

    if (NumberPerson === "Latam") {
      const latamSpan = latamSpanish(VerbTenseFilters[Level]);
      setVerbData(latamSpan);
    }
    handleRefresh();
  };
  console.log("Answer:", randomPerson[1]);
  return (
    <div>
      <Input
        data={verbData}
        randomPerson={randomPerson}
        randomVerb={randomVerb}
        randomize={randomize}
        addCounter={addCounter}
        resetCounter={resetCounter}
        count={count}
      />
      <Settings
        filterData={filterData}
        updateVerbTenses={updateVerbTenses}
        updateNumPerson={updateNumPerson}
      />
      <Filter data={verbData} />
    </div>
  );
};

export default Verb;
