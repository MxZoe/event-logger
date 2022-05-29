import React from "react";
import PropTypes from "prop-types";

function Log(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.location}, {props.date}: {props.birds}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Log.propTypes = {
  birds: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenLogClicked: PropTypes.func // new PropType
};


export default Log;