function encodeAndDecodeMessages() {
    //Select BTN
    const [encode, decode] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll('textarea');

    //Add EventListener
    encode.addEventListener('click', onEncode);
    decode.addEventListener('click', onDencode);

    function onEncode() {
        const encode = input.value
            .split('')
            .map((ch) => ch.charCodeAt())
            .map((ch) => String.fromCharCode(ch + 1))
            .join('');

        input.value = '';
        output.value = encode;
    };

    function onDencode() {
        const decode = output.value
            .split('')
            .map((ch) => ch.charCodeAt())
            .map((ch) => String.fromCharCode(ch - 1))
            .join('');
        output.value = decode;
    };
}