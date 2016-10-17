$(document).ready(function(){
	$("table.navigacija table#apartmani").hide();
	$("table#apartmani").parent().hover(function(){$("table#apartmani").slideDown(500);},function(){$("table#apartmani").slideUp(500);});
	
	$("table.navigacija tr td").hover(function(){
			$(this).animate({backgroundPosition:"5px 6px"},250);},
		function(){
			$(this).animate({backgroundPosition:"0px 6px"},250);});
	$.emajl();
});
jQuery.extend({	// stare metode prebacene u $.namespace
emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a> >>> mailto:user_name@domain
$("a.emajl").each(function(){
$(this).attr("href",$(this).attr("href").replace(/([^A]+)AT([\w]+)/,"mailto:$1@$2"));
if(!$(this).text()) $(this).text($(this).attr("href").substr(7));
});},
})