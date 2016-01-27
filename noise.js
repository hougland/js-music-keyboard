$(document).ready( function() {
  var cButton = $(".c"), cAudio = $("#cAudio"), dButton = $(".d"), dAudio = $("#dAudio"), eButton = $(".e"), eAudio = $("#eAudio"), fButton = $(".f"), fAudio = $("#fAudio"), gButton = $(".g"), gAudio = $("#gAudio"), aButton = $(".a"), aAudio = $("#aAudio"), bButton = $(".b"), bAudio = $("#bAudio");
  var playSound = function(selector) {
    selector.get(0).play();
  };
  // var clickPlay = function() {
  //   selector.click(function() {
  //
  //   });
  // };

  cButton.click(function() {
    playSound(cAudio);
  });

  dButton.click(function() {
    playSound(dAudio);
  });

  eButton.click(function() {
    playSound(eAudio);
  });

  fButton.click(function() {
    playSound(fAudio);
  });

  gButton.click(function() {
    playSound(gAudio);
  });

  aButton.click(function() {
    playSound(aAudio);
  });

  bButton.click(function() {
    playSound(bAudio);
  });

  $(document).bind('keydown', function(e) {
    if(e.keyCode == 67) {
      playSound(cAudio);
    } else if (e.which == 68) {
      playSound(dAudio);
    } else if (e.which == 69) {
      playSound(eAudio);
    } else if (e.which == 70) {
      playSound(fAudio);
    } else if (e.which == 71) {
      playSound(gAudio);
    } else if (e.which == 65) {
      playSound(aAudio);
    } else if (e.which == 66) {
      playSound(bAudio);
    }
  });

});
