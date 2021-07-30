import * as Utils from './Inc/utilities.js';


let handleRequest =  function(){

    let get_path_name = location.pathname.split('/')[1];


    const routes = {
        about: {
            name: 'about',
            path: '../templates/about.viceo'
        },

        contact: {
            name: 'contact',
            path: '../templates/contact.viceo'
        }
    }

    let popuplate_page = function(){
        fetch(routes[get_path_name].path)
        .then(res => res.text())
        .then(data => {
            Utils.app.innerHTML = data;
        });
    }


    popuplate_page();
}

if(location.pathname != null && location.pathname != '/'){
    handleRequest();
}

let hook_event_to_router_link = function(){
    let router_links = document.querySelectorAll('a#router-link');

    router_links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            history.replaceState('', '', link.getAttribute('data-link'));
            handleRequest();
        });
    })
}

hook_event_to_router_link();

