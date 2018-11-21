var keys = ['a3sx', '102a'];


$( document ).ready(function() {
  // alert( "Thanks for visiting!" );
  $("h1").click(function(event){
    $(this).css('color', 'red');
  });

  $("input").on("click", function () {
    if ($("input:radio[name='continue']").is(":checked") && $("input:radio[name='speed']").is(":checked")){
      $("#submitBTN").addClass("btn-primary");
    };
  })
});
