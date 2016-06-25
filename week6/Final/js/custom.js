jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});

    function loadPagesSkully(){
        var loc = "https://sketchfab.com/models/2bec2e8141e14fdcb8fbb26f6593bca6/embed";
        document.getElementById('myFrame').setAttribute('src', loc);
    }
    function loadPagesIota(){
        var loc = "https://sketchfab.com/models/e4f8ded17ce44a23bc4b7ed457a15a1b/embed";
        document.getElementById('myFrame').setAttribute('src', loc);
    }

