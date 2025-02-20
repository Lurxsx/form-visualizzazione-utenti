<script>
  import UserTable from './components/UsersTable.svelte';

  let nome = '';
  let cognome = '';
  let dataNascita = '';
  let sesso = '';
  let skills = [];
  let users = [];


  async function sendFormData(event) {
    event.preventDefault();
    const formData = { nome, cognome, dataNascita, sesso, skills };

    const response = await fetch('http://localhost:8150/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Dati inviati correttamente');
      getUsers();
    } else {
      alert('Errore nell\'invio dei dati');
    }
  }


  async function getUsers() {
    const response = await fetch('http://localhost:8150/api/users');
    users = await response.json();
  }


  import {onMount} from 'svelte';

  onMount(() => {
    getUsers();
  });
</script>

<h1>FORM</h1>
<h3>Compila i campi</h3>

<form on:submit={sendFormData}>
  <label for="nome">Nome:</label>
  <input type="text" bind:value={nome}>

  <label for="cognome">Cognome:</label>
  <input type="text" bind:value={cognome}>

  <label for="dataNascita">Data di Nascita:</label>
  <input type="date" bind:value={dataNascita}>

  <label for="sesso">Sesso:</label>
  <select bind:value={sesso}>
    <option value="M">Maschio</option>
    <option value="F">Femmina</option>
  </select>

  <label for="skills">Skills:</label>
  <div>
    <input type="checkbox" bind:group={skills} value="HTML"> HTML
    <input type="checkbox" bind:group={skills} value="CSS"> CSS
    <input type="checkbox" bind:group={skills} value="JS"> JS
    <input type="checkbox" bind:group={skills} value="PHP"> PHP
    <input type="checkbox" bind:group={skills} value="SQL"> SQL
    <input type="checkbox" bind:group={skills} value="Python"> Python
    <input type="checkbox" bind:group={skills} value="Java"> Java
    <input type="checkbox" bind:group={skills} value="C#"> C#
    <input type="checkbox" bind:group={skills} value="C++"> C++
    <input type="checkbox" bind:group={skills} value="Ruby"> Ruby
  </div>

  <button type="submit">Invia</button>
</form>

<UserTable {users}/>
