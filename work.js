<><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><script>
    $(document).ready(function() {$("#myForm").submit(function (event) {
        event.preventDefault();

        // Get the message text from the form input
        var messageText = $("#message").val();

        // Encode the message using encodeURIComponent
        var encodedMessage = encodeURIComponent(messageText);

        // Replace spaces with +, if you prefer
        // var encodedMessage = encodeURIComponent(messageText).replace(/%20/g, '+');
        // Replace spaces with %20, if you prefer to keep them as %20
        // var encodedMessage = encodeURIComponent(messageText).replace(/%20/g, '%20');
        // Now, open your mailing app with the encoded message
        window.open("mailto:abhimdubey2008@gmail.com?subject=Your%20Subject&body=" + encodedMessage);
    })};
    );
</script></>