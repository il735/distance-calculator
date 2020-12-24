var elForm = document.querySelector('.site-form');
var elDistance = elForm.querySelector('.site-form__input');

var elResultFoot = document.querySelector('.result-foot');
var elResultBicycle = document.querySelector('.result-bicycle');
var elResultCar = document.querySelector('.result-car');
var elResultPlane = document.querySelector('.result-plane');
var onFoot = 3.6;
var onBicycle = 20.1;
var onCar = 70;
var onPlane = 800;

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (elDistance.value === '') {
        elResultFoot.textContent = 'Enter any number';
        elResultBicycle.textContent = 'Enter any number';
        elResultCar.textContent = 'Enter any number';
        elResultPlane.textContent = 'Enter any number';
    }
    else if (!isNaN(elDistance.value)) {
        var onFootDistance = Math.round(Number(elDistance.value / onFoot));
        elResultFoot.textContent = `${onFootDistance} hours`;

        var onBicycleDistance = Math.round(Number(elDistance.value / onBicycle));
        elResultBicycle.textContent = `${onBicycleDistance} hours`;

        var onFootDistance = Math.round(Number(elDistance.value / onCar));
        elResultCar.textContent = `${onFootDistance} hours`;

        var onFootDistance = Math.round(Number(elDistance.value / onPlane));
        elResultPlane.textContent = `${onFootDistance} hours`;
        elDistance.value = '';
    }
    else if (isNaN(elDistance)) {
        elResultFoot.textContent = 'Enter any number';
        elResultBicycle.textContent = 'Enter any number';
        elResultCar.textContent = 'Enter any number';
        elResultPlane.textContent = 'Enter any number';
    }

});
