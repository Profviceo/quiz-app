let reloadJS = () => {
    let oldScriptTag = document.getElementById('script');
  
    let newScriptTag = document.createElement('script');
    newScriptTag.id = 'script';
    newScriptTag.type = 'module';
    newScriptTag.src = `js/game.js?ver=${Math.floor(Math.random() * 10)}`;
    newScriptTag.textContent = '//script';
    var body = document.getElementsByTagName('body')[0];
  
    oldScriptTag.remove();
  
    body.appendChild(newScriptTag);
};

let reloadRouterJs = () => {
  let oldScriptTag = document.getElementById('router');
  
    let newScriptTag = document.createElement('script');
    newScriptTag.id = 'router';
    newScriptTag.type = 'module';
    newScriptTag.src = `js/router.js?ver=${Math.floor(Math.random() * 10)}`;
    newScriptTag.textContent = '//script';
    var body = document.getElementsByTagName('body')[0];
  
    oldScriptTag.remove();
  
    body.appendChild(newScriptTag);
}
  
  

let app = document.querySelector('#app');
let player1;
let player2;

export {app, player1, player2, reloadJS, reloadRouterJs};