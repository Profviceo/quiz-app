$(document).ready(function(){
    let toggler =  function(){
        $('button.navbar-toggler').click(function(e){
            $(e.target.getAttribute('data-target')).toggle(500);
        })
    }


    toggler();
})