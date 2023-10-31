<?

$tasksDefault = [
  [
    "text" => "primo",
    "done" => false
  ],
  [
    "text" => "secondo",
    "done" => false
  ],
  [
    "text" => "terzo",
    "done" => false
  ]
];

// richiamo il contenuto del file json
$tasksString = file_get_contents('list-task.json');

// lo decodifico rendendolo un array (specifico che ha un parametro true essendo un array di oggetti)
$tasks = json_decode($tasksString, true);


/* ----------------------------------------- 
  applico le varie modifiche all'array 
------------------------------------------ */

// if. il valore del parametro che gli passo verrà aggiunto al file json, con la condizione che esista e che non sia una stinga vuota 
// 1. aggiungo il nuovo task alla lista di task 
// 2. codifico la nuova lista per poterla sovrascrivere interamente al precedente contenuto del file json

// add
if (isset($_POST['text']) && !empty($_POST['text'])) {
  $newTask = [
    "text" => $_POST['text'],
    "done" => false
  ];

  $tasks[] = $newTask;
  file_put_contents('list-task.json', json_encode($tasks));
}

// remove
if (isset($_POST['indexRemove'])) {
  $index = $_POST['indexRemove'];

  array_splice($tasks, $index, 1);
  file_put_contents('list-task.json', json_encode($tasks));
}

// toggle done
if (isset($_POST['indexDone'])) {
  $index = $_POST['indexDone'];

  $tasks[$index]['done'] = !$tasks[$index]['done'];
  file_put_contents('list-task.json', json_encode($tasks));
}

// reset  
if (!empty(($_POST['resetBtn']))) {
  $tasks = $tasksDefault;

  file_put_contents('list-task.json', json_encode($tasks));
}

/* ------------------------------------ */


// lo trasformo in un array json
header('Content-Type: application/json');

// lo codifico in una stringa json e lo stampo
echo json_encode($tasks);

