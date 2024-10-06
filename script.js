// function generates a random number 1-6
function rollSingleDie() {
    return Math.floor(Math.random() * 6 + 1);
}

function rollDice() {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const die3 = document.getElementById("die3");
    const die4 = document.getElementById("die4");
    const die5 = document.getElementById("die5");
    const dieSum = document.getElementById("sum");
    
    // Roll results for each die
    const result1 = rollSingleDie();
    const result2 = rollSingleDie();
    const result3 = rollSingleDie();
    const result4 = rollSingleDie();
    const result5 = rollSingleDie();

    // Calc sum of dice
    const sum = result1 + result2 + result3 + result4 + result5;

    // update innerHTML to display result corresponding Icon
    die1.innerHTML = result1;
    die2.innerHTML = result2;
    die3.innerHTML = result3;
    die4.innerHTML = result4;
    die5.innerHTML = result5;
    dieSum.innerHTML = "Sum: " + sum;

    // add animation
    die1.classList.add("roll");
    die2.classList.add("roll");
    die3.classList.add("roll");
    die4.classList.add("roll");
    die5.classList.add("roll");

    // remove animation after .5s
    setTimeout(() => {
        die1.classList.remove("roll");
        die2.classList.remove("roll");
        die3.classList.remove("roll");
        die4.classList.remove("roll");
        die5.classList.remove("roll");
    }, 500)

    // Check if all dice have same result
    if (result1 === result2 && result2 === result3 && 
        result3 === result4 && result4 === result5) {
        trigImmaculateRollEffect();
    }
}

/* Triggers the effect created for an immaculate roll (flashing background
   for 5 seconds and a popup message)*/
function trigImmaculateRollEffect() {
    document.body.classList.add("flash-bg");
    setTimeout(() => {
        document.body.classList.remove("flash-bg");
    }, 5000);

    setTimeout(() => {
        alert("Immaculate Roll!");
    }, 1000);
}

// Function to check and show test tag in test environment
function showTestTag() {
    const showTag = (typeof SHOW_TEST_TAG !== 'undefined' && SHOW_TEST_TAG === 'true');

    if (showTag) {
        const testTag = document.getElementById("test-tag");
        if (testTag) {
            testTag.style.display = "block";
        }
    }
}

// When page loads
window.onload = showTestTag