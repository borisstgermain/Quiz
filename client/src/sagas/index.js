import { watchFetchQuestion } from '../Quiz/saga';

export default function* rootSaga() {
  yield [
    watchFetchQuestion(),
  ];
}
