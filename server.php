<?

// richiamo il contenuto del file json
$tasksString = file_get_contents('list-task.json');

// lo decodifico rendendolo un array
$tasks = json_decode($tasksString);


/* ----------------------------------------- 
  applico le varie modifiche all'array 
------------------------------------------ */

// il valore del parametro che gli passo verrà aggiunto al file json, con la condizione che esista e che non sia una stinga vuota 
if (isset($_POST['taskItem']) && !empty($_POST['taskItem'])) {

  // aggiungo il nuovo task alla lista di task 
  $newTask = $_POST['taskItem'];
  $tasks[] = $newTask;

  // codifico la nuova lista per poterla sovrascrivere interamente al precedente contenuto del file json
  file_put_contents('list-task.json', json_encode($tasks));
}

/* ------------------------------------ */


// lo trasformo in un array json
header('Content-Type: application/json');

// lo codifico in una stringa json e lo stampo
echo json_encode($tasks);

