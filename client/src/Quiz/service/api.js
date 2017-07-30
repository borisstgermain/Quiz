// @flow

import axios from 'axios';
import { isProd } from '../../utils/util';

const URL = isProd
    ? 'https://morning-springs-21420.herokuapp.com/questions'
    : 'http://localhost:8081/questions';

export function getQuestions() {
    return axios.get(URL);
}
