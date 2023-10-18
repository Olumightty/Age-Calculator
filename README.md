# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


### Links

- Solution URL: (https://olumightty.github.io/Age-Calculator/)
- Live Site URL: (https://github.com/Olumightty/Age-Calculator.git)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript and DOM Manipulation


### What I learned

- Javascript date Setting, Getting and Formating

```js

var d = new Date(year, month -1 , day);
d.getTime(); // to display the date in milleseconds;

```

- How to animate buttons and elements using css syntax like focus and hover
```css
.input:focus {
  //properties goes here
}

.btn:hover{
  //properties goes here
}
```


If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

- Using and manipulating date with javascript

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/) - How to use Date Object in Javascript
- [Google Fonts](https://fonts.google.com/) - To obtain various letter fonts



## Author

- Frontend Mentor - [@Olumightty](https://www.frontendmentor.io/profile/Olumightty)
- GitHub - [@Olumightty](https://github.com/Olumightty)
- Instagram - [that.olu](https://www.instagram.com/that.olu/)



