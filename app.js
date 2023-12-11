/**
 * Geef het eerste getal
 */



let aantalCookies = document.getElementById('uitkomst')

let aantalCookiesInt = 0

let cookieImg = document.getElementById('cookieImg')

cookieImg.addEventListener("click", function() {test()});

function test()
{
    aantalCookiesInt += 1
    aantalCookies.innerHTML = aantalCookiesInt
}

let cookieFactoryBtn = document.getElementById('btn1')
let switchBtn = 1
let intervalId;

cookieFactoryBtn.addEventListener("click", function() { test3()})

function test3()
{

    if (switchBtn)
    {
        intervalId = setInterval(function() { test2()}, 1000)
        switchBtn = 0

    } else {
        clearInterval(intervalId)
        switchBtn = 1
    }
}


function test2()
{
    console.log('Arjan')
    aantalCookiesInt += 1
    aantalCookies.innerHTML = aantalCookiesInt
}
