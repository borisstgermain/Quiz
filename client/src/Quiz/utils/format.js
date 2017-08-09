function replaceQuote(str) {
  return str.replace(/&quot;/gi, '"');
}

export default function formatQuestion(data) {
  return data.search.question.map(question => ({
    id: question.questionid,
    question: replaceQuote(question.question),
    answer: replaceQuote(question.answer),
    comments: typeof question.comments === 'string' ? replaceQuote(question.comments) : '',
  }));
}
