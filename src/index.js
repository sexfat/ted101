// import $ from 'jquery';
// import { TweenMax } from "gsap";
import Vue from "vue"; 
import './style.scss'

new Vue({
    el : '#app',
    data : {
            message : 'hello vue'
    }
});

$('body').css('background-color' , "blue");
$('h1').css('color' , "red");

// TweenMax.to('h1' , 1 , {
//     x: 300,
//     y: 400,
//     rotation : 360
// })

// function square(num) {
//     return num * num
// }

// console.log(square(10));