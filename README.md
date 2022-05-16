## Creating a Modal With the ```<dialog>``` Tag Tutorial

### What is the ```<dialog>``` Tag?

The ```<dialog>``` tag is an HTML element used to easily create popup dialogs or modals. The tag was first introduced in HTML5.

### The ```<dialog>``` Tag in Action!

Firstly, you are going to need to create an HTML page with the following code insereted in the ```<body>``` section:
```html
        <dialog class="dialog">
            <h2>This is a modal</h2>
            <button id="close">Close</button>
        </dialog>
```
Note that a close button is not necessary to close the modal, the ```<dialog>``` tag has built in functionality that allows the escape key to close modals automatically.

Next you need to create javascript file, link it to your HTML document and import the following code:
```javascript
    const dialog = document.getElementById('dialog');

    dialog.showModal();
```
This code will simply show your modal as you open the page. If you want to add functionality to the close button, add these lines of code:
```javascript
    const button = document.getElementById('close');

    button.addEventListener('click', function(){
        dialog.close();
    });
```

Right now you modal should look pretty bland, which means it's time for some CSS! For the most part, styling the modal is no different than your average div. All that said, there are some CSS tricks you can use to swiftly increase the visual appeal of your modal.

Firstly, there is ```dialog[open]``` selector. This selector allows you to style the modal when it is opened, allowing you to add a nice transition like this:
```css
        dialog[open] {
            animation: appear .7s ease-in-out;
        }

        @keyframes appear {
            from {
                opacity: 0;
                transform: translateY(-8px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
```

There is also the ```::backdrop``` pseudo-element, which allows you to easily style the background behind the modal.
```css
    dialog::backdrop {
        background: rgb(0 0 0 / .3);
    }
```

### Resources
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [W3schools](https://www.w3schools.com/tags/tag_dialog.asp)
- [Javapoint](https://www.javatpoint.com/html-dialog-tag)
- [CSS-Tricks](https://css-tricks.com/some-hands-on-with-the-html-dialog-element/s)