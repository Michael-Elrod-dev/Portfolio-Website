const soundCloud = document.querySelector('.sound-cloud')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const myAudio = document.querySelector('#myAudio')

off.addEventListener('click', () => soundTrack('off'))
on.addEventListener('click', () => soundTrack('on'))

const soundTrack = (soundState) => {
  if (soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    soundCloud.style.color = '#08fdd8'
    myAudio.play()
  } else if (soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    soundCloud.style.color = '#f50057'
    myAudio.pause()
  }
}

// Play music functionality
const btnBars = document.querySelector('.bars')
const btnTimes = document.querySelector('.times')
const SideNav = document.querySelector('.aside')

btnBars.addEventListener('click', () => myFunc('open'))
btnTimes.addEventListener('click', () => myFunc('close'))

const myFunc = (navCondition) => {
  if (navCondition === 'open') {
    SideNav.classList.add('show-nav')
    btnTimes.style.display = 'block'
    btnBars.style.display = 'none'
  } else if (navCondition === 'close') {
    SideNav.classList.remove('show-nav')
    btnTimes.style.display = 'none'
    btnBars.style.display = 'block'
  }
}

$(document).ready(function () {
  if (
    !$('#myCanvas').tagcanvas(
      {
        textColour: '#08fdd8',
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      'tags',
    )
  ) {
    // something went wrong hide the canvas container,
    $('#myCanvasContainer')
  }
})

// Initialize EmailJS
emailjs.init('g5oS2WA-c4W4YJxbd');

// Contact section
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')
const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateInput();
})

const validateInput = () => {
  let email = emailInput.value;
  let textarea = textareaInput.value;

  if (!email && !textarea) {
    setError(emailInput.parentElement);
    setError(textareaInput.parentElement);
    showMessage('Please fill in the required inputs', 'red');
  } else if (!email && textarea) {
    setError(emailInput.parentElement);
    showMessage("Oops! Email can't be empty", 'red');
  } else if (!textarea && email) {
    setError(textareaInput.parentElement);
    showMessage('Please provide a message', 'red');
  } else if (email && textarea) {
    emailjs.sendForm(
      'service_hj9qz9c',
      'template_fp4ekd8',
      contactForm
    ).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(emailInput.parentElement);
      setSuccess(textareaInput.parentElement);
      showMessage('Message sent successfully', 'green');
      textareaInput.value = '';
      emailInput.value = '';
      nameInput.value = '';
      subjectInput.value = '';
    }, function(error) {
      console.log('FAILED...', error);
      showMessage('Failed to send message', 'red');
    });
  }
}

const setError = (input) => {
  input.classList.remove('success');
  input.classList.add('error');
}

const setSuccess = (input) => {
  input.classList.remove('error');
  input.classList.add('success');
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, color) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = color
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(0, 0)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}



// Get the titles that open the modals and the clickable images
var clickables = [...document.getElementsByTagName('h5'), ...document.getElementsByClassName('magic-wall_item')];

for (let i = 0; i < clickables.length; i++) {
  let clickable = clickables[i];

  // When the user clicks the button or image, open the modal 
  clickable.onclick = function (event) {
    event.preventDefault(); // This will prevent the "#" href from triggering

    let title = this.dataset.title || this.innerText || 'Default title';
    let text = this.dataset.text || 'Default text';
    let img = this.dataset.img || 'Default image path';
    let url = this.dataset.url || '#'; // Default link

    // Create the modal
    let modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img class="modal-img" src="${img}" alt="Modal Image">
        <h1>${title}</h1>
        <p>${text}</p>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="contact-button">
          <div>
            <span class="bg"></span>
            <span class="base"></span>
            <span class="text">GitHub Link</span>
          </div>
        </a>
      </div>
    `;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    let span = modal.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
      document.body.removeChild(modal); // Remove the modal from the DOM
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.removeChild(modal); // Remove the modal from the DOM
      }
    }
  }
}
