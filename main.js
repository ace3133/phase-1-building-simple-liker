// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');

  errorModal.classList.add('hidden'); // Hide error modal initially

  function showError(message) {
    errorMessage.innerText = message;
    errorModal.classList.remove('hidden'); // Display error modal
    setTimeout(function() {
      errorModal.classList.add('hidden'); // Hide error modal after 3 seconds
    }, 3000);
  }

  function handleHeartClick(event) {
    const heart = event.target;
    if (heart.classList.contains('like-glyph')) {
      mimicServerCall() // Simulate server call
        .then(function(response) {
          heart.innerText = FULL_HEART; // Change heart to full
          heart.classList.add('activated-heart'); // Make heart red
        })
        .catch(function(error) {
          showError(error); // Display error message
        });
    } else if (heart.classList.contains('activated-heart')) {
      heart.innerText = EMPTY_HEART; // Change heart back to empty
      heart.classList.remove('activated-heart'); // Remove red color
    }
  }

  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(function(heart) {
    heart.addEventListener('click', handleHeartClick);
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
