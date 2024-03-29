var feedbackTab = document.getElementById('feedback-tab');
var feedbackPanel = document.getElementById('feedback-panel');

var servicesTab = document.getElementById('services-tab');
var servicesPanel = document.getElementById('services-panel');

var feedbackForm = document.getElementById('feedback-form');
var feedbackFormInput = document.getElementById('feedback_form_input');

var submitButton = document.getElementById('submitbutton');
var cancelButton = document.getElementById('cancelbutton');

var closeNav = document.getElementById('closeNav');


feedbackTab.addEventListener('click', function (event) {
  event.preventDefault(); // prevent the default link behavior
  if (feedbackPanel.style.display === 'none') {
    feedbackPanel.style.display = 'block';
    feedbackPanel.setAttribute('aria-hidden', 'false');
    feedbackTab.setAttribute('aria-expanded', 'true');
  } else {
    feedbackPanel.style.display = 'none';
    feedbackPanel.setAttribute('aria-hidden', 'true');
    feedbackTab.setAttribute('aria-expanded', 'false');
  }
});

servicesTab.addEventListener('click', function (event) {
  event.preventDefault(); // prevent the default link behavior
  if (servicesPanel.style.display === 'none') {
    servicesPanel.style.display = 'block';
    servicesPanel.setAttribute('aria-hidden', 'false');
    servicesTab.setAttribute('aria-expanded', 'true');
  } else {
    servicesPanel.style.display = 'none';
    servicesPanel.setAttribute('aria-hidden', 'true');
    servicesTab.setAttribute('aria-expanded', 'false');
  }
});


submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var formData = new FormData(feedbackForm);
  var xhr = new XMLHttpRequest();

  xhr.open('POST', '/submit-feedback');
  xhr.onload = function () {
    if (xhr.status === 200) {
      feedbackFormInput.value = "";
      feedbackTab.textContent = 'Feedback submitted';
      feedbackPanel.style.display = 'none';
      feedbackPanel.setAttribute('aria-hidden', 'true');
      feedbackTab.setAttribute('aria-expanded', 'false');
    }
  };
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(new URLSearchParams(formData).toString());

});

cancelButton.addEventListener('click', function (event) {
  event.preventDefault();

  feedbackFormInput.value = "";
  feedbackPanel.style.display = 'none';
  feedbackPanel.setAttribute('aria-hidden', 'true');
  feedbackTab.setAttribute('aria-expanded', 'false');
});

closeNav.addEventListener('click', function (event) {
  event.preventDefault();


  servicesPanel.style.display = 'none';
  servicesPanel.setAttribute('aria-hidden', 'true');
  servicesTab.setAttribute('aria-expanded', 'false');
});
