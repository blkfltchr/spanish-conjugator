import React from "react"

const RandomPerson = (props) => {
    return ( 
        <div>
            {props.randomPerson === "form_1s" && (
            <span> Yo (Singular, 1st person)</span>
            )}
            {props.randomPerson === "form_2s" && (
            <span> Tú (Singular, 2nd person)</span>
            )}
            {props.randomPerson === "form_3s" && (
            <span> Él/Ella/Usted (Singular, 3rd person)</span>
            )}
            {props.randomPerson === "form_1p" && (
            <span> Nosotros (Plural, 1st person)</span>
            )}
            {props.randomPerson === "form_2p" && (
            <span> Vosotros (Plural, 2nd person)</span>
            )}
            {props.randomPerson === "form_3p" && (
            <span> Ellos/Ellas/Ustedes (Plural, 3rd person)</span>
            )}
        </div>
     );
}
 
export default RandomPerson;