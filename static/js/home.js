$(function() {
    /* NOTE: hard-refresh the browser once you've updated this */
    $(".typed").typed({
      strings: [
        "stat siddhiparashar<br/>" +
        "><span class='caret'>$</span> job: playback at Disney+Hotstar<br/> ^100" +
        "><span class='caret'>$</span> skills: little bit of all things backend using python<br/> ^100" +
        "><span class='caret'>$</span> hobbies: football, travel, mountaineering<br/> ^300" +
        "><span class='caret'>$</span> alias: siddhipiddi<br/> ^300" +
        "><span class='caret'>$</span> highlight: dog mom to Milo<br/> ^300"
      ],
      showCursor: true,
      cursorChar: '_',
      autoInsertCss: true,
      typeSpeed: 0.001,
      startDelay: 50,
      loop: false,
      showCursor: false,
      onStart: $('.message form').hide(),
      onStop: $('.message form').show(),
      onTypingResumed: $('.message form').hide(),
      onTypingPaused: $('.message form').show(),
      onComplete: $('.message form').show(),
      onStringTyped: function(pos, self) {$('.message form').show();},
    });
    $('.message form').hide()
  });