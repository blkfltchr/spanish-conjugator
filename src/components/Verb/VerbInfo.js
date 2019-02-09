import React from "react";

const VerbInfo = (props) => {
    return ( 
        <div>
            <div className="streak-flex">
                <p>
                    <b>Verb: </b>
                    {props.infinitive}
                </p>
                <p>
                    <b>Streak: </b>
                    {props.count}
                </p>
            </div>
            <div className="streak-flex">
                <p>
                    <b>Translation: </b>
                    {props.infinitive_english}
                </p>
                <p>
                    <b>Best streak: </b>
                    {props.bestStreak}
                </p>
            </div>
            <p>
                <b>Tense: </b>
                {props.tense_english} {props.mood_english}
            </p>
        </div>
   );
}
 
export default VerbInfo;