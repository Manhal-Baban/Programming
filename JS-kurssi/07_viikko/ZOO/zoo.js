let animals = [
  { name: "cat", type: "mammal" },
  { name: "dog", type: "mammal" },
  { name: "toad", type: "amohibian" },
  { name: "crane", type: "bird" },
  { name: "herring", type: "fish" },
  { name: "chameleon", type: "reptile" },
  { name: "parrot", type: "bird" },
  { name: "jay", type: "bird" },
];

const animalList = document.getElementById("animalList");
const addButton = document.getElementById("addAnimal");
const newNameInput = document.getElementById("newAnimalName");
const newTypeSelect = document.getElementById("newAnimalType");
const filterSelect = document.getElementById("filterType");
const sortButton = document.getElementById("sortAnimals");
const searchInput = document.getElementById("searchAnimal");

function renderList() {
  animalList.innerHTML = "";

  //table to filter animals into
  let filtered = [];
  let filterType = filterSelect.value; // different variable here so the DOMs remain consistant
  let searchTerm = searchInput.value.trim().toLowerCase;

  for (let i = 0; i < animals.length; i++) {
    const a = animals[i];

    //if one of the conditions is met, the loop ends here
    if (filterType !== "all" && a.type !== filterType) {
      continue;
    }

    if (a.name.toLocaleLowerCase().includes(searchTerm)) {
      continue;
    }

    //if "continue" occurred, this will not be executed
    filtered.push(a); // add animal to filtered table
  }

  // show only filtered animals
  filtered.forEach((animal) => {
    let li = document.createElement("li"); // it creates a list

    li.innerHTML = `
<span class="animal-name"> ${animal.name} </span>
<span class="animal-type"> ${animal.type} </span>`;
    animalList.appendChild(li); // adds a new past to the list
  });

  addButton.addEventListener("click", (event) => {
    event.preventDefault(); //this is not necessary, but it doesn't hurt if you have it here
    let name = newNameInput.value.trim().toLowerCase();
    let type = newTypeSelect.value.toLowerCase();

    if (name) {
      animals.push({ name, type });
      newNameInput.value = "";
      renderList();
    }
  });
}
// 7. sort it Alphabetically
console.log(sortButton);
sortButton.addEventListener("click", () => {
  console.log("Sort button clicked");

  animals.sort((a, b) => a.name.localeCompare(b.name));
  renderList();
});

filterSelect.addEventListener("change", renderList);
searchInput.addEventListener("input", renderList);
renderList();
