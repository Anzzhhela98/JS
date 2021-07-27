function dart() {
    const dartBoard = document.querySelector('#playBoard');
    [firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer] = dartBoard.querySelectorAll('div');
    dartBoard.addEventListener('click', onClick);

    const scoreBoard = Array.from(document.querySelectorAll('tbody>tr>td:nth-child(2)'));
    let [firstScore, secondScore, thirdScore, fourthScore, fifthScore, sixtScore, ] = scoreBoard
        .map((el) => Number(el.textContent.slice(0, -7)));

    let homePoint = document.querySelector('#Home>p:nth-child(1)');
    let awayPoint = document.querySelector('#Away>p:nth-child(1)');
    let home = document.querySelector('#Home>p:nth-child(2)');
    let away = document.querySelector('#Away>p:nth-child(2)');

    let [turnOnHome, nextIsAway] = document.querySelectorAll('#turns>p');
    let startPlayer = 'home';

    function onClick(e) {

        if (e.target == firstLayer) {
            updatePoints(firstScore);
        } else if (e.target == secondLayer) {
            updatePoints(secondScore);
        } else if (e.target == thirdLayer) {
            updatePoints(thirdScore);
        } else if (e.target == fourthLayer) {
            updatePoints(fourthScore);
        } else if (e.target == fifthLayer) {
            updatePoints(fifthScore)
        } else if (e.target == sixthLayer) {
            updatePoints(sixtScore)
        }

        changeTurnsOnScreen(startPlayer);
        if (!chekPoint(Number(homePoint.textContent), Number(awayPoint.textContent))) {
            dartBoard.removeEventListener('click', onClick, false);
        }
    }

    function updatePoints(score) {
        if (startPlayer == 'home') {
            homePoint.textContent = score + Number(homePoint.textContent);
            startPlayer = 'away'
        } else {
            awayPoint.textContent = score + Number(awayPoint.textContent);
            startPlayer = 'home'
        }
    }

    function changeTurnsOnScreen(startPlayer) {
        if (startPlayer == 'away') {
            turnOnHome.textContent = 'Turn on Away';
            nextIsAway.textContent = 'Next is Home';
        } else {
            turnOnHome.textContent = 'Turn on Home';
            nextIsAway.textContent = 'Next is Away';
        }
    }

    function chekPoint(homePoints, awayPoints, ) {
        if (homePoints >= 100) {
            home.style.background = 'green'
            away.style.background = 'red'
            return false
        }

        if (awayPoints >= 100) {
            away.style.background = 'green'
            home.style.background = 'red'
            return false
        }
        return true
    }
}