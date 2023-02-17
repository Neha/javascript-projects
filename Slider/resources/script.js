const $ = document;
const BUTTON = $.querySelector('button');
const CONTENT = $.getElementById('content');
let flag = false;

BUTTON.addEventListener('click', (e) => {
  e.preventDefault();
  if (!flag) {
    CONTENT.classList.remove('collapse');
    CONTENT.classList.add('expand');
    flag = true;
  } else {
    CONTENT.classList.remove('expand');
    CONTENT.classList.add('collapse');
    flag = false;
  }
});
