// Your JS code goes here
const categories = [
  {
    id: 1,
    name: "Programming",
  },
  {
    id: 2,
    name: "Database",
  },
  {
    id: 3,
    name: "DevOps",
  },
];
const sampleData = [
  {
    id: 1,
    name: "Refactoring",
    author: "Martin Fowler",
    topic: 1,
  },
  {
    id: 2,
    name: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    topic: 2,
  },
  {
    id: 3,
    name: "The Phoenix Project",
    author: "Gene Kim",
    topic: 3,
  },
];

const addBookDialogDOM = document.querySelector("#add-book-dialog");
const deleteBookDialogDOM = document.querySelector("#delete-book-dialog");
const categoryDOM = document.querySelector("#category");

const dataZoneDOM = document.querySelector("#data-zone");

function showAddBookDialog() {
  addBookDialogDOM.style.display = "flex";
}

function hideAddBookDialog() {
  addBookDialogDOM.style.display = "none";
}

function showDeleteBookDialog() {
  deleteBookDialogDOM.style.display = "flex";
}

function hideDeleteBookDialog() {
  deleteBookDialogDOM.style.display = "none";
}

function loadCategories() {
  categories.map((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.innerHTML = category.name;

    categoryDOM.appendChild(option);
  });
}

function loadSampleData() {
  dataZoneDOM.innerHTML = '';

  JSON.parse(localStorage.getItem("data")).map((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.author}</td>
        <td>${categories.find((c) => c.id === data.topic).name}</td>
        <td id=${`btn-delete-${data.id}`} class='text-danger text-underline'>Delete</td>
      `;

    dataZoneDOM.appendChild(row);
  });
}

function deleteData(id) {
  const listData = JSON.parse(localStorage.getItem('data'));

  const newListData = listData.filter(data => data.id !== id);
  console.log(newListData);

  localStorage.setItem('data', JSON.stringify(newListData));

  hideDeleteBookDialog();

  loadSampleData();
}

function onDeleteDataRow() {

  dataZoneDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('text-danger')) {
      const dataId = e.target.id.split('-')[2];

      showDeleteBookDialog();

      const data = sampleData.find(item => item.id === parseInt(dataId));
      document.querySelector("#book-name").innerHTML = data.name;

      document.querySelector('#btn-delete').addEventListener('click', () => {
        deleteData(data.id);
      })
    }
  });
}

function onLoad() {
  localStorage.setItem("data", JSON.stringify(sampleData));

  loadCategories();
  loadSampleData();
  onDeleteDataRow();
}

window.addEventListener("load", onLoad);
