var $totalSelected = 0;
var gameCardArray = [
  {
    name: "Mario Quairt",
    price: "$2.99",
    image: 'css/mariokart.jpg',
    description: "Mario Quairt is a high octane thrill ride to the finish."
  },
  {
    name: "Donkey Quiong",
    price: "$1.50",
    image: 'css/donkeykong.jpg',
    description: "You'll go coconuts for Donkey Quiong's antics."
  },
  {
    name: "Battle Quaids",
    price: "$3.99",
    image: 'css/battletoad.jpg',
    description: "It's total ribbety war, with Dennis at the helm!"
  }
]

function createGameCards() {
  for (let i = 0; i < gameCardArray.length; i++) {
    var $gameName = gameCardArray[i].name;
    var $gamePrice = gameCardArray[i].price;
    var $gameImg = gameCardArray[i].image;
    var $gameDesc = gameCardArray[i].description;
    var $newGame = $(
   '<div class="card" id="'+ $gameName +'"><h2> ' + $gameName +
   '</h2><img src=' + $gameImg +
   '></div>'
    );
    $('#gameCards').append($newGame);



  }

}

createGameCards();

$('h1').css('display','none').fadeIn(2000);

$('.card').on('click', function() {
  if ($totalSelected < 3) {
    $totalSelected += 1;
    console.log($totalSelected);
  }
  $(this).toggleClass('selected');
  $('#descriptionBox').css('display','block');
  $('#contentBox').empty();



});



$('#allSel').on('click', function() {
  $('.card').attr('class','card selected');
  $totalSelected = 3;
  $('#contentBox').empty();
  $('#contentBox').append($('<br/>'));
  $('#contentBox').append($('<p>You have selected all three games to buy.</p>'));
  $('#descriptionBox').css('display', 'none');
  $('#descriptionBox').fadeIn(1600);
  console.log($totalSelected);
});

$('#allDes').on('click', function() {
  $('.card').attr('class', 'card');
  $totalSelected = 0;
  $('#descriptionBox').css('display','none');
  $('#contentBox').empty();
  $('#contentBox').append($('<br/>'));
  $('#contentBox').append($('<p>There are no games selected to buy.</p>'));
  $('#descriptionBox').fadeIn(1600);
  console.log($totalSelected);
})
