//Get elements from the DOM

const navigation = document.getElementById('navigation');
const menu = document.getElementById('.menu');

//PX offset when the navigation activates

const offset = 50;

//Add scroll event listener to the page
window.addEventListener("scroll", () => {
    //If page is scrolled 50px or more
    if (pageYOffset > offset) {
        //Activate navigation
        navigation.classList.add('navigation-active')
    } else {
        //Deactivate navigation
        navigation.classList.remove('navigation-active');
    }
});