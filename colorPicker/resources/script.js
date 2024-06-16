const BODY = document.querySelector('body')
const RANGE = document.getElementById('rangeHandler');

RANGE.addEventListener('mousemove', function () {
    let colorNewVal = Number(this.value);
    BODY.style.background = `hsl(${colorNewVal},50%, 60%)`;
});