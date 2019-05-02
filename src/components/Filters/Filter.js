import React, { useContext } from "react";
import VerbContext from "../../Context/Store";

const Filter = () => {
  const [verbData, setVerbData] = useContext(VerbContext);
  console.log(verbData);
};

export default Filter;
