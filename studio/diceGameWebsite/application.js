$(document).ready(function() {
  // initialize jQuery Rumble on paw elements
  $('.paw').jrumble({speed:0});
});

window.onload = function() {
  var loseSquare = $(".paw.lose");
  loseSquare.trigger('startRumble');
  setTimeout(function() {
    loseSquare.trigger('stopRumble');
  }, 600);
};

var player1 = {
  selector: '.player1',
  x: 0,
  y: 0,
}
var player2 = {
  selector: '.player2',
  x: 4,
  y: 0
}
var grid = {
  x: 4,
  y: 3
};

$(window).on('keydown', function (e) {

// if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
// selectSquare(player1);
// } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
// selectSquare(player2);
// }

    if (e.keyCode === 88) 
    selectSquare(player1); // 'x'
    if (e.keyCode === 191) 
    selectSquare(player2); // '/'
  
    if (e.keyCode === 17) 
    moveLeft(player1); // left [ctrl]
    if (e.keyCode === 90) 
    moveUp(player1);  // up ['z']
    if (e.keyCode === 91) 
    moveRight(player1); // right [cmd]
    if (e.keyCode === 18) 
    moveDown(player1);  // down [alt]
    
    
    if (e.keyCode === 37) // left
    moveLeft(player2);
    else if (e.keyCode === 38) // up
    moveUp(player2);
    else if (e.keyCode === 39) // right
    moveRight(player2);
    else if (e.keyCode === 40) // down
    moveDown(player2);
});

function showPlayer(player) {
  $('.target-'+player.y+player.x).find(player.selector).removeClass('hide');
}

function hidePlayer(player) {
  $('.target-'+player.y+player.x).find(player.selector).addClass('hide');
}

function hasPlayer(player, direction) {
  var otherPlayer;
  
  // to find the other player
  if (player === player1) {
    otherPlayer = player2;
  } else {
    otherPlayer = player1;
  }
  
  switch (direction) {
    case 'left': 
      return (player.y === otherPlayer.y && player.x-1 === otherPlayer.x);
    case 'right': 
      return (player.y === otherPlayer.y && player.x+1 === otherPlayer.x);
    case 'above':
      return (player.y-1 === otherPlayer.y && player.x === otherPlayer.x);
    case 'below':
      return (player.y+1 === otherPlayer.y && player.x === otherPlayer.x);
  }
}


function moveLeft(player) {
    console.log("left");
    if(player.x > 0 && !hasPlayer(player, 'left')) {
        hidePlayer(player); // hide player at current position
        player.x--;
        console.log(player.y,player.x);
        showPlayer(player); // show player at new position
    }
}

function moveUp(player) {
    console.log("up");
    if(player.y > 0 && !hasPlayer(player, 'above')) {
      hidePlayer(player); // hide player at current position
      player.y--;
      showPlayer(player); // show player at new position
    }
}

function moveRight(player) {
    console.log("right");
    if(player.x < 4 && !hasPlayer(player, 'right')){
        hidePlayer(player); // hide player at current position
        player.x++;
        console.log(player.y,player.x);
        showPlayer(player); // show player at new position
    }
}

function moveDown(player) {
    console.log("down");
    if(player.y < 3 && !hasPlayer(player, 'below')) {
      hidePlayer(player); // hide player at current position
      player.y++;
      showPlayer(player); // show player at new position
    }
}

function selectSquare(player) {
  // find the player's square
  var currentSquare = $('.target-'+player.y+player.x);
  
  if (currentSquare.hasClass('win')) { 
    // player won
    $(player.selector + '-win').removeClass('hide').addClass('show');
//     console.log("win");
    document.getElementById('cheering').play();
  } else if (currentSquare.hasClass('lose')) {
    // player lost
    $(player.selector + '-lose').removeClass('hide').addClass('show');
    document.getElementById('booing').play();
  } else {
  	document.getElementById('errorSound').play();
    // start rumbling
    currentSquare.trigger('startRumble'); 
    // stop rumbling after 1 second
    setTimeout(function() { 
      currentSquare.trigger('stopRumble');
    }, 300);
  }
}

var squares = $('.paw');
// randomly select winning square
var winningSquare = squares[Math.floor(Math.random()*squares.length)];
$(winningSquare).addClass('win');
// randomly select losing square different from winning square
var numberOfLoseSquares = Math.floor(Math.random()*5) + 1;
var doneAddingLosingSquares = false;
var numberOfLosersAdded = 0;

while(!doneAddingLosingSquares) {
  var losingSquare = $(squares[Math.floor(Math.random()*squares.length)]);
  if(!losingSquare.hasClass('win') && !losingSquare.hasClass('lose')) {
	losingSquare.addClass('lose');
    numberOfLosersAdded++;
  }
  if(numberOfLosersAdded >= numberOfLoseSquares) {
    doneAddingLosingSquares = true;
  }
}