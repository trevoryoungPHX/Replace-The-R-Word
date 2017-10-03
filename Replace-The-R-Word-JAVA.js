$(document).ready(function(){

  let key = "83f6f912309fc34eafb4cfcbf2adf517";

  $("#searchform").submit(function(e){
    e.preventDefault();//would normally refresh page at submission, this prevents that
    let user_provided_word = $("#scroll").val();

    $.get(`http://words.bighugelabs.com/api/2/${key}/${user_provided_word}/json`, function(data){
      console.log(data);
      data = JSON.parse(data);
      let p = document.createElement("p")
      $(p).text(data.adjective.syn.join(" "));
      console.log(data.adjective.syn.join(", "));
      $("#results").empty().append(p);
        })
  })
});

// clearbutton
  $("#clear").click(function(){
    $("#results").empty()
  })





var rejectWords = ["Retard", "Retarded", "retard", 'retarded']
  $('#search').click(function(){
    for (var i =0; i<rejectWords.length; i++) {
     if($('#scroll').val() === rejectWords[i]){
        alert('Try looking up new words! Using the R-Word is offensive and there are SO MANY other options for you to use!');
     }
   }
  });
