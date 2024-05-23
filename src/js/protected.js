window.onload = init;
const url = "https://palogmongo.onrender.com/api/";

function init() {
    if (!localStorage.getItem("jwt")) {
        window.location.href = 'index.html'; 
    } else {
        getData();
        setupLogout();
    }
}

async function getData() {
    const token = localStorage.getItem("jwt");
    const protectedContentElement = document.getElementById('protectedContent');
    
    try {
        protectedContentElement.innerText = "Laddar...";
        
        const response = await fetch(`${url}protected`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized');
            } else if (response.status === 403) {
                throw new Error('Forbidden');
            } else {
                throw new Error('Något gick fel');
            }
        }

        const data = await response.json();
        console.log('Protected data:', data);
        // Hantera skyddade data här, t.ex. visa det på sidan
        protectedContentElement.innerText = `Välkommen ${data.user.username}`;
    } catch (error) {
        protectedContentElement.innerText = `Du är inte auktoriserad att se denna sida`;

        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000); 
    }
}

function setupLogout() {
    const logoutLink = document.getElementById('protected-a');
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        localStorage.removeItem('jwt'); // 
        window.location.href = 'index.html'; 
    });
}
