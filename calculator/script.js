var btns = document.querySelectorAll('.btn');
var screen = document.querySelector('.screen');
var equalBtn = document.querySelector('.btn-equal');
var clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    //button grabs data-num and store in screen class
    let number = btns[i].getAttribute('data-num'); //button grabs data-num and store in screen class
    screen.value += number;
  });
}
equalBtn.addEventListener('click', function() {
  if (screen.value === '') {
    alert('input is empty');
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener('click', function() {
  screen.value = ' ';
});
