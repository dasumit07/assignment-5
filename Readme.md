 Q1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 ANS. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

These methods are used to select HTML elements using JavaScript, but they work differently:

getElementById("id"): Selects a single element by its id. Always returns one element.

getElementsByClassName("class"): Selects all elements with the given class name. Returns an array-like collection (HTMLCollection).

querySelector("selector"): Returns the first element that matches a CSS selector. Can be an id, class, tag, etc.

querySelectorAll("selector"): Returns all matching elements as a NodeList. we can loop through it like an array.


Q2.How do you create and insert a new element into the DOM?

ANS. To add a new element using JavaScript:

First, create the element using document.createElement().

Add content or attributes.

Insert it into the page using methods like appendChild() or append().

Q3.What is Event Bubbling and how does it work?

ANS. Event bubbling is how events travel in the DOM when something is clicked or triggered.

It starts from the element that was actually clicked (the inner element) and bubbles up to its parent, grandparent, and so on.

Q4.What is Event Delegation in JavaScript? Why is it useful?

ANS. Event delegation is a smart way to handle events by attaching the event listener to a parent, instead of each child element.

using event.target to figure out which child was clicked.

This is helpful when:

 many similar elements (like list items).

Elements are added dynamically after the page loads.

It makes code more efficient and cleaner.

Q5. What is the difference between preventDefault() and stopPropagation() methods?

ANS. These two methods control how events behave:

preventDefault() stops the default action of an element. For example, clicking a link won’t open a new page.

stopPropagation() stops the event from bubbling up to parent elements.