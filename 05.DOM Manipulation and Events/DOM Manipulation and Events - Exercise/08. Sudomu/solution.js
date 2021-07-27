function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const output = document.getElementById('check');
    const table = document.querySelector('table');

    checkBtn.addEventListener('click', onCheck);
    clearBtn.addEventListener('click', onClear);

    function onCheck() {
        const tbody = [...document.querySelectorAll('tbody tr')];
        let isSudocoLine = [];

        tbody.forEach((tr) => {
            const number = tr.querySelectorAll('input');
            let result = 0;

            number.forEach((num) => {
                let number = Number(num.value);
                if (number >= 1 && number <= 3) {
                    result += number;
                };
            });
            if (result === 6) {
                isSudocoLine.push(result);
            }
        });


        if (isSudocoLine.length === 3) {
            table.style.border = '2px solid green';
            output.style.color = 'green';
            output.textContent = `You solve it! Congratulations!`;
        } else {
            table.style.border = '2px solid red';
            output.style.color = 'red';
            output.firstChild.textContent = `NOP! You are not done yet...`;
        }
    };

    function onClear() {
        const tbody = [...document.querySelectorAll('tbody tr')];

        tbody.forEach((tr) => {
            const inputs = tr.querySelectorAll('input');

            inputs.forEach((input) => {
                input.value = '';
            });

        });
        output.firstChild.textContent = '';
        table.style.border = 'none';
    };
}