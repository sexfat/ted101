// import $ from 'jquery';
import { TweenMax } from "gsap";
import './style.scss'


$('body').css('background-color' , "red");

// $('h1').css('color' , "white");

TweenMax.to('h1' , 1 , {
    x: 300,
    y: 400,
    rotation : 360
})

// function square(num) {
//     return num * num
// }

// console.log(square(10));