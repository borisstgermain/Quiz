import React from 'react';
import PropTypes from 'prop-types';

import style from './Question.css';

export default function Question({ question, answer, comments = '', isShown, clickHandler }) {
    return(
        <div className={style.question}>
            <p className={style.title}>{question}</p>
            <button className={isShown ? style['button--hide'] : style.button}
                onClick={clickHandler}
            >
                Показать ответ
            </button>
            <p className={`${style.answer}  ${isShown ? style['answer--show'] : style['answer--hide']}`}>
                {answer}
            </p>
            <p className={`${style.comment}  ${isShown ? style['comment--show'] : style['comment--hide']}`}>
                {comments}
            </p>
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    comment: PropTypes.string,
    isShown: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
};
