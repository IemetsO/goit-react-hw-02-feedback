import React from "react";
import "./FeedbackOptions.css"
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onleaveFeedback}) => {
  return(
    <button type="button" className="button" onClick={onleaveFeedback}>
      {options}
    </button>
    )
}


export default FeedbackOptions

FeedbackOptions.propTypes = {
options: PropTypes.string.isRequired,
onleaveFeedback: PropTypes.func.isRequired,
}