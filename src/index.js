import $ from 'jquery';
import { TweenMax } from "gsap";




$('body').css('background-color' , "red");

$('h1').css('color' , "white");

TweenMax.to('.h1' , 1 , {
    x: 900,
    y: 100
})

function square(num) {
    return num * num
}

console.log(square(10));