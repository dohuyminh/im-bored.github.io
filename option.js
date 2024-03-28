let i = 0;

function she_said_no() {
    
    const why = [
        "No?", 
        "Why?", 
        "Why did you click that?", 
        "You can press the other button you know", 
        "I knew it", 
        "Please",
        "There will be pastries", 
        "That does not convince you?", 
        "Uh...", 
        "I don't know...", 
        "Uh... how about...", 
        "Cheesecake! The one on the image!", 
        "That doesn't work either?!", 
        "Hmmmmmmmm", 
        "Gotta bribe you with smth", 
        "Hmmmmmmmmmmmmmm", 
        "Hey can you not?", 
        "Just give me time to think", 
        "Hmmmmmmmmmmmmmmmmmmmm",
        "Hey!",
        "Why?", 
        "No Stop", 
        "Don't",
        "Something bad is about to happen",
        "Why do you keep on doing this?",
        "Just pick the other option, it is way easier",
        "Stop",
        "Last chance",
        "I warned you", 
        ">:ppp"
    ];

    let anchor = document.getElementById("wrong-answer");

    // if she says no, just change the text in the box
    if (i < why.length) {
        anchor.querySelector("#no-button").textContent = why[i++];
        anchor.href = "#";
    } 
    // illusion of free will; resets to default and lead her to the link 
    else {
        anchor.href = "https://youtu.be/Gnm3hIcjiCQ?si=zxBu_3bLfUJMQCE9";
        anchor.querySelector("#no-button").textContent = "No";
        i = 0;
    }
}

// yippee!!!
function she_said_yes() {
    document.getElementById("realistic-cheese").setAttribute("src", "imgs/jumping-gatito.gif");
    document.getElementById("realistic-cheese").setAttribute("title", "yes");
    let wrong_one = document.getElementById("wrong-answer");
    let yayyy = document.getElementById("the-only-right-answer");

    wrong_one.setAttribute("onclick", "#");
    wrong_one.querySelector("#no-button").textContent = "This button no longer works (｀・ω・´)";
    wrong_one.querySelector("#no-button").title = "we dont need this anymore"

    yayyy.setAttribute("onclick", "#");
    yayyy.querySelector("#yes-button").title = ":ppp";
    yayyy.querySelector("#yes-button").textContent = "Yiipeee";

    document.getElementById("quick-question").textContent = "me right now:"
    document.getElementById("hmmmm").textContent = "You finally made the right choice (you get to pick the date tho) (This is now a pinky promise, you can't break it now)"
}