import React from "react";
import "./FeedbackOptions.css"

const FeedbackOptions = ({options, onleaveFeedback}) => {
  return(
    <button type="button" className="button" onClick={onleaveFeedback}>
      {options}
    </button>
    )
}


export default FeedbackOptions
