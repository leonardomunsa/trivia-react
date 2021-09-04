import React from 'react';

const trivialink = 'https://opentdb.com/api.php?amount=5&token=';

class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: {
        results: [
          {
            correct_answer: '',
            incorrect_answers: [],
          },
        ],
      },
      countQuestion: 0,
      loading: true,
    };

    this.Answer = this.Answer.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);
    this.getTriviaApiResponse = this.getTriviaApiResponse.bind(this);
  }

  componentDidMount() {
    this.getTriviaApiResponse();
  }

  async getTriviaApiResponse() {
    const token = localStorage.getItem('token');
    console.log(token);
    const responseApi = await fetch(`${trivialink}${token}`);
    const object = await responseApi.json();
    this.setState({
      questions: object,
      loading: false,
    });
  }

  correctAnswer(alternative, index) {
    return (
      <button
        id="correta"
        type="button"
        data-testid="correct-answer"
        key={ index }
      >
        {alternative}
      </button>
    );
  }

  incorrectAnswer(alternative, index) {
    return (
      <button
        id="correta"
        type="button"
        data-testid={ `wrong-answer-${index}` }
        key={ index }
      >
        {alternative}
      </button>
    );
  }

  Answer(alternative, correctAnswer, index) {
    for (let i = 0; i < alternative.length; i += 1) {
      if (alternative === correctAnswer) {
        return this.correctAnswer(alternative, index);
      }
    }
    return this.incorrectAnswer(alternative, index);
  }

  render() {
    const { questions, loading, countQuestion } = this.state;

    if (loading) return <h1>Loading...</h1>;

    const questionTrivia = questions.results[countQuestion];
    const alternatives = [
      ...questionTrivia.incorrect_answers,
      questionTrivia.correct_answer,
    ].sort();

    return (
      <div>
        <h2 data-testid="question-text">{questionTrivia.question}</h2>
        <span data-testid="question-category">{questionTrivia.category}</span>
        <div>
          {alternatives.map((alternative, index) => this.Answer(
            alternative,
            questionTrivia.correct_answer,
            index,
          ))}
        </div>
      </div>
    );
  }
}

export default Question;