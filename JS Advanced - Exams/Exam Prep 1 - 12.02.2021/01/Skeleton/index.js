function solve() {
    const modules = document.querySelector('main>:nth-child(1)>:nth-child(2)');
    const administarition = document.querySelector('main>:nth-child(2)');
    const addBtn = administarition.querySelector('button');
    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();
        let lecture = administarition.querySelector('div>div>form>div:nth-child(1)>input');
        let date = administarition.querySelector('div>div>form>div:nth-child(2)>input');
        let module = administarition.querySelector('div>div>form>div:nth-child(3)>select');

        if (module.value == 'Select Module' || lecture.value == '' || date.value == '') {
            return;
        }

        let divModule = createElement('div', undefined, 'module');
        const h3 = createElement('h3', `${module.value.toUpperCase()}-MODULE`);
        const ul = createElement('ul', );
        const li = createElement('li', undefined, 'flex');
        const h4 = createElement('h4', `${lecture.value} - ${convertDate(date.value)}`);
        const delBtn = createElement('buttonDel', 'Del', 'red');
        delBtn.addEventListener('click', onDelete);

        [h4, delBtn].map((el) => li.appendChild(el));

        const allH3 = Array.from(modules.querySelectorAll('h3'));
        if (allH3.find((x) => x.textContent == h3.textContent)) {
            let currDiv = allH3.find((x) => x.textContent == h3.textContent).parentNode;
            let ul = currDiv.querySelector('ul');
            ul.appendChild(li);

            sort(ul)
        } else {
            ul.appendChild(li);
            [h3, ul].map((el) => divModule.appendChild(el));
            modules.appendChild(divModule);
        }

        function onDelete(e) {
            const currli = e.target.parentNode
            const currul = currli.parentNode
            const module = currul.parentNode
            currli.remove();
            if (!currul.children.length)
                module.remove();
        }

    }

    function sort(ul) {
        Array.from(ul.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => ul.appendChild(li))
    }

    function convertDate(dateValue) {
        while (dateValue.includes("-")) {
            dateValue = dateValue.replace("-", "/");
        }
        dateValue = dateValue.replace("T", " - ");
        return dateValue;
    }

    function createElement(type, content, attribute) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        return el;
    }

}