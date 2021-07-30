import Player from './Inc/player.js';
import Question from './Inc/question.js';
import Answer from  './Inc/Answer.js';
import * as Utils from './Inc/utilities.js';


if(document.querySelectorAll('#setQuestion')){
    let triggerButtons =  document.querySelectorAll('#setQuestion');

    triggerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            Player.initializePlayer(button.getAttribute('data-target'));
            Player.requestInfo();
            Utils.reloadJS();
        });
    });   
}

if(document.querySelector('#set-question-start')){
    let triggerButton =  document.querySelector('#set-question-start');
    let firstName =  document.querySelector('input#firstname');
    let country =  document.querySelector('input#country');
    let current_player =  localStorage.getItem('current_player');
    

    triggerButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        let player = new Player(current_player, firstName.value, country.value);
        localStorage.setItem(current_player, JSON.stringify(player)); 
        if(localStorage.getItem('first') == localStorage.getItem('current_player')){
            Question.requestQuestion();
        }else{
            Question.requestAnswer();
            Question.setOptions();
        }
        
        Utils.reloadJS();
    });
}


if(document.querySelector('#start-set-question')){
    let triggerButton = document.querySelector('#start-set-question');
    let question =  document.querySelector('input#question');
    let option1 = document.querySelector('input#option-1');
    let option2 = document.querySelector('input#option-2');
    let option3 = document.querySelector('input#option-3');
    let option4 = document.querySelector('input#option-4');
    let answer = document.querySelector('#answer');
    let question_number = localStorage.getItem('question_number');


    triggerButton.addEventListener('click', (e) => {
        e.preventDefault();
        let options = {'1': option1.value, '2': option2.value, '3': option3.value, '4': option4.value};
        let entry = new Question( localStorage.getItem('question_number'),question.value, options, answer.value);
        
        localStorage.setItem(`question-${question_number}`, JSON.stringify(entry));
        localStorage.setItem('end', question_number);
        question_number++;

        localStorage.setItem('question_number', question_number);
        

        alert('Question added successfully');
        Question.requestQuestion();
        Utils.reloadJS();
    });
}


if(document.querySelector('#player-answer')){
    let answers = document.querySelectorAll('#player-answer');

    answers.forEach(answer => {
        answer.addEventListener('click', (e) => {
            e.preventDefault();
            Answer.checkAnswer(answer.getAttribute('data-target'));

            if(localStorage.getItem('end') == (localStorage.getItem('question_number') - 1)){
                alert(`Player-${localStorage.getItem('current_player')} scored ${localStorage.getItem('score')} points.`);
                localStorage.clear();
                location.reload();
            }else{
                Question.requestAnswer();
                Question.setOptions();
            }

            Utils.reloadJS();
            
        })
    });
}