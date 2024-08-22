document.addEventListener('DOMContentLoaded', () => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
        document.getElementById('token').value = token;
    }

    document.getElementById('reset-password-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const token = document.getElementById('token').value;
        const password = document.getElementById('password').value;
        const status = document.getElementById('status');

        try {
            const response = await fetch(`/api/users/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            const result = await response.json();
            status.textContent = result.message;
        } catch (error) {
            status.textContent = 'An error occurred. Please try again.';
        }
    });
});
