$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
	animationOptions: {
            duration: 1500,
	    easing: 'linear',
	    queue: false
	}
    });

});

// The code will be excuted when the document (website) is ready
$(document).ready(function() {
    // 'slides is the id, needs to match with the one in index.html'
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ["Data Scientist.", "Scientific Programmer.", "Cross-Functional Collaborator."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive:{
            0:{
                  item: 1
              },
            480:{
                  item: 2
              },
            768:{
                  item: 3
              },
            938:{
                  item: 4
              }
       }
    });    
    
    var skillsTopOffset = $(".skillsSection").offset().top;
    //console.log(skillsTopOffset); -- returns the position of the section
    
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    Fancybox.bind("[data-fancybox]")
    
    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
	$(this).addClass("current");

	var selector = $(this).attr("data-filter");

	$(".items").isotope({
            filter: selector,
	    animationOptions: {
                duration: 1500,
		easing: 'linear',
		queue: false
	    }
	});
	return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

	var targetElement = $(this).attr("href");
	var targetPosition = $(targetElement).offset().top;
	$("html, body").animate({scrollTop: targetPosition - 50}, "0.5s");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

	if($(window).scrollTop() >= navTop) {
	    body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
	}
	else {
	    body.css("padding-top", 0);
            body.removeClass("fixedNav")
	}

    }
    
/*
    $(".counter").each(function() {

        var element = $(this);
        var endVal = parseInt(element.text());
	var countup = new CountUp(element, 0, {duratuon: 3});

        countup.update(endVal);
    });
*/
    
});
