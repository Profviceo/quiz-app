class Answer {

    static checkAnswer(answer){
        let correct_answer = JSON.parse(localStorage.getItem(`question-${localStorage.getItem('question_number')}`)).answer;

        let current_score = localStorage.getItem('score');
        let question_number = localStorage.getItem('question_number');
        current_score = 100 + parseInt(current_score);
        question_number++;

        if(correct_answer == answer){
            localStorage.setItem('score', current_score);
            localStorage.setItem('question_number', question_number);
            alert('Correct Answer! You earned 100 points');
        }else{
            localStorage.setItem('question_number', question_number);
            alert('Wrong Answer!');
        }
    }
}


export default Answer;