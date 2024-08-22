document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        window.location.href = '/login'; // Redirect to login page
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed');
    }
  });
  