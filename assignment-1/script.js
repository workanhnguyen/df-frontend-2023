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
const dataZoneDOM = document.querySelector("#data-zone");

const nameInputDOM = document.querySelector("#name");
const authorInputDOM = document.querySelector("#author");
const categoryDOM = document.querySelector("#category");

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
  dataZoneDOM.innerHTML = "";

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

function addBook() {
  if (nameInputDOM.value !== "" && authorInputDOM !== "") {
    let listData = JSON.parse(localStorage.getItem("data"));

    const newBook = new Object();
    newBook.id = listData[listData.length - 1].id + 1;
    newBook.name = nameInputDOM.value;
    newBook.author = authorInputDOM.value;
    newBook.topic = parseInt(categoryDOM.value);

    listData = [...listData, newBook];

    localStorage.setItem("data", JSON.stringify(listData));
    
    loadSampleData();
    clearInputField();
    hideAddBookDialog();

  } else alert('Vui lòng nhập đầy đủ thông tin!');
}

function clearInputField() {
  nameInputDOM.value = '';
  authorInputDOM.value = '';
}

function deleteBook(id) {
  const listData = JSON.parse(localStorage.getItem("data"));

  const newListData = listData.filter((data) => data.id !== id);
  console.log(newListData);

  localStorage.setItem("data", JSON.stringify(newListData));

  hideDeleteBookDialog();

  loadSampleData();
}

function searchBook() {

}

function onDeleteDataRow() {
  dataZoneDOM.addEventListener("click", (e) => {
    if (e.target.classList.contains("text-danger")) {
      const dataId = e.target.id.split("-")[2];

      showDeleteBookDialog();

      const data = JSON.parse(localStorage.getItem('data')).find((item) => item.id === parseInt(dataId));
      document.querySelector("#book-name").innerHTML = data.name;

      document.querySelector("#btn-delete").addEventListener("click", () => {
        deleteBook(data.id);
      });
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
