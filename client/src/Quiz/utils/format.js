export function formatQuestion(data) {
    return data.search.question.map((question) => ({
        id: question.questionid,
        question: question.question,
        answer: question.answer,
        comments: typeof question.comments === 'string' ? question.comments : ''
    }));
}
