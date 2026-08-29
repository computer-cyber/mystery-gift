/* =========================================
   PRIVATE PASSWORD
========================================= */

const passwordScreen =
    document.getElementById("password-screen");

const surpriseScreen =
    document.getElementById("surprise-screen");

const passwordInput =
    document.getElementById("password-input");

const passwordButton =
    document.getElementById("password-btn");

const passwordError =
    document.getElementById("password-error");


const PRIVATE_PASSWORD = "brother2026";


function unlockWebsite() {

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === PRIVATE_PASSWORD) {

        passwordScreen.style.display = "none";

        surpriseScreen.style.display = "block";

    } else {

        passwordError.textContent =
            "❌ Wrong password. Try again!";

        passwordInput.value = "";

    }

}


passwordButton.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockWebsite();

        }

    }
);
const openButton = document.getElementById("open-btn");
const container = document.querySelector(".container");


/* =========================================
   START SURPRISE
========================================= */

openButton.addEventListener("click", function () {

    const gift = document.querySelector(".gift");

    gift.classList.add("opening");

    openButton.disabled = true;

    openButton.textContent = "OPENING... 🎁";

    setTimeout(() => {

        showSecretCode();

    }, 1200);

});


/* =========================================
   SECRET CODE
========================================= */

function showSecretCode() {

    container.innerHTML = `

        <p class="small-text">
            🔐 SECRET LEVEL 01
        </p>

        <h1>
            Locked! 🔒
        </h1>

        <div class="lock-icon">
            🔐
        </div>

        <p class="message">
            The next surprise is protected.
        </p>

        <p class="question">
            Find the secret code to continue...
        </p>

        <div class="clue">

            💡 CLUE

            <br><br>

            "The answer is something you use every day."

        </div>

        <input
            type="text"
            id="code-input"
            placeholder="Enter secret code"
            autocomplete="off"
        >

        <button id="unlock-btn">
            UNLOCK 🔓
        </button>

        <p id="error-message"></p>

    `;


    document
        .getElementById("unlock-btn")
        .addEventListener("click", checkCode);


    document
        .getElementById("code-input")
        .addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                checkCode();

            }

        });

}


/* =========================================
   CHECK SECRET CODE
========================================= */

function checkCode() {

    const input = document
        .getElementById("code-input")
        .value
        .trim()
        .toLowerCase();


    const errorMessage =
        document.getElementById("error-message");


    const secretCode = "brother";


    if (input === secretCode) {

        errorMessage.textContent =
            "✅ ACCESS GRANTED!";


        setTimeout(() => {

            showUnlockedScreen();

        }, 800);


    } else {

        errorMessage.textContent =
            "❌ Wrong code! Think harder... 👀";

    }

}


/* =========================================
   SECRET CODE UNLOCKED
========================================= */

function showUnlockedScreen() {

    container.innerHTML = `

        <p class="small-text">
            ✅ ACCESS GRANTED
        </p>

        <h1>
            You Did It! 🎉
        </h1>

        <div class="gift opened">
            🎁
        </div>

        <p class="message">
            Not bad... but that was only Level 01.
        </p>

        <p class="question">
            Your next mystery is waiting. 👀
        </p>

        <button id="continue-btn">
            NEXT MYSTERY →
        </button>

    `;


    document
        .getElementById("continue-btn")
        .addEventListener("click", showNextMystery);

}


/* =========================================
   MYSTERY GIFT #1
========================================= */

function showNextMystery() {

    container.innerHTML = `

        <p class="small-text">
            🎁 MYSTERY GIFT #1
        </p>

        <h1>
            Choose Your Gift
        </h1>

        <p class="message">
            One of these boxes contains your first surprise...
        </p>

        <div class="gift-boxes">

            <button class="mystery-box" data-gift="1">
                🎁
                <span>?</span>
            </button>

            <button class="mystery-box" data-gift="2">
                🎁
                <span>?</span>
            </button>

            <button class="mystery-box" data-gift="3">
                🎁
                <span>?</span>
            </button>

        </div>

        <p id="gift-hint">
            👀 Choose wisely...
        </p>

    `;


    const boxes =
        document.querySelectorAll(".mystery-box");


    boxes.forEach(box => {

        box.addEventListener("click", function () {

            const giftNumber =
                this.dataset.gift;

            revealGift(giftNumber);

        });

    });

}


