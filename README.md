# Webbplats med Autentisering och Fetch API

Denna webbplats använder Fetch API för att kommunicera med en webbtjänst för autentisering och användarhantering. Syftet är att låta användare registrera konton, logga in och använda JWT för autentisering vid anrop till en skyddad sida.

## Funktioner
- **Registrera konto:** Användare kan skapa ett konto genom att ange användarnamn och lösenord via ett formulär.
- **Logga in:** Användare kan logga in med sina registrerade konton via ett formulär.
- **Autentisering med JWT:** Efter lyckad inloggning sparas JWT:n i webbläsarens localStorage och används för autentisering vid varje anrop till skyddad sida.
- **Skyddad undersida:** En undersida kräver att användaren är inloggad för att visas och hämtar data från den skyddade webbtjänsten.

## Teknologier
- **HTML, CSS och JavaScript:** Webbplatsen är skapad med dessa grundläggande webbteknologier.
- **Fetch API:** Används för att göra POST-anrop för registrering och inloggning till webbtjänsten.
- **JWT:** JSON Web Tokens används för att autentisera användare.

