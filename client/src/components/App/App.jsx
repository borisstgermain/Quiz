// @flow

import React from 'react';
import style from './App.css';

import Quiz from '../../Quiz';

export default function App() {
  return (
    <div className={style.app}>
      <Quiz />
    </div>
  );
}
