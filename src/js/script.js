var showTime = require('./showTime');


var app =
  { showTime: showTime,

    stackBtn: {
      mainBtn : document.getElementsByClassName('main_btn')[0],
      drawBtn : document.getElementsByClassName('draw_btn')[0],
      graphicBtn : document.getElementsByClassName('graphic_btn')[0],
      pixelmatorBtn : document.getElementsByClassName('pixelmator_btn')[0],
      sketchBtn : document.getElementsByClassName('sketch_btn')[0],
      codeBtn : document.getElementsByClassName('code_btn')[0],
      atomBtn : document.getElementsByClassName('atom_btn')[0],
      mampBtn : document.getElementsByClassName('mamp_btn')[0],
      hobbiesBtn : document.getElementsByClassName('hobbies_btn')[0],
      booksBtn : document.getElementsByClassName('books_btn')[0],
      musicBtn : document.getElementsByClassName('music_btn')[0],
      moviesBtn : document.getElementsByClassName('movies_btn')[0]

    }
  };


app.stackBtn.mainBtn.onclick = function () {

  if (app.stackBtn.mainBtn.getAttribute('status') == 'hiddenSubmenu') {
    showSubmenuAndDecreaseMainBtn();
  } else {
    hideSubmenuAndIncreaseMainBtn();
    }
}


app.stackBtn.drawBtn.onclick = function () {

  if (app.stackBtn.mainBtn.getAttribute('status') == 'showSubmenu' &&
      app.stackBtn.drawBtn.getAttribute('status') == 'hiddenSubSubmenu')

      {
        showSubSubmenuDrawAndMoveDrawBtnToLeft();

      }
  else if (app.stackBtn.mainBtn.getAttribute('status') == 'showSubmenu' &&
           app.stackBtn.drawBtn.getAttribute('status') == 'showSubSubmenu')
      {
        hideSubsubmenuDrawAndMoveDrawBtnToRight()
      }

}

app.stackBtn.codeBtn.onclick = function () {
  if (app.stackBtn.mainBtn.getAttribute('status') == 'showSubmenu' &&
      app.stackBtn.codeBtn.getAttribute('status') == 'hiddenSubSubmenu')

      {
        showSubSubmenuCodeAndMoveCodeBtnToLeft();
      }
      else if (app.stackBtn.mainBtn.getAttribute('status') == 'showSubmenu' &&
               app.stackBtn.codeBtn.getAttribute('status') == 'showSubSubmenu') {
    hideSubSubmenuCodeAndMoveCodeBtnToRight();
  }
}

app.stackBtn.hobbiesBtn.onclick = function () {

  if (app.stackBtn.mainBtn.getAttribute('status') == 'showSubmenu' &&
      app.stackBtn.hobbiesBtn.getAttribute('status') == 'hiddenSubSubmenu')
      {
        showSubSubmenuHobbiesAndMoveHobbiesBtnToLeft();
      }
  else {
        hideSubSubmenuHobbiesAndMoveHobbiesBtnToRight();
  }
}



function showSubmenuAndDecreaseMainBtn() {
  // уменьшить кнопку
  app.stackBtn.mainBtn.classList.add('animateLittle');
  app.stackBtn.mainBtn.classList.remove('animateBigger');


  //показать подменю
  app.stackBtn.drawBtn.classList.add('show', 'drawShow');
  app.stackBtn.codeBtn.classList.add('show', 'codeShow');
  app.stackBtn.hobbiesBtn.classList.add('show', 'hobbiesShow');
  app.stackBtn.drawBtn.classList.remove('hidden', 'drawCollapse');
  app.stackBtn.codeBtn.classList.remove('hidden', 'codeCollapse');
  app.stackBtn.hobbiesBtn.classList.remove('hidden', 'hobbiesCollapse');

  app.stackBtn.mainBtn.setAttribute('status', 'showSubmenu');
}

