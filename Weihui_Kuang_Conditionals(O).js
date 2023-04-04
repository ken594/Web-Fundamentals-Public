// Coding challenge: Conditionals (Optionals)

// MVP
// As a diligent student, I want to reward myself if I finish my homework, and based on the time of day:

// I want a latte if it's before 10 am
// I want a hot chocolate it's between 10 am and 4 pm
// I want ice cream between 4 pm - 10 pm.
// If it's after 10 pm, I don't want anything other than sleep!

// Feature 1
// Building off the MVP, if I'm up for ice cream, I want strawberry - but only if it's Wednesday. Otherwise, I want vanilla.

// Feature 2 (hard) - Optional
// Building off Feature 1, I want to adjust the current conditions 
// and add a new option so that if the time is between 3 pm - 6 pm,
// I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd.

// Feature 3 (super hard) - Optional
// Building off Feature 2, I want my options for the 3 pm - 6 pm slot to be a random selection: 
// if the time is even, I want my selections to be ice cream, cookies, or candy. 
// If the time is odd, I want my selections to be hot chocolate, tea, or cake.

const am = "am", pm = "pm";
var time = 4, isAmOrPm = pm;
// var day = "Monday";
var day = "Wednesday";

if (time < 10 && isAmOrPm == am) {
    console.log("I want a latte");
} else if ((time >= 10 && isAmOrPm == am) || (time < 3 && isAmOrPm == pm)) {
    console.log("I want a hot chocolate");
} else if (time >= 3 && time <= 6 && isAmOrPm == pm) { 
    /* Feature 2
    if (time % 2 == 0) {
        getIceCream(day);
    } else {
        console.log("I want a hot chocolate");
    } */

    // Feature 3
    if (time % 2 == 0) {
        evenSelect(Math.floor(Math.random() * 3), day);
    } else {
        oddSelect(Math.floor(Math.random() * 3));
    }

} else if (time > 6 && time < 10 && isAmOrPm == pm) {
    // console.log("I want ice cream");
    getIceCream(day);
} else if (time >= 10 && isAmOrPm == pm) {
    console.log("I don't want anything other than sleep!");
}


// Feature 1
function getIceCream(day) {
    if (day == "Wednesday") {
        console.log("I want starwberry ice cream");
    } else {
        console.log("I want vanilla ice cream");
    }
}

function evenSelect(num, day) {
    // if (num == 0) {
    //     console.log("I want my selections to be ice cream");
    //     getIceCream(day);
    // } else if (num == 1) {
    //     console.log("I want my selections to be cookies");
    // } else {
    //     console.log("I want my selections to be candy");
    // }

    var evenSelection = ["ice cream", "cookies", "candy"];
    console.log("I want my selections to be " + evenSelection[num]);
    if (num == 0) {
        getIceCream(day);
    }
}

function oddSelect(num) {
    // if (num == 0) {
    //     console.log("I want my selections to be hot chocolate");
    // } else if (num == 1) {
    //     console.log("I want my selections to be tea");
    // } else {
    //     console.log("I want my selections to be cake");
    // }

    var oddSelection = ["hot chocolate", "tea", "cake"];
    console.log("I want my selctions to be " + oddSelection[num]);
}