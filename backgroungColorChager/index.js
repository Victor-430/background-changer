// for (var i = 3; i < 8; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },0);

// }

// for(let
//      i = 3; i < 8; i++) {
//     console.log(i);
// }

// getBackgroundColor();

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

for (i = 0; i < document.querySelectorAll('div').length; i++) {
    const element = document.querySelectorAll('div')[i];

    element.addEventListener('click', function () {
        const color = getComputedStyle(this).backgroundColor;
        changeBackgroundColor(color);
    });
}

// function getBackgroundColor() {
//     document.querySelector('.purple').addEventListener('click', function () {
//         const purple = getComputedStyle(this).backgroundColor;
//         changeBackgroundColor(purple);
//     });

//     document.querySelector('.green').addEventListener('click', function () {
//         const orange = getComputedStyle(this).backgroundColor;
//         console.log(orange);
//         changeBackgroundColor(orange);
//     });

//     document.querySelector('.blue').addEventListener('click', function () {
//         const blue = getComputedStyle(this).backgroundColor;
//         changeBackgroundColor(blue)
//     });

//     document.querySelector('.orange-red').addEventListener('click', function () {
//         const blue = getComputedStyle(this).backgroundColor;
//         changeBackgroundColor(blue)
//     });

//     document.querySelector('.orchid').addEventListener('click', function () {
//         const blue = getComputedStyle(this).backgroundColor;
//         changeBackgroundColor(blue)
//     });

//     document.querySelector('.olivedrab').addEventListener('click', function () {
//         const blue = getComputedStyle(this).backgroundColor;
//         changeBackgroundColor(blue)
//     });

// }






// document.querySelector(".purple").addEventListener('click', function () {
//     document.querySelector('body').style.backgroundColor = 'purple';
//     document.body.style.backgroundColor = 'rebeccapurple';
// });

// document.querySelector(".red").addEventListener('click', function () {
//     document.querySelector('body').style.backgroundColor = 'purple';
//     document.body.style.backgroundColor = 'rgb(4, 243, 143)';
// });

// document.querySelector(".blue").addEventListener('click', function () {
//     document.querySelector('body').style.backgroundColor = 'purple';
//     document.body.style.backgroundColor = 'rgb(72, 46, 216)';
// });