/* =========================================
   REVEAL GIFT #1
========================================= */

function revealGift(giftNumber) {

    container.innerHTML = `

        <p class="small-text">
            ✨ MYSTERY UNLOCKED ✨
        </p>

        <h1>
            YOU FOUND IT! 🎉
        </h1>

        <div class="revealed-gift">
            🎁
        </div>

        <div class="gift-message">

            <h2>
                😂 BROTHER DETECTED
            </h2>

            <p>
                Congratulations!
                You have successfully opened
                your first mystery gift.
            </p>

            <p>
                Unfortunately, this gift contains...
            </p>

            <strong>
                ABSOLUTELY NOTHING. 😭
            </strong>

            <p>
                Just kidding! 😂
            </p>

        </div>

        <button id="next-gift-btn">
            NEXT MYSTERY →
        </button>

    `;


    document
        .getElementById("next-gift-btn")
        .addEventListener("click", showSecondMystery);

}


/* =========================================
   HIDDEN OBJECT MYSTERY
========================================= */

function showSecondMystery() {

    container.innerHTML = `

        <p class="small-text">
            🕵️ MYSTERY #2
        </p>

        <h1>
            Find The Secret 👀
        </h1>

        <p class="message">
            Something is hidden on this screen.
        </p>

        <p class="question">
            Find the 🔎 before time runs out!
        </p>

        <div class="search-area">

            <div class="fake-item item-1">
                🎮
            </div>

            <div class="fake-item item-2">
                🍕
            </div>

            <div class="fake-item item-3">
                😂
            </div>

            <div class="fake-item item-4">
                🎧
            </div>

            <div class="fake-item item-5">
                ⭐
            </div>

            <button
                id="secret-button"
                aria-label="Secret button"
            >
                🔎
            </button>

        </div>

        <p id="search-status">
            🔍 Searching...
        </p>

    `;


    document
        .getElementById("secret-button")
        .addEventListener("click", revealHiddenGift);

}


/* =========================================
   HIDDEN OBJECT FOUND
========================================= */

function revealHiddenGift() {

    container.innerHTML = `

        <p class="small-text">
            🔓 SECRET FOUND
        </p>

        <h1>
            Nice! 😎
        </h1>

        <div class="revealed-gift">
            🕵️
        </div>

        <div class="gift-message">

            <h2>
                Detective Level: PRO 🏆
            </h2>

            <p>
                You actually found the hidden button!
            </p>

            <p>
                Most people would have given up. 😂
            </p>

            <strong>
                MYSTERY #2 COMPLETE ✅
            </strong>

        </div>

        <button id="memory-btn">
            OPEN THE NEXT GIFT 📸
        </button>

    `;


    document
        .getElementById("memory-btn")
        .addEventListener("click", showMemoryGift);

}


/* =========================================
   MEMORY LOCKED
========================================= */

function showMemoryGift() {

    container.innerHTML = `

        <p class="small-text">
            📸 MYSTERY #3
        </p>

        <h1>
            A Memory Is Waiting...
        </h1>

        <div class="memory-secret">
            🔒
        </div>

        <p class="message">
            A memory has been hidden here...
        </p>

        <p class="question">
            Are you ready to see it?
        </p>

        <button id="memory-open-btn">
            REVEAL MEMORY ✨
        </button>

    `;


    document
        .getElementById("memory-open-btn")
        .addEventListener("click", revealMemory);

}


/* =========================================
   VIDEO MEMORY
========================================= */

