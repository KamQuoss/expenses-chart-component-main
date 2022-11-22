import data from './data.json' assert {type: 'json'};

let wrapper = document.querySelector('.card__chart');
let currentDay = [6,0,1,2,3,4,5][new Date().getDay()];

data.map((elem, index) => {
    let bar = document.createElement('div')
    bar.classList.add(['chart__bar']);
    if (index === currentDay) bar.classList.add('chart__bar--current');
    bar.setAttribute('value', elem.amount);
    bar.style.height = `${elem.amount * 2.85}px`;

    let label = document.createElement('div');
    label.innerHTML = elem.day;
    label.classList.add('chart__label')

    let item = document.createElement('div')
    item.classList.add('chart__item')

    item.append(bar, label)
    wrapper.append(item)
})