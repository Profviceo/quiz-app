import * as Utils from './utilities.js';

class Player{
    constructor(player_no, player_country, player_name){
        this.player_no = player_no;
        this.player_name = player_name;
        this.player_country = player_country;
    }

    static initializePlayer (player){
        let get_player_number = player.split('-')[1];
    
        localStorage.setItem(get_player_number, JSON.stringify({player_number: get_player_number}));
        this.set_first_player(get_player_number);
        this.set_current_player(get_player_number);
        this.set_initial_parameters();
    }
    
    static set_first_player (data){
        if(localStorage.getItem('first') == null){
            localStorage.setItem('first', data);
        }
    }
    
    static set_current_player (data){
        localStorage.setItem('current_player', data);
    }

    static set_initial_parameters(){
        localStorage.setItem('question_number', 1);
        localStorage.setItem('score', 0);

        if(localStorage.getItem('end') == null){
            localStorage.setItem('end', 0);
        }
    }


    static requestInfo(){
        Utils.app.innerHTML = `
        <section class="mx-auto p-5 bg-primary shadow-sm rounded text-white"  style="width:fit-content; margin-top: calc(40vh/2);">
            <p class="lead"><u>Input Your Details As Player ${localStorage.getItem('current_player')}</u></p>
            <form>
                <label for="">Firstname</label>
                <input type="text" class="form-control" id="firstname"  required><br>

                <label for="">Country</label>
                <input type="text" class="form-control" id="country" required>

                <div class="text-center mt-3">
                    <button class="btn btn-light" id="set-question-start">Start</button>
                </div>
                
            </form>                   
        </section>
            `;
    }

}

export default Player;