function revealMemory() {

    container.innerHTML = `

        <p class="small-text">
            ❤️ MEMORY UNLOCKED
        </p>

        <h1>
            A Memory For You 🎬
        </h1>

        <div class="video-frame">

            <video
                controls
                playsinline
                preload="metadata"
            >

                <source
                    src="videos/brother-memory.mp4"
                    type="video/mp4"
                >

                Your browser does not support video playback.

            </video>

        </div>

        <div class="gift-message">

            <p>
                Some memories are too good
                to stay hidden. ❤️
            </p>

            <p>
                This one is just for you. 😄
            </p>

        </div>

        <button id="game-btn">
            NEXT CHALLENGE 🎮
        </button>

    `;


    document
        .getElementById("game-btn")
        .addEventListener("click", showGame);

}


/* =========================================
   MINI GAME
========================================= */

function showGame() {

    container.innerHTML = `

        <p class="small-text">
            🎮 MYSTERY #4
        </p>

        <h1>
            Catch The Star ⭐
        </h1>

        <p class="message">
            Catch the star 5 times
            to unlock your next surprise!
        </p>

        <div class="game-info">
            ⭐ Score:
            <span id="score">0</span>
            / 5
        </div>

        <div id="game-area">

            <button id="star">
                ⭐
            </button>

        </div>

        <p id="game-status">
            Ready? GO! 🚀
        </p>

    `;


    let score = 0;


    const star =
        document.getElementById("star");


    const scoreDisplay =
        document.getElementById("score");


    const gameStatus =
        document.getElementById("game-status");


    const gameArea =
        document.getElementById("game-area");


    function moveStar() {

        const maxX =
            gameArea.clientWidth - 60;


        const maxY =
            gameArea.clientHeight - 60;


        const x =
            Math.random() * maxX;


        const y =
            Math.random() * maxY;


        star.style.left = `${x}px`;

        star.style.top = `${y}px`;

    }


    star.addEventListener("click", function () {

        score++;

        scoreDisplay.textContent = score;


        if (score < 5) {

            gameStatus.textContent =
                `🔥 Nice! ${5 - score} more to go!`;

            moveStar();

        } else {

            gameStatus.textContent =
                "🎉 YOU WON!";

            star.style.display = "none";


            setTimeout(() => {

                showBonusMystery();

            }, 1000);

        }

    });


    moveStar();

}


/* =========================================
   BONUS LEVEL
========================================= */

function showBonusMystery() {

    container.innerHTML = `

        <p class="small-text">
            🔓 BONUS LEVEL
        </p>

        <h1>
            You Unlocked It! 🎉
        </h1>

        <div class="revealed-gift">
            🏆
        </div>

        <div class="gift-message">

            <h2>
                Official Brother Status
            </h2>

            <p>
                You have successfully completed
                every challenge so far.
            </p>

            <p>
                But there's still one final
                surprise waiting for you... 👀
            </p>

        </div>

        <button id="final-btn">
            OPEN FINAL GIFT ❤️
        </button>

    `;


    document
        .getElementById("final-btn")
        .addEventListener("click", showFinalGift);

}


/* =========================================
   FINAL GIFT
========================================= */

function showFinalGift() {

    container.innerHTML = `

        <p class="small-text">
            ❤️ FINAL GIFT
        </p>

        <h1>
            One Last Thing...
        </h1>

        <div class="final-heart">
            ❤️
        </div>

        <div class="gift-message">

            <p>
                All those puzzles and games
                were just an excuse...
            </p>

            <p>
                I wanted to make something
                especially for you.
            </p>

            <strong>
                You're not getting rid of me
                that easily. 😂❤️
            </strong>

        </div>

        <button id="restart-btn">
            🔄 EXPERIENCE AGAIN
        </button>

    `;


    document
        .getElementById("restart-btn")
        .addEventListener("click", function () {

            location.reload();

        });

}