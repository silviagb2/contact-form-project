$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
    });

    $("#send").click(function(){
        var inputName = $("#name")[0].name
        var valName = $("#name").val()
        localStorage.setItem(inputName, valName);

        var inputEmail = $("#email")[0].name
        var valEmail = $("#email").val()
        localStorage.setItem(inputEmail, valEmail);

        var inputMessage = $("#message")[0].name
        var valMessage = $("#message").val()
        localStorage.setItem(inputMessage, valMessage);
    });

    $("#reset").click(function(){
        localStorage.clear();
        $('form :input').val('');
    })
  
});
