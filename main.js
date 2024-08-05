// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function makeItWork() {
  const ul = document.querySelector("ul")
  const modal = document.getElementById("modal")
  const errorMessage = document.getElementById('modal-message');
  modal.classList.add("hidden");
  const like = document.querySelectorAll(".like-glyph");
  console.log(ul);
  like.forEach((heart) => {
    heart.addEventListener("click", function () {
      console.log(heart)
      mimicServerCall()
        .then(res => res)
        .catch((e) => {
          modal.classList.remove("hidden");
          errorMessage.textContent = e;
          setTimeout(() => modal.classList.add("hidden"), 3000);
        })


      if (heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
      }
      else if (heart.innerHTML == FULL_HEART) {
        heart.classList.remove("activated-heart")
        heart.innerHTML = EMPTY_HEART;
      }
    }  )
  })
}
makeItWork()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
