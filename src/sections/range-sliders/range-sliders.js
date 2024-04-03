// price slider
const sliderPrice = document.getElementById('range-slider-price');

if (sliderPrice) {
    noUiSlider.create(sliderPrice, {
        start: [400, 6310],
        tooltips: [false, { to: function(value) { return Math.round(value); } }],
        connect: true,
        margin: 30,
        step: 10,
        range: {
            'min': 0,
            'max': 9999
        }
    });

    const inputMinPrice = document.getElementById('input-price-min');
	const inputMaxPrice = document.getElementById('input-price-max');
	const inputs = [inputMinPrice, inputMaxPrice];

	sliderPrice.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

    const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		sliderPrice.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// THC slider
const sliderThc = document.getElementById('range-slider-thc');

if (sliderThc) {
    noUiSlider.create(sliderThc, {
        start: 62,
        tooltips: [{ to: function(value) { return Math.round(value); } }],
        connect: 'lower',
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    });

    const inputThc = document.getElementById('input-thc');

	sliderThc.noUiSlider.on('update', function(values, handle){
		inputThc.value = Math.round(values);
	});

    inputThc.addEventListener('change', () => {
        sliderThc.noUiSlider.set(inputThc.value);
    });
}

// CBD slider
const sliderCbd = document.getElementById('range-slider-cbd');

if (sliderCbd) {
    noUiSlider.create(sliderCbd, {
        start: 62,
        tooltips: [{ to: function(value) { return Math.round(value); } }],
        connect: 'lower',
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    });

    const inputCbd = document.getElementById('input-cbd');

	sliderCbd.noUiSlider.on('update', function(values, handle){
		inputCbd.value = Math.round(values);
	});

    inputCbd.addEventListener('change', () => {
        sliderCbd.noUiSlider.set(inputCbd.value);
    });
}