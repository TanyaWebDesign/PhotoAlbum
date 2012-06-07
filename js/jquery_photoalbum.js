( function( $ ) {

var images = new Array();
var iCurrentImage = 0;

$.fn.photo_album = function ( imagenames )
{
       var nInd;
       
       if ( imagenames.length < 2 ) {
        return;
       }
       for ( nInd = 0; nInd < imagenames.length; nInd++ ) {
        images[ nInd ] = imagenames[ nInd ];
       }
       
       var centerdiv = $( this );
       centerdiv.addClass( "pa_center" );
       
       var maindiv = $( "<div class = 'pa_bkmain'></div>" ).appendTo( centerdiv );
       var leftpage = $( "<div class = 'pa_left'></div>" ).appendTo( maindiv );
       var rightpage = $( "<div class = 'pa_right'></div>" ).appendTo( maindiv );
       $( "<div id = 'pa_leftpage'></div>" ).appendTo( maindiv );
       $( "<div id = 'pa_rightpage'></div>" ).appendTo( maindiv );
       
       var imgdiv;
       var arrow;
       
       imgdiv = $( "<img id = 'pa_leftimg'></img>" ).appendTo( leftpage );
       imgdiv.attr( 'src', images[ 0 ] );
       imgdiv.css( 'position', 'absolute' );
       arrow = $( "<img id = 'pa_leftarrowimg' class = 'pa_arrowimg'></img>" ).appendTo( leftpage );
       arrow.css( 'left', '20px' );
       arrow.attr( 'src', "img/left.png" );
       
       imgdiv = $( "<img id = 'pa_rightimg'></img>" ).appendTo( rightpage );
       imgdiv.attr( 'src', images[ 1 ] );
       imgdiv.css( 'position', 'absolute' );
       arrow = $( "<img id = 'pa_rightarrowimg' class = 'pa_arrowimg'></img>" ).appendTo( rightpage );
       arrow.css( 'right', '10px' );
       arrow.attr( 'src', "img/right.png" );
       
       $( '#pa_leftimg' ).load( function () {
        positionLeft();
       });
       $( '#pa_rightimg' ).load( function () {
        positionRight();
       });
       
      $("#pa_leftarrowimg").click(function(){
        turnPage( false );
       });
      $("#pa_rightarrowimg").click(function(){
        turnPage( true );
       });
       $('#pa_leftarrowimg').hide();
       
       if ( images.length <= 2 ) {
          $('#pa_rightarrowimg').hide();
       }
}

function clickRight() {
  iCurrentImage = iCurrentImage+2;

//  $( '#pa_leftimg' ).attr( 'src', images[ iCurrentImage ] );
  if ( iCurrentImage  == images.length - 1 ) {
    $( '#pa_rightimg' ).hide();
  }
  else {
    $( '#pa_rightimg' ).attr( 'src', images[ iCurrentImage + 1 ] );
  }
}

function clickLeft() {
//  $( '#pa_rightimg' ).show();
  
  iCurrentImage = iCurrentImage - 2;

  $( '#pa_leftimg' ).attr( 'src', images[ iCurrentImage ] );
  
//  $( '#pa_rightimg' ).attr( 'src', images[ iCurrentImage + 1 ] );
  if ( iCurrentImage < 2 ) {
      iCurrentImage = 0;
  }
}

function showArrows()
{
  if ( iCurrentImage + 2 < images.length ) {
      $('#pa_rightarrowimg').show();
  }
  if ( iCurrentImage >= 2 ) {
      $('#pa_leftarrowimg').show();
  }
  $('.pa_left').css( 'border', "none" );
  $('.pa_right').css( 'border', "none" );
}

function finishTurnForward() 
{
    $('.pa_left').hide();
    $('.pa_left').css( 'border', "2px solid #cccccc" );
    $('.pa_left').css( 'border-right', "none" );
    $( '#pa_leftimg' ).attr( 'src', images[ iCurrentImage ] );
    $('.pa_left').effect('slide',{direction:"right", mode:"show"},2000, showArrows );
}

function finishTurnBack() 
{
    $('.pa_right').hide();
    $('.pa_right').css( 'border', "2px solid #cccccc" );
    $('.pa_right').css( 'border-left', "none" );
    $( '#pa_rightimg' ).show();
    $( '#pa_rightimg' ).attr( 'src', images[ iCurrentImage + 1 ] );
    $('.pa_right').effect('slide',{direction:"left", mode:"show"},2000, showArrows );
}

function turnPage( bForward )
{
  $('#pa_rightarrowimg').hide();
  $('#pa_leftarrowimg').hide();
  if ( bForward ) {
    $( '#pa_rightpage' ).show();
    clickRight();
    $('#pa_rightpage').effect('blind',{direction:"horizontal", mode:"hide"},2000, finishTurnForward );
  }
  else {
    $('#pa_leftpage').show();
    clickLeft();
    $('#pa_leftpage').effect('slide',{direction:"right", mode:"hide"},2000, finishTurnBack );
  }
}

function positionLeft()
{
  var nTop = ( $( '.pa_left' ).height() / 2 ) - ( $( '#pa_leftimg' ).height() / 2 );
  var nLeft = ( $( '.pa_left' ).width() / 2 ) - ( $( '#pa_leftimg' ).width() / 2 );
  $( '#pa_leftimg' ).css( 'top', nTop );
  $( '#pa_leftimg' ).css( 'left', nLeft );
}

function positionRight()
{
  var nTop = ( $( '.pa_right' ).height() / 2 ) - ( $( '#pa_rightimg' ).height() / 2 );
  var nLeft = ( $( '.pa_right' ).width() / 2 ) - ( $( '#pa_rightimg' ).width() / 2 );
  $( '#pa_rightimg' ).css( 'top', nTop );
  $( '#pa_rightimg' ).css( 'left', nLeft );
}
})(jQuery);