function openTab(evt, movieName) {
    var i, tabcontent, tablinks;
	
	var vid1 = document.getElementById("SE1E1");
	var vid2 = document.getElementById("SE1E2");
	var vid3 = document.getElementById("SE2E1");

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
	
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

	pauseVid();
    document.getElementById(movieName).style.display = "block";
    evt.currentTarget.className += " active";
}

 function pauseVid(){
    $('iframe[src*="//www.youtube.com/embed/"]').each(function(i) {
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }