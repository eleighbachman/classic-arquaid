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
    console.log($gameName)
    var $gamePrice = gameCardArray[i].price;
    var $gameImg = gameCardArray[i].image;
    var $gameDesc = gameCardArray[i].description;
    var $newGame = $(
   '<div class="card"><h2> ' + $gameName +
   '</h2><img src=' + $gameImg +
   '></div>'
    );
    $('#gameCards').append($newGame);



  }

}

createGameCards();

$('h1').css('display','none').fadeIn(2000);

$('.card').on('click', function() {
  console.log("clicked!")
  $(this).toggleClass('selected');
  console.log($(this).id);
  $('#descriptionBox').fadeIn(1600);
});

$('#allSel').on('click', function() {
  $('.card').attr('class','card selected');
});

$('#allDes').on('click', function() {
  $('.card').attr('class', 'card');
})
