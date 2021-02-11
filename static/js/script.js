$(document).ready(function(){

	$('.button-collapse').sideNav();
	$('select').material_select();

	$('.modal').modal();

	$('.see_comment').click(function(){
		var id = $(this).attr('id');
		$.post('admin_seeCommentJs.html', {id:id}, function(){
			$('#commentaire_'+id).hide();
		});
	});

	$('.delete_comment').click(function(){
		var id = $(this).attr('id');
		$.post('admin_deleteCommentJs.html', {id:id}, function(){
			$('#commentaire_'+id).hide();
		});
	});

});

$(document).ready(function() {
    $(window).on('scroll', function() {

        var elmt = $('.from-right');
        var topImg = $('.from-right').offset().top;
        var scroll = $(window).scrollTop();

        $(elmt).each(function() {

            var topImg = $(this).offset().top - 600;

            if (topImg < scroll) {

                $(this).css("transform", "translate(0,0)");
                $(this).css("opacity", "1");

            };
        });
    });
});