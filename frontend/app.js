// document.addEventListener('DOMContentLoaded', function() {
//     const myForm = document.querySelector('#signin-form');
//     myForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission
      
//         const formData = new FormData(myForm);
       
//         fetch('http://localhost:4000/auth/signIn', {
//             method: "POST",
//             body: formData,
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log('login success:' ,data); // Handle the response from the server (e.g., show a message to the user)
//         });
//     });
  
// });
// register
// document.addEventListener('DOMContentLoaded', function() {
//     const myForm1 = document.querySelector('#register-form');
//     myForm1.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get the form data using FormData
//         const formData1 = new FormData(myForm1);

//         // Fetch data to the server
//         fetch('http://localhost:4000/auth/register', {
//             method: "POST",
//             body: formData1,
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data.message === 'success') {
//                 alert('Successfully registered');
//                 console.log('Registered user:', data.user); // Handle the response from the server (e.g., show a message to the user)
//             } else {
//                 alert('Registration failed: ' + data.error); // Handle registration failure
//             }
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
//     });
// });
const form = document.getElementById('registerForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = new FormData(form);

  await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: payload,
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})