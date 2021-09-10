// Sort Projects alphabetically
var projects = Array.from(document.querySelectorAll('.container > ul > li'));

projects.sort((a,b) => {
    return ('' + a.querySelector("a").innerText).localeCompare(b.querySelector("a").innerText);
});

projects.forEach(p => document.querySelector('.container > ul').appendChild(p));
