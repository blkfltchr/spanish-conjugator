import React from "react"

const VerbPerson = (props) => {
    return ( 
        <div className="person-flex">
            {/* <b>Pronoun: </b> */}
            <div>
                {props.randomPerson === "form_1s" && (
                <span> Yo</span>
                )}
                {props.randomPerson === "form_2s" && (
                <span> Tú</span>
                )}
                {props.randomPerson === "form_3s" && (
                <span> Él/Ella/Usted</span>
                )}
                {props.randomPerson === "form_1p" && (
                <span> Nosotros</span>
                )}
                {props.randomPerson === "form_2p" && (
                <span> Vosotros</span>
                )}
                {props.randomPerson === "form_3p" && (
                <span> Ellos/Ellas/Ustedes</span>
                )}
            </div>
        </div>
     );
}
 
export default VerbPerson;