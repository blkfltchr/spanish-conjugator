import React from "react";
import BeginnerButton from "./Levels/BeginnerButton"
import IntermediateButton from "./Levels/IntermediateButton"
import AdvancedButton from "./Levels/AdvancedButton"
import {Link} from "react-router-dom"

const Home = () => {
    return ( 
        <div>
            <p><b>What level of Spanish speaker are you?</b></p>
            <BeginnerButton />
            <IntermediateButton />
            <AdvancedButton />
            <Link to="/nextlevel">Next level</Link>
        </div>
     );
}
 
export default Home;