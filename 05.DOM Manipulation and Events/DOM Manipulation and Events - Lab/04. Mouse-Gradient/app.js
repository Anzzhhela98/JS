function attachGradientEvents() {
    const result = document.getElementById('result');
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    function onMove(event) {
        const offsetX = event.offsetX;

        const percentage = Math.ceil((offsetX / event.target.clientWidth) * 100);
        result.textContent = `${percentage}%`;

    }
}