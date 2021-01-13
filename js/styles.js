$(document).ready(function() {
  $(#letter).submit(function(event) {
    const recipientInput = $("input#recipient").val();

    $(#recipent).text(recipientInput);

    $("#fullletter").show();

    event.preventDefault();
  });
});