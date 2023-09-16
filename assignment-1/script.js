// Your JS code goes here
const addBookDialogDOM = document.querySelector("#add-book-dialog");
const deleteBookDialogDOM = document.querySelector("#delete-book-dialog");

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

function onLoad() {
  const sampleData = [
    {
      name: "Refactoring",
      author: "Martin Fowler",
      topic: "Programming",
    },
    {
      name: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      topic: "Database",
    },
    {
      name: "The Phoenix Project",
      author: "Gene Kim",
      topic: "DevOps",
    },
  ];

  localStorage.setItem("data", JSON.stringify(sampleData));

  for (const data of sampleData) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.author}</td>
        <td>${data.topic}</td>
        <td onclick='showDeleteBookDialog()' class='text-danger text-underline'>Delete</td>
      `;

    dataZoneDOM.appendChild(row);
  }
}

onLoad();
