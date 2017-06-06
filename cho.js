function openTab(evt, movieName) {  
  //FIXME: THIS ENTIRE SHIT
  const vid1 = document.getElementById("SE1E1");
  const vid2 = document.getElementById("SE1E2");
  const vid3 = document.getElementById("SE2E1");

  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  tabcontent.forEach((tabcontent) => {
    tabcontent.style.display = "none";
  })

  tablinks.forEach((tablinks) => {
    tablinks.className = tablinks.className.replace(" active", "");
  })

  pauseVid();
  document.getElementById(movieName).style.display = "block";
  evt.currentTarget.className += " active";
}

function pauseVid(){
  $('iframe[src*="//www.youtube.com/embed/"]').each(function(i) {
    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
  let vidMeiFrame = $("#vid3").detach();
  vidMeiFrame.appendTo("#SE2E1");
  vidMeiFrame = null;
}