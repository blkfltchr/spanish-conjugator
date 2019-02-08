import React, {
  Component
} from "react";
import miniData from "../../miniData";
import VerbFrequency from "./VerbFrequency";
import VerbTenses from "./VerbTenses";
import NumberPerson from "./NumberPerson";
import FilteredRandomButton from "../OptionsWrapper/RandomFiltered/FilteredRandomButton";
import RandomButton from "../home/Options/RandomButton";
import {
  spainSpanish,
  latamSpanish
} from "../../components/NumPersonFilters";
import {
  Beginner,
  Intermediate
} from "../../components/VerbTensesFilters";
import styled from "styled-components";
import "../../app.css";

const Title = styled.h1 `
  font-size: 1rem;
`;

const Section = styled.div `
  padding: 1%;
`;

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Intermediate,
      NumberPerson: "Latam",
      VerbTenses: "Intermediate",
      updated: false
    };
  }

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    if (event.target.value === "Beginner") {
      this.setState({
        data: Beginner
      });
    } else if (event.target.value === "Intermediate") {
      this.setState({
        data: Intermediate
      });
    } else if (event.target.value === "Advanced") {
      this.setState({
        data: miniData
      });
    }
  };

  filterData = event => {
    event.preventDefault();

    const spainBeg = spainSpanish(Beginner);
    const spainInter = spainSpanish(Intermediate);
    const spainAdv = spainSpanish(miniData);

    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Beginner"
    ) {
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Advanced"
    ) {
      this.setState({
        data: spainAdv
      });
    }

    const latamBeg = latamSpanish(Beginner);
    const latamInter = latamSpanish(Intermediate);
    const latamAdv = latamSpanish(miniData);

    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Beginner"
    ) {
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Advanced"
    ) {
      this.setState({
        data: latamAdv
      });
    }
    this.setState({
      updated: true
    });
  };

  render() {
    return (<
      div >
        <
      form onSubmit = {
        this.filterData
      } >
          <
      Section >
          <
      Title > Verb Frequency < /Title> <
      VerbFrequency / >
      <
      /Section> <
      Section >
          <
      Title > Verb Tenses < /Title> <
      VerbTenses updateVerbTenses = {
        this.updateVerbTenses
      }
      /> <
      /Section> <
      Section >
          <
      Title > Number and Person < /Title> <
      NumberPerson updateNumPerson = {
        this.updateNumPerson
      }
      /> <
      /Section> {
        /* <Button type="submit">Update Settings</Button> */ } <
      button className = "button-options" > Update Settings < /button> <
      /form> {
        this.state.updated === false ? (<
          RandomButton / >
        ) : (<
          FilteredRandomButton data = {
            this.state.data
          }
          />
        )
      } <
      /div>
    );
  }
}

export default OptionsContainer;