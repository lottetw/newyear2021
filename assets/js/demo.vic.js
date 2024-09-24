function loadPopup() {
  $('.mask').load('_popup.html', function(){
    //
    // ar popup
    //
    $('[data-target="idArPopup"]').on("click", function () {
      $('.mask').removeClass('hide');
    });
    $('[data-close="idArPopup"]').on("click", function () {
      $('.mask').addClass('hide');
    });
  }
  );
}
$(function(){

  loadPopup();
  //
  //roller idPickAction
  //
  var rouletter = $('.roulette');
  var starttxt = $('[data-id="idPickAction"]').attr("data-start-txt");
  var stoptxt = $('[data-id="idPickAction"]').attr("data-stop-txt");
  var isSpinning = false;
  var stopImgNumber = 0;
	var opt = {
		startCallback : function() {
      $('[data-id="idPickAction"]').addClass('stop');
      $('[data-id="idPickAction"]').text(stoptxt);
      $('.click_hint').addClass('hide');
      $('.roulette img').removeClass('clickable');
      isSpinning = true;

		},
		slowDownCallback : function() {
		},
		stopCallback : function($stopElm) {
      $('[data-id="idPickAction"]').removeClass('stop');
      $('[data-id="idPickAction"]').text(starttxt);
      $('.click_hint').removeClass('hide');
      $('.roulette img').addClass('clickable');
      isSpinning = false;
      opt['stopImageNumber'] = -1; //random design 0-3的圖片
      console.log('opt: stopImgNumber ' + opt['stopImageNumber']);
      rouletter.roulette('option', opt);      
		}
	}
  rouletter.roulette(opt);	
  rouletter.roulette('start');
  $('[data-id="idPickAction"]').on("click", function(){
    if($(this).hasClass('stop')){
      rouletter.roulette('stop');	
    }else{
      rouletter.roulette('start');	
    }
	});
  opt['speed'] = 5;
  // opt['duration'] = 500;
  opt['stopImageNumber'] = Math.ceil((Math.random() * 4)) - 1;; //random design 0-3的圖片
  console.log('opt: random stopImgNumber ' + opt['stopImageNumber']);
  rouletter.roulette('option', opt);

  $('.roulette img').on("click", function () {
    if (!isSpinning){
      window.location.href = $(this).attr('data-target');
    }
    // alert("前往答案頁> " + $(this).attr('data-id'));
  });
  //click
  $('[data-id="idGoToPhoto"]').on("click", function () {
    $('html, body').animate({
      scrollTop: $('.photo-wrapper').offset().top
    }, 500);
  });

});

