let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg') {
      myImage.setAttribute ('src','images/test-icon.jpg');
    } else {
      myImage.setAttribute ('src','test-icon.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Daisies are beautiful, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Daisies are beautiful, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }