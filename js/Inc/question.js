import * as Utils from './utilities.js';

class Question{
    constructor(id, question, options, answer){
        this.id = id;
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    static requestQuestion(){
        Utils.app.innerHTML = `
        <section class="container mx-auto p-5 bg-primary shadow-sm rounded text-white"  style="margin-top: calc(20vh/2);">
                <form>
                    <label for="">Question-${localStorage.getItem('question_number')}:</label>
                    <input type="text" id="question" class="form-control" required>

                    <div class="row mt-5">
                        <div class="form-group col-lg-6">
                            <label for="">Option 1:</label>
                            <input type="text" id="option-1" class="form-control" required>
                        </div>

                        <div class="form-group col-lg-6">
                            <label for="">Option 2:</label>
                            <input type="text" id="option-2" class="form-control" required>
                        </div>

                        <div class="form-group col-lg-6">
                            <label for="">Option 3:</label>
                            <input type="text" id="option-3" class="form-control" required>
                        </div>

                        <div class="form-group col-lg-6">
                            <label for="">Option 4:</label>
                            <input type="text" id="option-4" class="form-control" required>
                        </div>
                    </div>

                    <div class="form-group mt-4">
                        <select id="answer" class="form-control" required>
                            <option value="1">Option-1</option>
                            <option value="2">Option-2</option>
                            <option value="3">Option-3</option>
                            <option value="4">Option-4</option>
                        </select>
                    </div>             
                    
                    <div class="text-center mt-3">
                    <button class="btn btn-light" id="start-set-question">Set Question</button>
                    <a href="#" class="btn btn-danger" id="setQuestion" data-target="player-${(localStorage.getItem('current_player') == 1)? 2 : 1}">Start Quiz</a>
                </div>
                </form>

            </section>
        `;
    }

    static requestAnswer(){
        Utils.app.innerHTML = `
        <div class="bg-primary py-4 px-2 position-fixed text-white" style="right: 10px; top: 70px;">
                <h3 class="display-5">Score:</h3>
                <p class="lead">${localStorage.getItem('score')}</p>
            </div>

        <section class="container mx-auto p-5 bg-primary shadow-sm rounded text-white"  style="margin-top: calc(20vh/2);">
        <form>
            <div class="">
                <label for="" class="lead">Question-${localStorage.getItem('question_number')}</label>
                <p class="lead">${JSON.parse(localStorage.getItem(`question-${localStorage.getItem('question_number')}`)).question}</p>
            </div>
        
            <div class="d-flex justify-content-between align-items-center mt-4" id="option">
            </div>
        </form>

    </section>`;
    }

    static setOptions(){
        let container = document.querySelector('#option');
        let options = JSON.parse(localStorage.getItem(`question-${localStorage.getItem('question_number')}`)).options;

        for(let option in options){
            container.innerHTML += `
                    <a class="btn btn-light text-primary capitalize" data-target="${option}" id="player-answer">${options[option]}</a>
                    `
        }
    }
}

export default Question;