function hideSubmenuAndIncreaseMainBtn() {
  app.stackBtn.mainBtn.setAttribute('status', 'hiddenSubmenu');
  // проверка сколько подменюшек открыто
  var timeout = 100;
    if (app.stackBtn.drawBtn.getAttribute('status') == 'showSubSubmenu') {
      hideSubsubmenuDrawAndMoveDrawBtnToRight(timeout);
      timeout += 100;
    }
    if (app.stackBtn.codeBtn.getAttribute('status') == 'showSubSubmenu') {
      hideSubSubmenuCodeAndMoveCodeBtnToRight(timeout);
      timeout += 100;

    }
    if (app.stackBtn.hobbiesBtn.getAttribute('status') == 'showSubSubmenu') {
      hideSubSubmenuHobbiesAndMoveHobbiesBtnToRight(timeout);
      timeout += 100;

    }

  setTimeout(function () {

    // увеличить кнопку
    app.stackBtn.mainBtn.classList.add('animateBigger');
    app.stackBtn.mainBtn.classList.remove('animateLittle');

    // скрыть подменю
    app.stackBtn.drawBtn.classList.add('drawCollapse');
    app.stackBtn.codeBtn.classList.add('codeCollapse');
    app.stackBtn.hobbiesBtn.classList.add('hobbiesCollapse');
    app.stackBtn.drawBtn.classList.remove('show', 'moveDrowBtnToRight', 'drawShow');
    app.stackBtn.codeBtn.classList.remove('show', 'codeShow');
    app.stackBtn.hobbiesBtn.classList.remove('show', 'drawToMoveBottomRight', 'hibbiesMoveToRight', 'hobbiesShow');



  }, timeout + 50);
}



function showSubSubmenuDrawAndMoveDrawBtnToLeft() {
  app.stackBtn.drawBtn.classList.add('moveDrowBtnToLeft');
  app.stackBtn.drawBtn.classList.remove('drawShow', 'moveDrowBtnToRight');

  app.stackBtn.graphicBtn.classList.remove('hidden', 'grapgicBtnCollapse');
  app.stackBtn.graphicBtn.classList.add('moveGraphicBtnToRight');
  app.stackBtn.pixelmatorBtn.classList.remove('hidden', 'pixelmatorBtnCollapse');
  app.stackBtn.pixelmatorBtn.classList.add('movePixelmatorBtnToRight');
  app.stackBtn.sketchBtn.classList.remove('hidden', 'sketchBtnCollapse');
  app.stackBtn.sketchBtn.classList.add('moveSketchBtnToRight');

  app.stackBtn.drawBtn.setAttribute('status', 'showSubSubmenu');
}

function hideSubsubmenuDrawAndMoveDrawBtnToRight(timeout) {

  timeout = app.stackBtn.mainBtn.getAttribute('status') == 'hiddenSubmenu' ? timeout : 100;

  console.log('Художества = ' + timeout);
  app.stackBtn.drawBtn.classList.remove('moveDrowBtnToLeft');
  app.stackBtn.drawBtn.classList.add('moveDrowBtnToRight');


  app.stackBtn.graphicBtn.classList.remove('moveGraphicBtnToRight');
  app.stackBtn.graphicBtn.classList.add('grapgicBtnCollapse');
  app.stackBtn.pixelmatorBtn.classList.remove('movePixelmatorBtnToRight');
  app.stackBtn.pixelmatorBtn.classList.add('pixelmatorBtnCollapse');
  app.stackBtn.sketchBtn.classList.remove('moveSketchBtnToRight');
  app.stackBtn.sketchBtn.classList.add('sketchBtnCollapse');


  app.stackBtn.drawBtn.setAttribute('status', 'hiddenSubSubmenu');
  setTimeout(function () {


    app.stackBtn.graphicBtn.classList.add('hidden');
    app.stackBtn.pixelmatorBtn.classList.add('hidden');
    app.stackBtn.sketchBtn.classList.add('hidden');
  }, timeout);

}

