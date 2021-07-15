# **Landing Page Project**

## **Description :**
* It's a multi-section landing page, the navigation menu is dynamically updating based on the amount of content that is added to the page,and when user clicks on a navigation item, the item scroll smoothly to the appropriate section, and while user scrolling through the page the section (and their navigation item) in viewport get highlighted .

## **Technologies :**
* HTML5.
* CSS written based on [SMACSS architecture](http://smacss.com/).
* JS ES2015/ES6.

## **Features :**
* Responsive.
* The navigation is built dynamically as an unordered list.
* Section active state : The viewed section while scrolling is set as active and be highlighted (have a special style).
* Navigation items active state when their section in viewport.
* when clicking an item from the navigation menu, the link scroll smoothly to the appropriate section.

## **Code Description :**
* **This project built on two function expressions :**
1. **First is " menu() " function expression :**
* This function expression contains for loop.
* The for loop based on the sections amount.
* Each iteration creates new list item and new anchor adding it to the nav bar.
* So it builds the navigation items dynamically.
* And each navigation item scroll smoothly to the appropriate section by scrollIntoView method.
2. **Second is " theActiveSection ()" function expression :**
* Contains one function and one loop. 
* Made to detect each section position to the viewport.
* And set the viewed section as active and their navigation item.
* And remove the active state when the section is out of the viewport.
* Check if the section in the viewport or not By getBoundingClientRect().top method.
* to check if the section top is near to viewport or not to set the active state or remove it.
* also the viewport depend on the user device screen, so the section top range changes whenever the user screen height changes.
* To be reponsive there is to ranges : for big screens (-300 : 280) for small screens (-530 : 250).
* check on user height screen by screen.height property.
* if user screen height > 600 px then it's a big screen , user screen height < 600 then it's small screen.
* it Adds Active State to navigation item by compare the section ID and the navigation item link Href values if they equala to each other then it's the appropriate section and nav item so they set as active (if the section in viewport).
* and this function expression have scroll event to execute it while users scrolling.



## **Credits :**
* Udacity Landing page project walkthrough webinar : helped in undrstanding the getBoundingClientRect().
* [getBoundingClientRect() method](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp)
* [Value property](https://www.w3schools.com/jsref/prop_attr_value.asp)
* [window.screen](https://www.w3schools.com/js/js_window_screen.asp)
* [scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

###  **Author's Name : Basma Shora**
**Note: This is my first project at Udacity Front End Web Development Professional Nanodegree Program, and i used the udacity strater code**
 # landing-page
