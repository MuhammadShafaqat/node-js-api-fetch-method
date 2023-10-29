const formData = document.getElementById('registerForm');
formData.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = new FormData(formData);

  const formDataObject = {};

  payload.forEach((value, key) => {
    formDataObject[key] = value;
  });

  fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObject)
  })
    .then(response => {
      if (response.ok) {
        alert('Registration successful');
        return response.json();
      } else {
        return response.json().then(data => {
          console.log(data);
          throw new Error('Registration failed');
        });
      }
    })
    .then(data => {
      // Handle successful response data (if needed)
      console.log(data);
      // Redirect to the login page
      window.location.href = '/frontend/login.html'; // Replace with your login page URL
    })
    .catch(err => {
      console.error(err);
      alert('An error occurred while registering. Please try again.');
    });
});






// const formData = document.getElementById('registerForm');
// formData.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const payload = new FormData(formData);

//   const formDataObject = {};
            
//   payload.forEach((value, key) => {
//                 formDataObject[key] = value;
//             });
//   await fetch('http://localhost:3000/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formDataObject)     
//     }).then(response => response.json())
//     .then(data => 
//       alert('register successfully'),
//       console.log(data))
//     .catch(err => console.log(err))
// })