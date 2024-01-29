document.addEventListener("DOMContentLoaded", function () {
    let score = 0,
        misses = 0,
        remainingMoles = 10;

    const clickHandler = (event) => {
        const clickedHole = event.target;
        if (clickedHole.classList.contains('hole_has-mole')) {
            score++;
            remainingMoles--;

            document.getElementById('dead').textContent = score;
            if (remainingMoles === 0) {
                endGame(true);
            }
        } else {
            misses++;

            document.getElementById('lost').textContent = misses;
            if (misses >= 5) {
                endGame(false);
            }
        }

        next();
    };

    const endGame = (isWinner) => {
        if (isWinner) {
            alert('Игра окончена. Вы победили!');
        } else {
            alert('Игра окончена. Вы проиграли.');
        }

        score = 0;
        misses = 0;
        remainingMoles = 10;
        document.getElementById('dead').textContent = score;
        document.getElementById('lost').textContent = misses;

        next();
    };

    const getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index =>
            getHole(index).classList.remove('hole_has-mole'),
        activateHole = index =>
            getHole(index).classList.add('hole_has-mole');

    const next = () => {
        const activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);

        setTimeout(() => {
            deactivateHole(activeHole);
        }, 800);
    };

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', clickHandler);
    }

    next();
});
