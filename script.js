<<<<<<< HEAD
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('12/23/2022 18:00:00').getTime();
let x = setInterval(() => countDown(), second);
let data_p_calc = new Date('11/15/2022 00:00:00').getTime();
let data_p_fsc = new Date('11/13/2022 00:00:00').getTime();
let data_p_termo = new Date('11/09/2022 00:00:00').getTime();

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;
  let diff_p_calc = data_p_calc - now;
  let diff_p_fsc = data_p_fsc - now;
  let diff_p_termo = data_p_termo - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('mins').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);

  document.getElementById('days_c').innerText = Math.floor(diff_p_calc/day);
  document.getElementById('days_f').innerText = Math.floor(diff_p_fsc/day);
  document.getElementById('days_t').innerText = Math.floor(diff_p_termo/day);
}



function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`0${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
=======
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('12/23/2022 18:00:00').getTime();
let x = setInterval(() => countDown(), second);
let data_p_calc = new Date('11/15/2022 00:00:00').getTime();
let data_p_fsc = new Date('11/13/2022 00:00:00').getTime();
let data_p_termo = new Date('11/09/2022 00:00:00').getTime();

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;
  let diff_p_calc = data_p_calc - now;
  let diff_p_fsc = data_p_fsc - now;
  let diff_p_termo = data_p_termo - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('mins').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);

  document.getElementById('days_c').innerText = Math.floor(diff_p_calc/day);
  document.getElementById('days_f').innerText = Math.floor(diff_p_fsc/day);
  document.getElementById('days_t').innerText = Math.floor(diff_p_termo/day);
}



function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`0${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
>>>>>>> 195180313c68e4783c6c2a3ed6baf099f2965202
}