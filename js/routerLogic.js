import Question from './Inc/question.js';
import * as Utils from './Inc/utilities.js';

if(localStorage.getItem('first') != null && localStorage.getItem('end') > 0){
Utils.app.innerHTML = `
<section class="mx-auto p-5 bg-light shadow-sm rounded"  style="width:fit-content; margin-top: calc(60vh/2);">
<div class="row">
    <div class="col-lg-12 text-center" id="player-${(localStorage.getItem('current_player') == 1) ? 2 : 1}">
        <p class="lead">Player Two</p>
        <button class="btn btn-primary" id="setQuestion" data-target="player-${(localStorage.getItem('current_player') == 1)? 2 : 1}">Start Quiz</button>
    </div>                    
</div>
</section>
`;
}

if(localStorage.getItem('first') != null && localStorage.getItem('end') == 0){
    if(confirm('Pick up from where you stopped!')){
        Question.requestQuestion();
    }else{
        localStorage.clear();
        location.reload();
    }
}

if(localStorage.getItem('1') != null && localStorage.getItem('2') != null){
    if(confirm('Pick up from where you stopped!')){
        Question.requestAnswer();
        Question.setOptions();
    }else{
        localStorage.clear();
        location.reload();
    }
}