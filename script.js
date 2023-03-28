document.addEventListener('DOMContentLoaded', function() {
  setInterval(function() {
    var currentTime = moment();
    var days = currentTime.diff(moment().startOf('day'), 'days');
    var hours = currentTime.diff(moment().startOf('day'), 'hours') % 24;
    var minutes = currentTime.diff(moment().startOf('day'), 'minutes') % 60;
    var seconds = currentTime.diff(moment().startOf('day'), 'seconds') % 60;

    document.querySelector('.clock-day').innerHTML = days;
    document.querySelector('.clock-hours').innerHTML = hours;
    document.querySelector('.clock-minutes').innerHTML = minutes;
    document.querySelector('.clock-seconds').innerHTML = seconds;
  }, 1000);
});
