$(document).ready(function() {
  $("#letter").submit(function(event) {

    const recipientInput = $("input#recipient").val();

    $(".recipientName").text(recipientInput);

    $("#fullletter").show();

    event.preventDefault();
  });
});