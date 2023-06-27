let menuVisible = false;

function seeModal(){
    var openbutton = document.getElementById('open-modal');
    var modal = document.getElementById('modal-info');

    // Openbutton opens a modal dialog
    openbutton.addEventListener('click', function() {
    modal.showModal();
});
}

function closeModal(){
    var closebutton = document.getElementById('close-modal');
    var modal = document.getElementById('modal-info');

    // Closebutton closes the dialog
    closebutton.addEventListener('click', function() {
    modal.close();
});
}

function seeModal2(){
    var openbutton = document.getElementById('open-modal2');
    var modal = document.getElementById('modal-info2');

    // Openbutton opens a modal dialog
    openbutton.addEventListener('click', function() {
    modal.showModal();
});
}

function closeModal2(){
    var closebutton = document.getElementById('close-modal2');
    var modal = document.getElementById('modal-info2');

    // Closebutton closes the dialog
    closebutton.addEventListener('click', function() {
    modal.close();
});
}

function seeModal3(){
    var openbutton = document.getElementById('open-modal3');
    var modal = document.getElementById('modal-info3');

    // Openbutton opens a modal dialog
    openbutton.addEventListener('click', function() {
    modal.showModal();
});
}

function closeModal3(){
    var closebutton = document.getElementById('close-modal3');
    var modal = document.getElementById('modal-info3');

    // Closebutton closes the dialog
    closebutton.addEventListener('click', function() {
    modal.close();
});
}

//funcion que oculta y muestra el menu

function showMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function selected(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
