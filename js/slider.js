(function move() {
    const slider = [...document.querySelectorAll('.slider-body')];
    const arrowNext = document.querySelector('#after');
    const arrowPrev = document.querySelector('#before');

    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowPrev.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider-body--show').dataset.id);

        value = currentElement;
        value += change;

        if (value == 0 || value == slider.length + 1) {
            value = value === 0 ? slider.length : 1;
        }

        slider[currentElement - 1].classList.toggle('slider-body--show');
        slider[value - 1].classList.toggle('slider-body--show');
    }
})()