// @flow

import axios from 'axios';
import config from '../../../../configs/config'

const URL = `${config.apiUrl}/questions`

export function getQuestions() {
    return axios.get(URL);
}
