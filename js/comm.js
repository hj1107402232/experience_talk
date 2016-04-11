$(".main .year .list").each(function(e, target){
	var $target=  $(target),
	$ul = $target.find("ul");
	$target.height($ul.outerHeight()), $ul.css("position", "absolute");
}); 
$(".main .year>h2>a").click(function(e){
	e.preventDefault();
	$(this).parents(".year").toggleClass("close");
});

$(document).ready(function(){
	  mainEle=document.getElementById("main1");
	  var year=document.createElement("p");
	  var node=document.createTextNode("这是新段落。");
	  year.appendChild(node);
	  mainEle.appendChild(year);
});