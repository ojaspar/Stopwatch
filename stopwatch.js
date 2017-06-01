
var total_seconds = 60 * 0;
var minutes = parseInt(total_seconds / 60);
var  seconds = parseInt(total_seconds % 60);
var timer = document.getElementById('timer');
timer.innerHTML = "00" + " : "+ "00" ;
// countdown function
function countDown(){
  minutes = (minutes < 10 )? "0" + minutes :minutes;
  seconds = (seconds < 10 )? "0" + seconds : seconds;
  if (total_seconds <= 40){
    timer.style.color = 'red';
  }
  timer.innerHTML = minutes + " : " + seconds;
  if(total_seconds <= 0){
    timer.innerHTML = "<h4> Time Up!!!!!";
  }
  else{
    var stat;
    total_seconds = total_seconds - 1;
    minutes = parseInt(total_seconds / 60);
    seconds = parseInt(total_seconds % 60);
  }
  setTimeout(countDown, 1000);
}
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var area = document.getElementById('area');
var set = document.getElementById('set');
  reset.addEventListener('click', function() {
    location.reload();
  });
  start.addEventListener('click', function(){
    total_seconds = 60 * 30;
    countDown();
  });
  pause.addEventListener('click', function(){
  total_seconds == countDown;
  stop();
  });
  set.addEventListener('click', function(){
    total_seconds = 60 * area.value;
    countDown();
  })
