$(document).ready(function(){
	$('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
	$('.progress .progress-bar').text(function() {
                    return $(this).attr("aria-valuenow") + "%";
                });
    $(".nav-link").click(function() {
        $('.navbar').find('.active').removeClass('active');
         // $(this).closest('.nav-item').addClass('active');
         $(this).closest('.nav-link').addClass('active');
        event.preventDefault();
        $(".navbar-collapse").removeClass("show");
        $('html, body').animate({
            scrollTop: $("#"+$(this).data("id")).offset().top
        }, 1000);
    });
                
        
})