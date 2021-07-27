window.addEventListener('load', solution);

function solution() {
    const divBlock = document.querySelector('#block');
    console.log(divBlock)
    const ulInfoPrevie = document.querySelector('#infoPreview');
    const editBtn = document.querySelector('#editBTN');
    const continueBtn = document.querySelector('#continueBTN');
    const submitBtn = document.querySelector('#submitBTN');
    submitBtn.addEventListener('click', onSubmitBtn);

    function onSubmitBtn(e) {
        let [name, email, phone, address, postCode] = Array.from(
                document.querySelector('#form').children)
            .map((el) => (el.children[1]));
        //saveValue
        let allsavedValues = [name, email, phone, address, postCode].map(el => el.value);

        if (name.value == '' || email.value == '') {
            return
        }

        const fullNameLi = createElement('li', `Full Name: ${name.value}`);
        const emailLi = createElement('li', `Email: ${email.value}`);
        const phoneLi = createElement('li', `Phone Number: ${phone.value}`);
        const addressLi = createElement('li', `Address: ${address.value}`);
        const postCodeLi = createElement('li', `Postal Code: ${postCode.value}`);

        [fullNameLi, emailLi, phoneLi, addressLi, postCodeLi]
        .forEach((el) => ulInfoPrevie.appendChild(el));

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
        [name, email, phone, address, postCode].map((el) => el.value = '');

        continueBtn.addEventListener('click', onContinue);
        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            let count = 0;
            [name, email, phone, address, postCode].map((el) => {
                el.value = allsavedValues[count];
                count++;
            });

            if (ulInfoPrevie) {
                while (ulInfoPrevie.firstChild) {
                    ulInfoPrevie.removeChild(ulInfoPrevie.firstChild)
                }
            };

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;

            console.log('yes')
        }

        function onContinue() {
            const h3 = createElement('h3', "Thank you for your reservation!");
            while (divBlock.firstChild) {
                divBlock.removeChild(divBlock.firstChild)
            }
            divBlock.appendChild(h3);
        }
    }

    function createElement(type, content, attribute, ) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('id', attribute);
        }
        if (content) {
            el.textContent = content;
        }
        return el;
    }
}