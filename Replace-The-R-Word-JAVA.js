$(document).ready(function(){

  let key = "83f6f912309fc34eafb4cfcbf2adf517";

  $("#search").click(function(){
    let user_provided_word = $("#scroll").val();

    $.get(`http://words.bighugelabs.com/api/2/${key}/${user_provided_word}/json`, function(data){
      console.log(data);
      data = JSON.parse(data);
      let p = document.createElement("p")
      $(p).text(data.adjective.syn.join(", "));
      console.log(data.adjective.syn.join(", "));
      $("#results").append(p);
        })
  })
});

// clearbutton
  $("#clear").click(function(){
    $("#results").empty()
  })
