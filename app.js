const arrows = document.querySelectorAll(".arrow");
const shoeLists = document.querySelectorAll(".shoe-list");

arrows.forEach((arrow, i) => {
    // when we decrease the screen size, we only want it to display n amount of stuffs that match with the available display of the screen, 270 is our picture's height
    const itemNumber = shoeLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - ( 5 + clickCounter ) + (6 - ratio) >= 0){    
        shoeLists[i].style.transform = `translateX(${
        shoeLists[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;
}else{
    shoeLists[i].style.transform = "translateX(0)";
    clickCounter = 0;
}

});

});

const ball = document.querySelector(".toggle-ball");
// we collect every item that we need to change the color and add them to a list
const items = document.querySelectorAll(
    ".container,.owner-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
// when the ball is being clicked, we will add the "active mode to those class by classList.toggle"
ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    // apply for the ball too
    ball.classList.toggle("active");
    });


                 // at first we hit the arrow but nothing move, so we have to find the initial position of each shoeLists
        // 0 is for the first element
        // x.value: the amount of 0

        // the problem about -270, when we scroll, there will be a small part of the previous picture still on the screen that
        // solution is to change -270 to -300

        // basically, we find the maximum item that a screen can hold, in this case is 5. We do it by shoeLists[i].querySelectorAll("img").length
        // we count how many time we click the next button.
        // if there is still some item left, we mean the difference between the total item itemNumber - ( 5 + clickCounter ) > 0, website will keep rolling
        // if there is no item left, we set it back to the original location

        // but when we click the button again, it will not work because
        // => solution is to reset the clickCounter back to 0