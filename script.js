$(document).ready(function(){
	$(".button").click(function(event){
		event.preventDefault();
		var data = $("#form1").serialize();
		$.post("post.php", data).done(function (data) {
        	$( ".result" ).html( data );
    	});
	});
});