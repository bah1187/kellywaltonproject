
// while the lookup is performing
function validation_in_progress() {
$('#status').html("<img src='loading.gif' height='16'/>");
}
// if email successfull validated
function validation_success(data) {
$('#status').html(get_suggestion_str(data['is_valid'], data['did_you_mean']));
}
// if email is invalid
function validation_error(error_message) {
$('#status').html(error_message);
}

$('jquery_selector').mailgun_validator({
    api_key: 'pubkey-c078e09275f69bdf0dfcbb04c419f877',
    in_progress: validation_in_progress, // called when request is made to validator
    success: validation_success,         // called when validator has returned
    error: validation_error,           // called when an error reaching the validator has occured
});
