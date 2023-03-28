<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () =>
    requestAnimationFrame(updateTime)
  )

  function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    requestAnimationFrame(updateTime);
  }
</script>
