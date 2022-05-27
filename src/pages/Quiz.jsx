import React from "react";
import Header from "../components/Header";
import QuestionBox from "../components/QuestionBank";
import Result from "../components/Result";
import quizService from "../modules/quizService";

class Quiz extends React.Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  componentDidMount() {
    this.getQuestions();
  }

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };
  render() {
    return (
      <div className="flex flex-col justify-center h-screen w-3/4">
        <Header />
        <div className="flex flex-col bg-gray-600 w-full space-y-2 font-medium p-2 text-white">
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.computeAnswer(answer, correct)}
                />
              )
            )}
          {this.state.responses === 5 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Quiz;
