function solve() {
    const [section1, section2, section3, section4] = document.querySelectorAll('section');
    const task = document.getElementById('task');
    const date = document.getElementById('date');
    const description = document.getElementById('description');

    const addBtn = section1.children[1].querySelector('button');
    addBtn.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        if (task.value == '' || date.value == '' || description.value == '') {
            return
        }

        const deleteButton = createElement('button', 'Delete', 'red');
        const startButton = createElement('button', 'Start', 'green');
        const finishBtn = createElement('button', 'Finish', 'orange');
        const divbtns = createElement('div', undefined, 'flex');
        const pDescription = createElement('p', `Description: ${description.value}`);
        const pDate = createElement('p', `Due Date: ${date.value}`);
        const h3Task = createElement('h3', task.value);
        const article = createElement('article');

        startButton.addEventListener('click', () => {
            section3.children[1].appendChild(article);
            startButton.remove();
            divbtns.appendChild(finishBtn);
        });

        deleteButton.addEventListener('click', () => {
            article.remove();
        });

        finishBtn.addEventListener('click', () => {
            section4.lastElementChild.appendChild(article);
            divbtns.remove();
        });

        [startButton, deleteButton].forEach((el) => divbtns.appendChild(el));
        [h3Task, pDescription, pDate, , divbtns].forEach((el) => article.appendChild(el));
        section2.children[1].appendChild(article);

        [task, date, description].forEach((el) => el.value = '');
    }

    function createElement(type, text, atributte) {
        const el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }
        if (atributte) {
            el.className = atributte;
        }
        return el;
    }
}