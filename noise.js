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
    switch(e.which) {
      case 67:
        playSound(cAudio);
        break;
      case 68:
        playSound(dAudio);
        break;
      case 69:
        playSound(eAudio);
        break;
      case 70:
        playSound(fAudio);
        break;
      case 71:
        playSound(gAudio);
        break;
      case 65:
        playSound(aAudio);
        break;
      case 66:
        playSound(bAudio);
        break;
    }
  });

});
