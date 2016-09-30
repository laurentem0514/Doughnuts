function toObject(arr) {
  var rv = {};

  for (var i = 0; i < arr.length; i++){
    // k=v
    var parts = arr[i].split('=');
    if (parts.length === 2){
      var key = parts[0];
      var value = parts[1];
      rv[key] = value;
    }
  }

  return rv;
}

var inputHTML = function (name, value){
  return '<div>' +
      '<span>' + name + ': </span><span>' + value + '</span>' +
      '<input type="hidden" name="' + name +'" value="' + value +'">' +
    '</div>';
}

var queryString = window.location.search.substr(1).split('&');


var myDoughnut = toObject(queryString);

var doughnut = myDoughnut['Doughnut'];


$('#doughnut').attr({
  'alt': doughnut,
  'src': 'images/' + doughnut + '.png'
});

 for (var key in myDoughnut){
  $("#review").append($(inputHTML(key, myDoughnut[key])));
 }

