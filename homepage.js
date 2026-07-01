

const button = document.querySelector('.my-button');

button.addEventListener('click', () => {
    alert('Hello world');
});

// function myFunction() {
//   document.querySelector(".my-button").click();
// }

function colorchange() {
    document.querySelector(".my-button").style.backgroundColor = "red";
    document.querySelector(".my-button").style.position = "absolute";

    document.querySelector(".my-button").style.left = "200px";
    document.querySelector(".my-button").style.top = "200px";
} 