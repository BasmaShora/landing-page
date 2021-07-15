/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/*
    store all sections in variable to use their length in the loop
    to build the nav dynamical,(automatically build list item for each section).
*/
const sections = document.getElementsByTagName('section');
// to append the new list items in the menu
const theList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/*
    for loop to build the nav
    to create list item and link for each section automatically.
*/

const menu = function theNavBar () {
    for (let n = 1; n <= sections.length; n++){
        let section = document.getElementById('section' + n);
        // create list item for  each section
        const newListItem = document.createElement('li');
        // create link for each section
        const sectionsLinks = document.createElement('a');
        // add text to links
        let sectionsLinksText = document.createTextNode('section ' + n);
        sectionsLinks.appendChild(sectionsLinksText);
        // add the links to sections by section ID to active the active link
        // ex : sectionslinks.href = '#section1' .. #section2 .. etc ..
        // ( the n var keep increase from 1 till sections ends..to add the right section ID automatically )
        sectionsLinks.href = '#section' + n;
        // set class for the style
        sectionsLinks.setAttribute('class','menu__link');
        // set ID to links ( to use it later to relate between the anchors and their sections to active the link)
        sectionsLinks.setAttribute('id', 'link' + n);
        // scroll to section on link click
        sectionsLinks.addEventListener('click', function (e) {
            // to prevent the link from following the URL and direct scroll
            e.preventDefault();
            // scroll smoothly to appropriate section
            section.scrollIntoView({behavior:'smooth'})
        });
        newListItem.appendChild(sectionsLinks);
        theList.appendChild(newListItem);
    }
}
menu ();

// Add class 'active' to section when near top of viewport

// check if the section in viewport or not
// and set the section and it's own link in viewport as active

const theActiveSection = function activeSection () {
    for (let s = 1; s <= sections.length; s++) {
        // get section by ID to detect each section position
        let section = document.getElementById('section' + s);
        // get section ID attribute to compare it's own value with their anchor href value, if they equal or not to active the link
        const secId = section.getAttribute('id');
        let link = document.getElementById('link' + s);
        // get link Href attribute .. to relate the active section with their link
        const linkHref = link.getAttribute('href');
        // get section position
        const getBounding = section.getBoundingClientRect();
        // get the top of the section
        const secTop = getBounding.top;
        // check user device screen height
        const userScreen = screen.height;
        // if users device screen is bigger than 600 ( for ex ; in case they use pc )
        if (userScreen >= 600) {
            /*
                * so this will be the viewport for pcs and what a like in screen's height
                    the section top will be (from -300 to 280).
                * ( from -1 to -300 ) to highlight the whole section till we move to the next one
                    and when users scroll up, the section top will be near the veiwport from the top
                    just to  detect the top of the section to highlight it while users scroll up.
                * ( from 0 to 280 ) so when the user scroll down the section top would be near to viewport from the bottom
                    to highlight the next section that the user moved to.
            */
           // if the section top in this range (-300 : 280) then set section as active, to highlight it
           if (secTop >= -300 && secTop < 280) {
               // set your active class to active the section which in viewport
               section.setAttribute('class', 'your-active-class');
               // if section id value = link href value then add ( active_link ) to link class list to highlight the active link in the menu
               // (because href referring to section id 
               if (secId.value === linkHref.value) {
                   // add active_link to class list
                   link.classList.add('active_link'); 
               }
           }else {
               /*
                    if the section top not in viewport
                    remove the active class by replacing class name (your-active-class) with '' empty value
               */
              section.className ='';
              // if section id = link href and the section out of viewport then remove the active class (active_link) from the class list
              if (secId.value === linkHref.value) {
                  link.classList.remove('active_link')
              }
           }
           // if user device screen height less han 600 ( ex : mobile , tablet)
        }else if (userScreen < 600) {
            // this would be the viewport
            // if the section top in range (-530 to 250) then the section in the viewport
            if (secTop >= -530 && secTop <= 250) {
                section.setAttribute('class', 'your-active-class');
                // if section id same as linkhref then active the section's link
                if (secId.value === linkHref.value) {
                    link.classList.add('active_link');
                }
            }else {
                section.className = '';
                if (secId.value === linkHref.value) {  
                    link.classList.remove('active_link');
                }
            }
        }

    }
}

theActiveSection();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active
// add scroll event to execute the function expression ( theActiveSection) while scrolling
document.addEventListener('scroll', theActiveSection);

