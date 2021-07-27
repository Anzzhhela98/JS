function addDestination() {
    const tbody = document.getElementById('destinationsList');
    const [input, summaryBox] = document.querySelectorAll('div>div');
    let [city, country] = Array.from(input.querySelectorAll('input'));
    let season = input.querySelector('#seasons').value;

    if (city.value == '' || country.value == '') {
        return
    }

    const tr = createElement('tr');
    const tdCountry = createElement('td', `${city.value}, ${country.value}`);
    const tdSeason = createElement('td', season.charAt(0).toUpperCase() + season.slice(1));
    [tdCountry, tdSeason].forEach((el) => tr.appendChild(el));
    tbody.appendChild(tr);

    //SELECT REFERENCE AND UPDATE VALUE
    [summer, autumn, winter, spring] = Array.from(summaryBox.querySelectorAll('input'));
    const storeSeason = {
        summer: summer,
        autumn: autumn,
        winter: winter,
        spring: spring
    }
    storeSeason[season].value = Number(storeSeason[season].value) + 1;

    city.value = '';
    country.value = '';

    function createElement(type, text) {
        const el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }
        return el;
    }
}