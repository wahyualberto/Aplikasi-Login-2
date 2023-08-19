// @module Login-Script
// membuat variabel loginFormElement untuk tampilan form.
// @constant {HTMLElement}

const loginFormElement = document.querySelector('#loginForm');

// membuat variabel inputEmailElement untuk tampilan input email.
// @constant {HTMLElement}
const inputEmailElement = document.querySelector('#inputEmail');

// membuat variabel inputPasswordElement untuk tampilan input password.
// @constant {HTMLElement}
const inputPasswordElement = document.querySelector('#inputPassword');

// membuat variabel email untuk menyimpan informasi email sementara.
// @constant {string}
const expectedEmail = 'admin@dicoding.com';

// membuat variabel password untuk menyimpan informasi password sementara.
// @constant {string}
const expectedPassword = 'superpassword';

// menambahkan aksi klik pada button.
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

// membuat variabel email untuk menyimpan nilai email yang di dapatkan saat button ditekan.
// @constant {string}
  const email = inputEmailElement.value;

// membuat variabel password untuk menyimpan nilai password yang di dapatkan saat button ditekan.
// @constant {string}
  const password = inputPasswordElement.value;
  
  // memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan
  if (email == expectedEmail && password == expectedPassword) {

    //jika sesuai maka program akan berpindah ke halaman home
    goToHome();
  } else {

    // namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah
    showPopUp();
  }
});
