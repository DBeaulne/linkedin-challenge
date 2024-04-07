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

// 1. Identify location of username, job title and profile picture
/* const userNameElem = document.querySelectorAll('.data-username');
const jobTitleElem = document.querySelector('.data-jobtitle');
const profilePictureElem = document.querySelectorAll('.data-profilepic'); */

// 2 Manipulation
// iterate through userNameElem
// change the innerHTML

const loadUserProfile = () => {
  // Get username, profile pic and job title
  const userNameElm = document.querySelectorAll('.data-username');
  const userProfileImageElm = document.querySelectorAll('.data-profilepic');
  const jobTitleElm = document.querySelector('.data-jobtitle');

  // Manipulate & assign new data
  for (let el of userNameElm) {
    el.innerHTML = userProfile.username;
  }
  jobTitleElm.innerHTML = userProfile.jobTitle;

  for (let pro of userProfileImageElm) {
    pro.src = userProfile.profilePicture;
  }
};

const createPost = () => {
  const username = document.querySelector('.data-username').innerHTML;
  const post = document.querySelector('.data-post').value;
  console.log('username, post', username, post);

  if (post) {
    // Create a new element
    // Select Parent -- section -- posts
    const parentDiv = document.querySelector('.posts');

    // Create a div, with class = posts__item
    const postItemDiv = document.createElement('div');
    postItemDiv.classList.add('posts__item');

    // Create 3 children : posts__username, posts__content, posts__like
    // Add them to postsItemDiv
    const postUsernameDiv = document.createElement('div');
    postUsernameDiv.classList.add('posts__username');
    postUsernameDiv.innerText = username + ' Posted';

    const postContentDiv = document.createElement('div');
    postContentDiv.classList.add('posts__content');
    const postcontent = document.createElement('p');
    postcontent.innerHTML = post;
    postContentDiv.append(postcontent);

    const postLikeDiv = document.createElement('div');
    postLikeDiv.classList.add('posts__like');
    // Follow the same
    postItemDiv.append(postUsernameDiv);
    postItemDiv.append(postContentDiv);
    postItemDiv.append(postLikeDiv);

    // Append this div to the parent
    parentDiv.prepend(postItemDiv);
  } else {
    // Empty post
    // error handling
    alert('Error: You have an empty post. Please try again');
  }
};

loadUserProfile();
