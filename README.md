PHP ToDo List JSON
===

**Descrizione**   
Dobbiamo creare una web-app che permetta di leggere e scrivere una lista di Todo.
Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.

**Stack**     
Html, CSS, VueJS (importato tramite CDN), axios, PHP

**Consigli**    
Nello svolgere l’esercizio seguite un approccio graduale.
Prima assicuratevi che la vostra pagina *index.php* (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).
Lo step successivo è quello di “testare” l’invio di un nuovo task, sapendo che manca comunque la persistenza lato server (ancora non memorizzate i dati da nessuna parte).
Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.

**Bonus**   
Mostrare lo stato del task → se completato, barrare il testo
Permettere di segnare un task come completato facendo click sul testo
Permettere il toggle del task (completato/non completato)
Abilitare l’eliminazione di un task
Buon lavoro!


## Esercizio
- costruisco l'interfaccia utente in html
- creo l'array direttamente sul server php e lo codifico in json 
- faccio una chiamata axios e salvo il risultato in una lista
- stampo la lista in hmtl con vue
- aggiungo un input e mi salvo in una variabile il valore
- aggiugo una funzione che pusha il valore dell'input dentro l'array 
- creo un file json
- richiamo il file json in php e lo decodifico, poi continuo con i passagi già svolti






