$(function(){
   $('#contact-form input[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/vitaliishtypuk@gmail.com", 
            method: "POST",
            data: {
                name: $('#inputname').val(),
                email: $('#inputemail').val(),
                tel:$('#inputtel').val(),
                feedback: $('#feedback').val()
            },
            dataType: "json"
        })
         .done( () => $('#thank-dialog-close').removeClass('close') )
         .fail( () => $('#error-dialog-close').removeClass('close') ); 
    }
}
