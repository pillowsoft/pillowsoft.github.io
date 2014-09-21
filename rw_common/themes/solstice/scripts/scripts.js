// 'ThemeFlood' is the global object for ThemeFlood theme functions
var ThemeFlood = {};
// Reduce potential conflicts with other scripts on the page
ThemeFlood.jQuery = jQuery.noConflict(true);
var $ThemeFlood = ThemeFlood.jQuery;
// Create a unique object and namespace for theme functions
ThemeFlood.themeFunctions = {};
// Define a closure
ThemeFlood.themeFunctions = (function() {
    // When jQuery is used it will be available as $ and jQuery but only inside the closure
    var jQuery = ThemeFlood.jQuery;
    var $ = jQuery;
	var $ThemeFlood = jQuery.noConflict();

// ExtraContent functionality 
$ThemeFlood(document).ready(function () {
	var extraContent =  (function() {
		var ecValue = 10;
		for (i=1;i<=ecValue;i++)
		{
			$ThemeFlood('#myExtraContent'+i+' script').remove();
			$ThemeFlood('#myExtraContent'+i).appendTo('#extraContainer'+i);
		}
	})();
});

// Function to adjust header bar opacity when the page is scrolled 
$ThemeFlood(document).ready(function(){
	var headerwrapper = $('#headerFill'),
    headerwrapperH = headerwrapper.height();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			headerwrapper.stop().fadeTo(300,1.0);
		} else {
			headerwrapper.stop().fadeTo(300,0.90);
		}
	});
});

// Function to change header bar padding when the page is scrolled
$ThemeFlood(document).ready(function(){
	var header = $('#headingPadding'),
    headerH = header.height();
	$(window).scroll(function() {
    	if ($(this).scrollTop() > 100) {
			header.stop().animate({
				margin: '10px 10px'
			}, 300);
		} else {
			header.stop().animate({
				margin: '30px 10px'
			}, 300);
		}
	});
});

// Smooth-scrolling navigation links
$ThemeFlood('#smoothScrollerNav a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $ThemeFlood('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $ThemeFlood('html,body').animate({
                 scrollTop: target.offset().top -100
            }, 1000);
            return false;
        }
    }
});

// Links with a class of 'newtab' open in new tabs or windows
$ThemeFlood(document).ready(function(){
	$ThemeFlood('a.newtab').append("<span class='newWindowIcon'> <i class='fa fa-external-link'></i></span>");
	$ThemeFlood('a.newtab').click( function() {
		window.open( $(this).attr('href') );
		return false;
	});
});

// Smooth-scroll the 'back to top' link
$ThemeFlood('#backToTop, .top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $ThemeFlood('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $ThemeFlood('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// FreeStyle banners
$ThemeFlood(document).ready(function(){
	$ThemeFlood('#fs').appendTo('#freeStyle');                                           
});

// Function to apply unique class ID's onto each list, list item and suppress parent pages
$ThemeFlood(document).ready(function () {
	$ThemeFlood("#mainNav li").each(function (i) {
		i = i+1;
		$ThemeFlood(this).addClass("link"+i);
		});
		$ThemeFlood("#mainNav ul").each(function (i) {
   		i = i+1;
   		$ThemeFlood(this).addClass("list"+i);
	});
});

// Function to make the navigation title toggle the navigation container, in mobile mode
$ThemeFlood(document).ready(function () {
		$ThemeFlood('.raftNavArrow').removeClass('openedState');
		$ThemeFlood('.raftNavArrow').addClass('closedState');
		$ThemeFlood(".raftNavTitle").click(function(){
			$ThemeFlood(".raftNav").slideToggle(500);
		    	$ThemeFlood('.raftNavArrow').toggleClass('closedState');
		    	$ThemeFlood('.raftNavArrow').toggleClass('openedState');
			return false;
		});
});

// If a touch device is detected, add 'touchDevice' class to the page
$ThemeFlood(document).ready(function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$ThemeFlood('body').addClass('touchDevice');
	}
});

// Fade in page when the document is ready
$ThemeFlood(document).ready(function(){
	$ThemeFlood('#pageWrapper').delay(1000).fadeIn(2000);
});

// Prepend Bootstrap modals to the body tag, to avoid buggy z-index
$ThemeFlood(document).ready(function () {
	$ThemeFlood('.modal').appendTo($('body'));
});
	
})(ThemeFlood.themeFunctions);