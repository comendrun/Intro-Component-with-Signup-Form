# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*


### Links

- Solution URL: [https://github.com/comendrun/Intro-Component-with-Signup-Form]
- Live Site URL: [https://comendrun.github.io/Intro-Component-with-Signup-Form/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript Client side form Validation


### What I learned

 this challenge have challenged my JS knowledge and also i would learn about client-side authentication with JS 


  * why we would consider this kind of validation? why we need to do this at all? well, this way it could be much faster to validate the data that entered by the user, and it would be much faster than sending data to server and process it that way. (that been said, we still need to validate our data also on server)  
  with JS we can almost validate any form we want by simple functions and  variables
  this way we will have only acceptable inputs from user (client) to be sent to our server 
  so, according to MDN docs there are two types of client side form validation, first is the built in validation features in html that will allow us to basicly require data in required format from user. its much better performance wise and also much easier to keep track of it, but its much simpler and not so customizable
  the second type is by JS 

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

TODO : i should definetly check about this method and how it works (generally i would like to learn more about Regex Validation): 

```js
const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
```

### Useful resources

- [https://www.youtube.com/watch?v=CYlNJpltjMM] - a video from JavaScript Academy that helped me a lot with js part of the challenge
- [https://codepen.io/javascriptacademy-stash/pen/oNeNMNR?editors=0010] - the codeOpen code example for the video above
- [https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation] - MDN doc for client side validation
- [https://www.frontendmentor.io/solutions/intro-component-with-signup-form-html-css-sass-js-By3rWK2Mq] - challnege done by dear Vanza. He is a perfect guy who i admire his passion for this profession. i really liked his challenge and it helped me a lot.


## Author

- Website - [@comendrun](https://github.com/comendrun)
- Frontend Mentor - [@comendrun](https://www.frontendmentor.io/profile/comendrun)
- Twitter - [@comendrun](https://twitter.com/comendrun)


## Acknowledgments

- [https://www.frontendmentor.io/profile/vanzasetia]
- [https://www.youtube.com/c/JavaScriptAcademyOfficial]

