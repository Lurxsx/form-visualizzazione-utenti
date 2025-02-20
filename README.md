# Applicazione di Visualizzazione Utenti

Questa applicazione permette di gestire una lista di utenti, includendo un modulo per l'inserimento dei dati (nome, cognome, data di nascita, sesso, skills) e una sezione per visualizzare la lista degli utenti inviati al backend.

## Features

- **Modulo di inserimento dati**: Gli utenti possono inserire i propri dati attraverso un modulo, che include i campi:
    - Nome
    - Cognome
    - Data di nascita
    - Sesso
    - Skills (competenze)

Il modulo esegue una validazione dei dati prima che essi vengano aggiunti alla lista. Se anche uno dei campi è vuoto, il salvataggio non avviene, e viene restituito un messaggio di errore.

**Visualizzazione della lista degli utenti**: Gli utenti inviati vengono visualizzati in una tabella, quando il backend ottiene nuovi dati, la tabella viene aggiornata automaticamente.

**Architettura a componenti**:
- **Frontend**: Svelte 5 per la gestione dei componenti e delle interazioni utente.
- **Backend**: Express.js per gestire le richieste HTTP e memorizzare i dati degli utenti in memoria (array `usersData`).

## Tecnologie Utilizzate

- **Frontend**:
    - [Svelte](https://svelte.dev/) per la creazione dell'interfaccia utente.
    - [Vite](https://vitejs.dev/) come bundler per un'esperienza di sviluppo rapida e ottimizzata.

- **Backend**:
    - [Node.js](https://nodejs.org/en/) come ambiente di runtime per il server.
    - [Express.js](https://expressjs.com/) per gestire le API.
    - [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) per consentire le richieste cross-origin.
    - [Body-parser](https://www.npmjs.com/package/body-parser) per parsare il corpo delle richieste HTTP.