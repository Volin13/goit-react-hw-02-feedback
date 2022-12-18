import React, { Component } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from './index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  getOptions = () => {
    return ['good', 'neutral', 'bad'];
  };

  handleFeedbackBtnClick = ({ target }) => {
    const { name } = target;
    const updateState = { ...this.state };
    updateState[name] += 1;
    updateState.total = this.countTotalFeedback(updateState);
    updateState.positivePercentage = this.countPositivePercentage(updateState);
    this.setState(updateState);
  };

  countTotalFeedback = ({ good, bad, neutral }) => {
    console.log(Number(good + bad + neutral));
    return Number(good + bad + neutral);
  };

  countPositivePercentage = ({ good, total }) => {
    console.log(Number((good / total) * 100).toFixed(0));
    return Number(((good / total) * 100).toFixed(0));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.getOptions()}
            onLeaveFeedback={this.handleFeedbackBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Container>
    );
  }
}
