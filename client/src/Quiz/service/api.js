// @flow

import axios from 'axios';

const URL = 'http://localhost:8081/questions';

export function getQuestions() {
    return axios.get(URL);
}
