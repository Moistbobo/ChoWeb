function openTab(evt, movieName) {  
  //FIXME: THIS ENTIRE SHIT
  const vid1 = document.getElementById("SE1E1");
  const vid2 = document.getElementById("SE1E2");
  const vid3 = document.getElementById("SE2E1");

  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  Array.from(tabcontent).forEach((tabcontent) => {
    tabcontent.style.display = "none";
  })

  Array.from(tablinks).forEach((tablinks) => {
    tablinks.className = tablinks.className.replace(" active", "");
  })

  pauseVid();
  document.getElementById(movieName).style.display = "block";
  evt.currentTarget.className += " active";
}


$( document ).ready(function() {	
	$('.grid').isotope({
	  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
  columnWidth: 100,
  horizontalOrder: true
}
	})	
	let memeContent = $("#memecontent").detach();
	memeContent.appendTo("#memes_section_content");
	memeContent = null;
	

	
	$('.mangaviewer').slick({
  infinite: true,
  speed: 500,
  fade: true,
  slidesToScroll: 1,
  cssEase: 'linear',
  asNavFor: '.mangaslider',
  arrows: false,
  adaptiveHeight: true
});

$('.mangaslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.mangaviewer',
  centerMode: true,
  focusOnSelect: true,

});

	let mangaContent = $("#manga").detach();
	mangaContent.appendTo("#manga_section_content");
	mangaContent = null;
	
});

function shuffleMemes()
{
		setTimeout(function(){
	$('.grid').isotope('shuffle');
	}, 200);
}

function pauseVid(){
  $('iframe[src*="//www.youtube.com/embed/"]').each(function(i) {
    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
  let vidMeiFrame = $("#vid3").detach();
  vidMeiFrame.appendTo("#SE2E1");
  vidMeiFrame = null;
}

function ScrollToElement(eleName)
{
	setTimeout(function(){
	$('html, body').animate({
	scrollTop: $(eleName).offset().top-50
	},500);
}, 100);
}

function InsertVidTabButtons(args)
{
	var tabs = args.split(" ");	
	tabs.forEach((tabs)=>{
	document.write("<button class='tablinks' onclick='openTab(event,\""+tabs+"\")'>"+tabs+"</button>");
	})
}

function InsertMangaTabs(manganame)
{
	var manganames = manganame.split("|");
	
	manganames.forEach((manganames)=>{
	document.write("<button class='tablinks' onclick='openTab(event,\""+manganames+"\")'>"+manganames+"</button>");
	})
}

function InsertManga(divid, mangalink)
{
	var _insert = "<div id ="+divid+"class='tabcontent'>"+"<img class='grid-item' src='"+mangalink+"'></img>" + "</div>";
	document.write(_insert);

}

function InsertMemes(args)
{
	var memes = args.split(" ");
	memes.forEach((memes)=>{
	document.write("<img class='grid-item' src='"+memes+"'></img>");
	})
}

function InsertVideo(type, divid, divclasses, vidid, vidLink)
{
	var _insert;
	if (type == 0) // Youtube
		_insert = "<div id ="+divid+" class = " +divclasses +" tabcontent'>" +"<iframe id = "+ vidid + " src="+"'"+ vidLink +"'"+" width='100%' height='90%' frameborder='5' allowfullscreen webkitallowfullscreen mozallowfullscreen scrolling='no'></iframe>" +" </div>";
	else if (type == 1) // vidme
		_insert = "<div id ="+divid+" class = " +divclasses +" tabcontent'>" +"<iframe id = "+ vidid + " src="+"'"+ vidLink +"'"+" width='100%' height='90%' frameborder='5' allowfullscreen webkitallowfullscreen mozallowfullscreen scrolling='no'></iframe>" +" </div>";
	document.write(_insert);
}

