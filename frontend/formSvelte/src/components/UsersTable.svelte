<!-- UserTable.svelte -->
<script>
    import { onMount } from 'svelte';
    export let users = [];


    async function getUsers() {
        const response = await fetch('http://localhost:8150/api/users');
        users = await response.json();
    }


    onMount(() => {
        getUsers();
        const interval = setInterval(getUsers, 5000);
        return () => clearInterval(interval);
    });
</script>

<h1>Tabella Utenti</h1>

{#if users.length === 0}
    <p>Nessun utente trovato.</p>
{:else}
    <table>
        <thead>
        <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Data di Nascita</th>
            <th>Sesso</th>
            <th>Skills</th>
        </tr>
        </thead>
        <tbody>
        {#each users as user}
            <tr>
                <td>{user.nome}</td>
                <td>{user.cognome}</td>
                <td>{new Date(user.dataNascita).toLocaleDateString()}</td>
                <td>{user.sesso}</td>
                <td>{user.skills.join(', ')}</td>
            </tr>
        {/each}
        </tbody>
    </table>
{/if}
