import React from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from "./Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
}
handleGood = () => {
  this.setState(prevState => ({ good: prevState.good + 1 }));
};

handleNeutral = () => {
  this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
};
handleBad = () => {
  this.setState(prevState => ({ bad: prevState.bad + 1 }));
};

 render() {
  const {good, bad, neutral} = this.state
  const countTotalFeedback = good + bad + neutral;
  
  const countPositiveFeedbackPercentage = Math.round(good * 100 / countTotalFeedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={"good"}
        onleaveFeedback={this.handleGood}
        />
        <FeedbackOptions
        options={"neutral"}
        onleaveFeedback={this.handleNeutral}
        />
        <FeedbackOptions
        options={"bad"}
        onleaveFeedback={this.handleBad}
        />
      </Section>
      {countTotalFeedback === 0 ? 
      <Section><Notification></Notification></Section> :
      <Section title="Statistics">
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      ></Statistics>
      </Section>}
    </div>
  );
}
}

export default App
