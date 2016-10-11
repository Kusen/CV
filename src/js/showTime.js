function showTime(){
  var dat = new Date(), D = '' + dat.getDay(),
    H = '' + dat.getHours(),
    M = '' + dat.getMinutes();

    H = H.length < 2 ? '0' + H:H;
    M = M.length < 2 ? '0' + M:M;

  switch (D) {

    case '0': D = 'Вс'; break;
    case '1': D = 'Пн'; break;
    case '2': D = 'Вт'; break;
    case '3': D = 'Ср'; break;
    case '4': D = 'Чт'; break;
    case '5': D = 'Пт'; break;
    case '6': D = 'Сб'; break;

  }

  var clock = H + ':' + M;
  document.getElementById('time').innerHTML = clock;
  // $('#time').html(clock);
  setTimeout(showTime, 1);
}

module.exports = showTime;
