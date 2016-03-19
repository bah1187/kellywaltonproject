$(document).ready(function() {
       // capture all enter and do nothing
       $('#email').keypress(function(e) {
         if(e.which == 13) {
           $('#email').trigger('focusout');
           return false;
         }
       });
       // capture clicks on validate and do nothing
       $("#validate_submit").click(function() {
         return false;
       });



       // attach jquery plugin to validate address
             $('#email').mailgun_validator({
               api_key:'pubkey-c078e09275f69bdf0dfcbb04c419f877', // replace this with your Mailgun public API key
               in_progress: validation_in_progress,
               success: validation_success,
               error: validation_error,
             });
           });
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
           // suggest a valid email
           function get_suggestion_str(is_valid, alternate) {
             if (is_valid) {
               var result = '<span class="success">Address is valid.</span>';
               if (alternate) {
                 result += '<span class="warning"> (Though did you mean <em>' + alternate + '</em>?)</span>';
               }
               return result
             } else if (alternate) {
               return '<span class="warning">Did you mean <em>' +  alternate + '</em>?</span>';
             } else {
               return '<span class="error">Address is invalid.</span>';
             }
           }
