const formData = document.getElementById('registerForm');
formData.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = new FormData(formData);

  const formDataObject = {};
            
  payload.forEach((value, key) => {
                formDataObject[key] = value;
            });
  await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObject)     
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})