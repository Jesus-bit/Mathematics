// Códe del Square
const perimeterSquare = (side) => side*4;
const areaSquare = (side) => side * side;

console.group("Triangles");
const perimeterTriangle = (side1, side2, base) => parseFloat(side1) + parseFloat(side2) + parseFloat(base);
const heightTriangle = (side1, side2, base) => Math.sqrt((side1**2)- (base**2 / 4));
const areaTriangle = (base, height) => (base * height) / 2;
console.log("El área del Triangle es: " + areaTriangle + "cmˆ2");
console.groupEnd();

// Códe del círcle
console.group("Círcles");
// Diámeter
const diameterCircle = (radio) => radio * 2;

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

const perimeterCircle = (radio) => diameterCircle(radio) * PI;
// Área
const areaCircle = (radio) => (radio * radio) * PI;
console.groupEnd();

function measuresArea (measure, element) {
    if(measure === "cm"){
        element.innerHTML = `cm<span class="squared">2</span>`;
    }else if(measure === "m") {
        element.innerHTML = `m<span class="squared">2</span>`;
    }else {
        element.innerHTML = `mm<span class="squared">2</span>`;
    }
}
function measuresPerimeter (measure, element){
    if(measure === "cm"){
        element.innerHTML = `<p>cm</p>`;
    }else if(measure === "m") {
        element.innerHTML = `<p>m</p>`;
    }else {
        element.innerHTML = `<p>mm</p>`;
    }
}

// Aquí interactuamos con el HTML
function calculatePerimeterSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const Outcome = document.getElementById("outCome__square");
    if(value){
        const measuresSquare = document.getElementById("measuresSquare").value;
        const perimeter = perimeterSquare(value);
        const areaMeasure = document.getElementById("measureSquare");
        Outcome.innerHTML = `<p>${perimeter}</p>`;
        measuresPerimeter(measuresSquare, areaMeasure);
    }else{
        Outcome.innerHTML = `<p>Error</p>`;
    }
}
function calculateAreaSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const Outcome = document.getElementById("outCome__square");
    if(value){
        const measuresSquare = document.getElementById("measuresSquare").value;
        const area = areaSquare(value);
        Outcome.innerHTML = `<p>${area}</p>`;
        const areaMeasure = document.getElementById("measureSquare");
        measuresArea(measuresSquare, areaMeasure);
    }else{
        Outcome.innerHTML = `<p>Error</p>`;
    }
}


function calculateAreaTriangle () {
    const inputBase = document.getElementById("input__base").value;
    const inputHeight = document.getElementById("input__height").value;
    const OutCome = document.getElementById("outCome__triangle");
    if (inputBase && inputHeight) {
        const measuresTriangle = document.getElementById("measuresTriangle").value;
        const areaMeasure = document.getElementById("measureTriangle");
        const area = areaTriangle(inputBase, inputHeight);
    
        OutCome.innerHTML = `<p>${area}</p>`;
        measuresArea(measuresTriangle, areaMeasure);
    } else {
        OutCome.innerHTML = `<p>Error</p>`;
    }
}
function calculatePerimeterTriangle () {
    const inputBase = document.getElementById("input__base").value;
    const inputSide1 = document.getElementById("input__side1").value;
    const inputSide2 = document.getElementById("input__side2").value;
    const OutCome = document.getElementById("outCome__triangle");
    if (inputBase && inputSide1 && inputSide2) {        
        const measuresTriangle = document.getElementById("measuresTriangle").value;
        const perimeterMeasure = document.getElementById("measureTriangle");
        const perimeter = perimeterTriangle(inputSide1, inputSide2, inputBase);
    
        OutCome.innerHTML = `<p>${perimeter}</p>`;
        measuresPerimeter(measuresTriangle, perimeterMeasure);
    } else {
        OutCome.innerHTML = `<p>Error</p>`;
    }
}
function calculateHeightTriangle () {
    const inputBase = document.getElementById("input__base").value;
    const inputSide1 = document.getElementById("input__side1").value;
    const inputSide2 = document.getElementById("input__side2").value;
    const OutCome = document.getElementById("outCome__triangle");
    if(inputSide1 === inputSide2 && inputBase != inputSide1) {
        const measuresTriangle = document.getElementById("measuresTriangle").value;
        const heightMeasure = document.getElementById("measureTriangle");
        const height = heightTriangle(inputSide1, inputSide2, inputBase);
        OutCome.innerHTML = `<p>${height}</p>`;
        measuresPerimeter(measuresTriangle, heightMeasure);
    }else{
        OutCome.innerHTML = `<p>Error</p>`;
    }
}

function calculateAreaCircle () {
    const inputRadio = document.getElementById("input__radio").value;
    const OutCome = document.getElementById("outCome__circle");
    if(inputRadio){
        const measuresCircle = document.getElementById("measuresCircle").value;
        const area = areaCircle(inputRadio);
        const areaMeasure = document.getElementById("measureCircle");
    
        OutCome.innerHTML = `<p>${area}</p>`;
        measuresArea(measuresCircle, areaMeasure);
    }else{
        OutCome.innerHTML = `<p>Error</p>`;
    }
}

