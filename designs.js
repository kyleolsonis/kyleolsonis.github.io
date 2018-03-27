src="jquery-1.7.2.min.js"

//Start with jQuery ready function:
$(document).ready(function() {

//Here's the button that kicks things off:
const $submitButton = $("#submitButton");
//Here is the function that takes the height and width inputs and calls makeGrid()
$submitButton.click(function(e) {
  e.preventDefault();//This ensures the button only builds the grid, nothing else
  let $height = $('#inputHeight').val();//from input form to makeGrid()
  let $width = $('#inputWidth').val();//from input form to makeGrid()
  makeGrid($height, $width);//call the makeGrid function!
  $('.deleteGrid').show();//This should show the Delete Grid button only after Grid is created
});

//The makeGrid function waiting to be called:
function makeGrid(tall, wide) {
  for(let row = 1; row <= tall; row++) { //for loop: rows
    let $tr = $('<tr></tr>') //variable for <tr> row elements
    for(let column = 1; column <= wide; column++) { //nested for loop: cells in rows
      $tr.append('<td class="boxes"></td>'); //attached cells to rows
      } //end "cells in rows" for loop
    $('tbody').append($tr); //attaches the new grid to the <tbody> html node
    } //end "rows" for loop
  } //end makeGrid function

//This is the click event listener to change the cells to the chosen color:
$('.paintbrush').click(function(){
  $( 'tbody' ).on( 'mouseover', 'td', function() {//Had to add 'td' after 'click' to find the cells
    $( this ).css( 'background', $('#colorPicker').val());
  });//end mouseover function
});//end click function

$('.eraser').click(function(){
  $( 'tbody' ).on( 'click', 'td', function() {//Had to add 'td' after 'click' to find the cells
    $( this ).css( 'background', 'white');
  });//end mouseover function
});//end click function

$('.pointillism').click(function(){
  $('tbody').off();//turns off mouseover event listener above
  $( 'tbody' ).on( 'click', 'td', function() {//Had to add 'td' after 'click' to find the cells
    $( this ).css( 'background', $('#colorPicker').val());
  });//end inner click function
});//end outer click function

$('.deleteGrid').hide();//This hides the Delete Grid button when the page loads

//Here's programming for a button that dynamically removes the boxes in the grid with a while loop:
$( '.deleteGrid' ).click(function() {
    let boxes = $('#inputHeight').val() * $('#inputWidth').val();
    let i = 0;
    while (i <= boxes) {
      $('tr:last-child').remove();
      i++;
    }//end while loop
  $('.deleteGrid').hide();//This hides the Delete Grid button
});//end click function

//Fancybox plug-in script thanks to "The Missing Manual Javacript and jQuery" by David Sawyer McFarland, O'Reilly
	$('#gallery a').fancybox({
		overlayColor: '#789',
		overlayOpacity: .3,
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		easingIn: 'easeInSine',
		easingOut: 'easeOutSine',
		titlePosition: 'outside' ,
		cyclic: true
	});
}); // end jQuery ready function
