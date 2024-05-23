// Hantera registreringsformuläret

const url= "https://palogmongo.onrender.com/api/"
const errorMessage = document.getElementById("error-message")

document.getElementById('registerForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch(`${url}register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Användare registrerad!');
            window.location.href = 'index.html';  
        } else {
            console.log(`Fel: ${data.error}`);
        }
    } catch (error) {
        console.log('Fel vid registrering.');
    }
});

// Hantera inloggningsformuläret
document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${url}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.status === 200) {
            console.log('Användare inloggad!');
            console.log('JWT Token:', data.response.token);
            // Spara token i localStorage
            localStorage.setItem('jwt', data.response.token);
            window.location.href = 'protected.html'
        } else {
            errorMessage.innerHTML = "Fel användarnamn/Lösenord"
            console.log(`Fel: ${data.error}`);
        }
    } catch (error) {
        console.log('Fel vid inloggning.');
    }
});
