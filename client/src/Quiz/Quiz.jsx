
import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './Quiz.css';
import LoaderHOC from '../hoc/LoaderHOC';
import { fetchQuestions, removeQuestion } from './action';
import { getQuestions, hasQuestions } from './selector';

import Question from './components/Question';


export class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShown: false,
            current: 0
        };

        this.showQuestionClick = this.showQuestionClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    componentWillMount() {
        const { fetchQuestions, questions } = this.props;
        const hasQuestions = questions > 0;
        !hasQuestions && fetchQuestions();
    }

    componentWillReceiveProps(next) {
        console.log(next);
        if (next.questions.length === 0) {
            console.log('need fetch');
            this.props.fetchQuestions();
        }
    }

    showQuestionClick() {
        this.setState({ isShown: true });
    }

    nextClick() {
        const { removeQuestion, hasQuestions, fetchQuestions } = this.props;
        removeQuestion();
        this.setState({ isShown: false });
    }

    render() {
        const { questions, hasQuestions, isFetching, error } = this.props;
        const question = questions[0];

        if (isFetching) {
            return <div>Loadding...</div>
        } else if (error) {
            return <div>{error}</div>
        } else {
            return(
                <div className={style.quiz}>
                    <Question {...question}
                        clickHandler={this.showQuestionClick}
                        isShown={this.state.isShown}
                    />
                    <button className={`${style['next-button']}  ${this.state.isShown ? style['next-button--show'] : style['next-button--hide']}`}
                        onClick={this.nextClick}
                    >
                        Следующий
                    </button>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ quiz }) => {
    return {
        questions: getQuestions(quiz),
        hasQuestions: hasQuestions(quiz),
        isFetching: quiz.isFetching,
        error: quiz.error
    }
};
const mapDispatchToProps = { fetchQuestions, removeQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
