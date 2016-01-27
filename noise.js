$(document).ready( function() {
  var cButton = $(".c"), cAudio = $("#cAudio"), dButton = $(".d"), dAudio = $("#dAudio"), eButton = $(".e"), eAudio = $("#eAudio"), fButton = $(".f"), fAudio = $("#fAudio"), gButton = $(".g"), gAudio = $("#gAudio"), aButton = $(".a"), aAudio = $("#aAudio"), bButton = $(".b"), bAudio = $("#bAudio");

  cButton.click(function() {
    cAudio.get(0).play();
  });

  dButton.click(function() {
    dAudio.get(0).play();
  });

  eButton.click(function() {
    eAudio.get(0).play();
  });

  fButton.click(function() {
    fAudio.get(0).play();
  });

  gButton.click(function() {
    gAudio.get(0).play();
  });

  aButton.click(function() {
    aAudio.get(0).play();
  });

  bButton.click(function() {
    bAudio.get(0).play();
  });

  $(document).bind('keydown', function(e) {
    // letter "c"
    if(e.keyCode == 67) {
      cAudio.get(0).play();
    } else if (e.keyCode == 68) {
      dAudio.get(0).play();
    } else if (e.keyCode == 69) {
      eAudio.get(0).play();
    } else if (e.keyCode == 70) {
      fAudio.get(0).play();
    } else if (e.keyCode == 71) {
      gAudio.get(0).play();
    } else if (e.keyCode == 65) {
      aAudio.get(0).play();
    } else if (e.keyCode == 66) {
      bAudio.get(0).play();
    }
  });

});
