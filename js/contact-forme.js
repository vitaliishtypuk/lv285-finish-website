$(function() {
    $('#contact-form input[type=submit]').click(sendForm);
});

function sendForm(ev) {
    const form = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
                url: "https://formspree.io/vitaliishtypuk@gmail.com",
                method: "POST",
                data: {
                    name: $('#client-name').val(),
                    email: $('#client-email').val(),
                    comment: $('#comment').val()
                },
                dataType: "json"
            })
            .done(() => $('#thank-dialog').attr('open', 'close'))
            .fail(() => $('#error-dialog').attr('open', 'close'));
    }
}