function showSubSubmenuCodeAndMoveCodeBtnToLeft() {

          app.stackBtn.codeBtn.classList.add('moveCodeToLeft');
          app.stackBtn.codeBtn.classList.remove('codeShow', 'codeMoveToRight');
          app.stackBtn.atomBtn.classList.remove('hidden', 'atomBtnCollapse');
          app.stackBtn.atomBtn.classList.add('moveAtomBtnToRight', 'show');
          app.stackBtn.mampBtn.classList.remove('hidden', 'mampBtnCollapse');
          app.stackBtn.mampBtn.classList.add('moveMampBtnToRight', 'show');

          app.stackBtn.codeBtn.setAttribute('status', 'showSubSubmenu');
}

function hideSubSubmenuCodeAndMoveCodeBtnToRight(timeout) {

  timeout = app.stackBtn.mainBtn.getAttribute('status') == 'hiddenSubmenu' ? timeout : 100;
  console.log('Код = ' + timeout);

  setTimeout(function () {
    app.stackBtn.codeBtn.classList.add('codeMoveToRight');
    app.stackBtn.codeBtn.classList.remove('codeShow', 'moveCodeToLeft');

    app.stackBtn.atomBtn.classList.add('atomBtnCollapse');
    app.stackBtn.atomBtn.classList.remove('moveAtomBtnToRight');
    app.stackBtn.mampBtn.classList.add('mampBtnCollapse');
    app.stackBtn.mampBtn.classList.remove('moveMampBtnToRight');




    app.stackBtn.codeBtn.setAttribute('status', 'hiddenSubSubmenu');
    setTimeout(function () {
      app.stackBtn.atomBtn.classList.remove('show');
      app.stackBtn.mampBtn.classList.remove('show');
      app.stackBtn.atomBtn.classList.add('hidden');
      app.stackBtn.mampBtn.classList.add('hidden');

    }, 100);
  }, timeout);

}

function showSubSubmenuHobbiesAndMoveHobbiesBtnToLeft() {
  app.stackBtn.hobbiesBtn.classList.add('hibbiesMoveToLeft');
  app.stackBtn.hobbiesBtn.classList.remove('hobbiesShow', 'hibbiesMoveToRight');

  app.stackBtn.booksBtn.classList.remove('hidden', 'booksBtnCollaps');
  app.stackBtn.booksBtn.classList.add('booksMoveToRight');

  app.stackBtn.musicBtn.classList.remove('hidden', 'musicBtnCollaps');
  app.stackBtn.musicBtn.classList.add('musicMoveToRight');
  app.stackBtn.moviesBtn.classList.remove('hidden', 'moviesBtnCollaps');
  app.stackBtn.moviesBtn.classList.add('moviesMoveToRight');

  app.stackBtn.hobbiesBtn.setAttribute('status', 'showSubSubmenu');
}

function hideSubSubmenuHobbiesAndMoveHobbiesBtnToRight(timeout) {
  // var timeout = 100;
  timeout = app.stackBtn.mainBtn.getAttribute('status') == 'hiddenSubmenu' ? timeout : 100;
  console.log('Хобби = ' + timeout);
  app.stackBtn.hobbiesBtn.setAttribute('status', 'hiddenSubSubmenu');


  setTimeout(function () {

    app.stackBtn.hobbiesBtn.classList.add('hibbiesMoveToRight');
    app.stackBtn.hobbiesBtn.classList.remove('hibbiesMoveToLeft');



    app.stackBtn.booksBtn.classList.add('booksBtnCollaps');
    app.stackBtn.booksBtn.classList.remove('booksMoveToRight');
    app.stackBtn.musicBtn.classList.add('musicBtnCollaps');
    app.stackBtn.musicBtn.classList.remove('musicMoveToRight');
    app.stackBtn.moviesBtn.classList.add('moviesBtnCollaps');
    app.stackBtn.moviesBtn.classList.remove('moviesMoveToRight');





    setTimeout(function () {

      app.stackBtn.booksBtn.classList.add('hidden');
      app.stackBtn.musicBtn.classList.add('hidden');
      app.stackBtn.moviesBtn.classList.add('hidden');
      app.stackBtn.booksBtn.classList.remove('show');
      app.stackBtn.musicBtn.classList.remove('show');
      app.stackBtn.moviesBtn.classList.remove('show');

    }, 100);
  }, timeout);


}

app.showTime();
