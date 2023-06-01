const firebaseConfig = {
  apiKey: "AIzaSyBBdWV3eo5HyrLo4hUVL8KtDNL0slBPiBI",
  authDomain: "nih2-6f465.firebaseapp.com",
  databaseURL: "https://nih2-6f465-default-rtdb.firebaseio.com",
  projectId: "nih2-6f465",
  storageBucket: "nih2-6f465.appspot.com",
  messagingSenderId: "787777683348",
  appId: "1:787777683348:web:5366bdb0862b42f1b15981"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
