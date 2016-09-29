//get from query-string the value for select and set it to the input value

var inputHTML = function (name, value){
  return '<div>' +
      '<span>' + name + ': </span><span>' + value + '</span>' +
      '<input type="hidden" name="' + name +'" value="' + value +'">' +
    '</div>';
}

var queryString = window.location.search.substr(1).split('&');


for (var i = 0; i < queryString.length; i++) {
  if (queryString[i]){
     var parts = queryString[i].split('=');

     if (parts.length === 2){
      var key = parts[0];
      var value = parts[1];
      //<input type="text" name="select" value="">

      $('form').append($(inputHTML(key, value)));
     }


  }
}



$('form').append('<button>Submit</button>');

function show() {
        document.getElementById("write").innerHTML = "batter";
    }
