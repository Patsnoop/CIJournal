// Array to store journal entries
let entries = [];

// Function to add a new entry
function addEntry() {
    let entryInput = document.getElementById("entryInput").value;
    if (entryInput.trim() !== "") {
        entries.push(entryInput);
        displayEntries();
        document.getElementById("entryInput").value = "";
    } else {
        alert("Please enter a valid entry!");
    }
}

// Function to display entries
function displayEntries() {
    let entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";
    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        let entryDiv = document.createElement("div");
        entryDiv.innerHTML = `
            <div class="entry">
                <p>${entry}</p>
                <button onclick="editEntry(${i})">Edit</button>
                <button onclick="deleteEntry(${i})">Delete</button>
            </div>
        `;
        entriesDiv.appendChild(entryDiv);
    }
}

// Function to edit an entry
function editEntry(index) {
    let newEntry = prompt("Edit your entry:", entries[index]);
    if (newEntry !== null && newEntry.trim() !== "") {
        entries[index] = newEntry;
        displayEntries();
    }
}

// Function to delete an entry
function deleteEntry(index) {
    let confirmDelete = confirm("Are you sure you want to delete this entry?");
    if (confirmDelete) {
        entries.splice(index, 1);
        displayEntries();
    }
}

// Initial display of entries
displayEntries();