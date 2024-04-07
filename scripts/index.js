/* LinkedIn Challenge javascript */
/**
 * Implement the following functionality:
 * Get username, job title and profile picture dynamically from the script instead
 * of hard-coding the data.
 * Hint : You need to use & store the data in javascript variables and
 * show them on HTML file using DOM manipulation
 *
 * */

// Declare global data

const userProfileImage = './assets/images/nonbinary.png';
const userName = 'Gandalf the Grey';
const userTitle = 'VP of Wizards';

// 1. Identify location of username, job title and profile picture
const userNameElem = document.querySelectorAll('.data-username');
const jobTitleElem = document.querySelector('.data-jobtitle');
const profilePictureElem = document.querySelectorAll('.data-profilepic');

// 2 Manipulation
// iterate through userNameElem
// change the innerHTML

for (let el of userNameElem) {
  el.innerHTML = userName;
}

jobTitleElem.innerHTML = userTitle;

for (let pro of profilePictureElem) {
  pro.src = userProfileImage;
}
