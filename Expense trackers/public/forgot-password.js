document.getElementById('forgot-password-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const status = document.getElementById('status');

    try {
        const response = await fetch('/api/users/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const result = await response.json();
        status.textContent = result.message;
    } catch (error) {
        status.textContent = 'An error occurred. Please try again.';
    }
});
