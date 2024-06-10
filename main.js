let  js=document.getElementById("js")   
let card9 = document.getElementById("card");
let card8=document.getElementById("card1");
let card7=document.getElementById("card2");
let  js1=document.getElementById("js1")   
let cards9 = document.getElementById("cards");
let cards8=document.getElementById("cards1");
let cards7=document.getElementById("cards2");

document.addEventListener("DOMContentLoaded", function () {

    
    let imgs = {
        img1:"img/js1.png",
       
    }
    for (let i = 0; i<=0; i++) {
        for(let x in imgs){
        let car = document.createElement("div");

        car.classList.add("car");
        car.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${imgs[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>Cabify</h3>
            <p>Кроссплатформенное приложение <br>
            под Android и iOS разработано на <br>
            React Native(Python)</p>
        </div>
    `

        card9.appendChild(car);
        }
    }
    let text ={
        img2:"img/js2.png"
     }
     for (let i = 0; i<=0; i++) {
        for(let x in text){
        let cars = document.createElement("div");

        cars.classList.add("cars");
        cars.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${text[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>Ural Airlines</h3>
            <p>Все сервисы для пассажиров <br>
            «Уральских авиалиний» в одном <br>
            приложении на Swift и Java</p>
        </div>
    `

        card8.appendChild(cars);
        }
    }

    let text5 ={
        img2:"img/js3.png"
     }
     for (let i = 0; i<=0; i++) {
        for(let x in text5){
        let carw = document.createElement("div");

        carw.classList.add("carw");
        carw.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${text5[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>OpenGift</h3>
            <p>Система монетизации <br>
            OpenSource-проектов на основе <br>
            блокчейна hyperledger fabric</p>
        </div>
    `

        card7.appendChild(carw);
        }
    }
    
});




document.addEventListener("DOMContentLoaded", function () {

    
    let imgs = {
        img1:"img/js4.png",
       
    }
    for (let i = 0; i<=0; i++) {
        for(let x in imgs){
        let car = document.createElement("div");

        car.classList.add("car");
        car.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${imgs[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>PlanDi</h3>
            <p>Сервис поиска актуальной работы <br>
            проектировщикам и компаниям</p>
        </div>
    `

        cards9.appendChild(car);
        }
    }
    let text ={
        img2:"img/js5.png"
     }
     for (let i = 0; i<=0; i++) {
        for(let x in text){
        let cars = document.createElement("div");

        cars.classList.add("cars");
        cars.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${text[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>Коалиция</h3>
            <p>Проект для ведущего в России Центра <br>
            образования, который осуществляет <br>
            подготовку школьников к сдаче ЕГЭ.</p>
        </div>
    `

        cards8.appendChild(cars);
        }
    }

    let text5 ={
        img2:"img/js6.png"
     }
     for (let i = 0; i<=0; i++) {
        for(let x in text5){
        let carw = document.createElement("div");

        carw.classList.add("carw");
        carw.innerHTML = `
        <div class="car-img">
        <img width="250px" height="160px" src="${text5[x]}" alt="">
        </div>
        <div class="car-text">
            <h3>Rubetek</h3>
            <p>Управление домом IoT<br>
            и микрофреймворк на языке Python<br>
            совместно с Java и Swift</p>
        </div>
    `

        cards7.appendChild(carw);
        }
    }
    
});