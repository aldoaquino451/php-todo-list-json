<?

$tasks = [
  "Portare a spasso il cane",
  "Lavare la macchina",
  "Fare la spesa",
  "Cucinare per la cena"
];

header('Content-Type: application/json');

echo json_encode($tasks);

