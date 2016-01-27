$(document).ready( function() {
  var playSound = function(selector) {
    selector.get(0).play();
  };

  var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  notes.forEach( function(note) {
    $('.' + note).click( function() {
      playSound($('#' + note + "Audio"));
    });
  });

  $(document).bind('keydown', function(e) {
    switch(e.which) {
      case 67:
        playSound($('#cAudio'));
        break;
      case 68:
        playSound($('#dAudio'));
        break;
      case 69:
        playSound($('#eAudio'));
        break;
      case 70:
        playSound($('#fAudio'));
        break;
      case 71:
        playSound($('#gAudio'));
        break;
      case 65:
        playSound($('#aAudio'));
        break;
      case 66:
        playSound($('#bAudio'));
        break;
    }
  });
});