function calculatePerimeterCircle () {
    const inputRadio = document.getElementById("input__radio").value;
    const OutCome = document.getElementById("outCome__circle");
    if(inputRadio){
        const measuresCircle = document.getElementById("measuresCircle").value;
        const perimeter = perimeterCircle(inputRadio);
        const perimeterMeasure = document.getElementById("measureCircle");
    
        OutCome.innerHTML = `<p>${perimeter}</p>`;
        measuresPerimeter(measuresCircle, perimeterMeasure);
    }else{
        OutCome.innerHTML = `<p>Error</p>`;
    }
}
function calculatePriceDiscount(price, discount) {
    const percentagePriceDiscount = 100 - discount;
    const priceDiscount = (price * percentagePriceDiscount) / 100;
    return priceDiscount;
}


function onClickButtonPriceDiscount(price, id) {
    const Price = parseFloat(price);
    const couponValue = document.getElementById(`InputCoupon${id}`).value;
    const alertDiscount = document.getElementsByClassName(`${id}__alert--discount`);
    alertDiscount[0].classList.remove("display__none");
    let discount;

    switch(couponValue) {
        case "first-buy":
            discount = 15;
            alertDiscount[0].innerHTML = `<p>- 15%</p>`;
        break;
        case "Forever":
            discount = 30;
            alertDiscount[0].innerHTML = `<p>- 30%</p>`;
        break;
        case "secret":
            discount = 25;
            alertDiscount[0].innerHTML = `<p>- 25%</p>`;
        break;
    }
    const productDiscount = document.getElementsByClassName(`product__${id}--discount`);
    productDiscount[0].classList.remove(`product__${id}--none`);
    const productAlert = document.getElementsByClassName(`coupon__applied--${id}`);
    productAlert[0].classList.remove("display__none");
    const priceDiscount = calculatePriceDiscount(Price, discount);
    const result = document.getElementById(`price__${id}--container`);
    result.innerHTML = `<p class="product__price">$ ${priceDiscount}</p>`;
}


function calculateAverage (list) {
    // const listNumbers = list;
    // let total = 0;
    
    // for(let i = 0; i < listNumbers.length; i++){
    //     total = total + listNumbers[i];
    //     console.log(total);
    // }

    const total = list.reduce(
        function (valorAccumulated = 0, newElement) {
            return valorAccumulated + newElement;
        }
    );

    
    const average = total / list.length;
    return average;
}

function calculateMedian (list) {
    const halfList1 = parseInt(list.length / 2);
    let median;
    list.sort((a, b) => a - b);
    console.log(list);
    if (esPar(list.length)) {
        const element1 = list[halfList1 - 1];
        const element2 = list[halfList1];
        
        const averageElement1and2 = calculateAverage([
            element1,
            element2,
        ]);
        
        median = averageElement1and2;
    } else {
        median= list[halfList1];
    }
    return median;
}
function calcMedianHarmonica (list){
    const totalN = list.length;
    const divideX = list.map(divide => (1 / divide));

    const totalX = divideX.reduce(
        function (valorAccumulated = 0, newElement) {
            return valorAccumulated + newElement;
        }
    );
    let medianHarmonica = totalN / totalX;
    console.log(totalX);
    return medianHarmonica;
}
function esPar(number) {
    return (number % 2 === 0);
}

function mode(arr){
    return arr.sort( (a,b) =>  arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}

function fromStringToArray (input){
    let inputArray = input.split(", ");
    let inputNumbers = inputArray.map(element => Number(element));
    return inputNumbers;
}
function calculateStatistics (Type){
    const outCome = document.getElementById("outcome__statistics");
    let input = document.getElementById("input-statistics").value;
    let inputArray = fromStringToArray(input);
    let outComeStatistics;
    switch(Type) {
        case "mode":
            outComeStatistics = mode(inputArray);
            console.log(outComeStatistics);
            outCome.innerHTML = `<p>${outComeStatistics}</p>`;
            break;
        case "median":
            outComeStatistics = calculateMedian(inputArray);
            console.log(outComeStatistics);
            outCome.innerHTML = `<p>${outComeStatistics}</p>`;
            break;
        case "average":
            outComeStatistics = calculateAverage(inputArray);
            console.log(outComeStatistics);
            outCome.innerHTML = `<p>${outComeStatistics}</p>`;
            break;
        case "harmonica":
            outComeStatistics = calcMedianHarmonica(inputArray);
            console.log(outComeStatistics);
            outCome.innerHTML = `<p>${outComeStatistics}</p>`;
            break;
        default:
            console.log("error");
            outCome.innerHTML = `<p>Error</p>`;
    }
}