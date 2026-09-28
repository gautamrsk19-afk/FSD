const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const noteCount = document.getElementById("noteCount");

function updateNoteCount() {
    noteCount.textContent = notesContainer.children.length;
}

function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    const note = document.createElement("div");
    note.classList.add("note");

    const text = document.createElement("span");
    text.classList.add("note-text");
    text.textContent = noteText;

    const buttons = document.createElement("div");
    buttons.classList.add("note-buttons");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    const importantButton = document.createElement("button");
    importantButton.textContent = "Important";
    importantButton.classList.add("important-btn");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    editButton.addEventListener("click", function () {
        const newText = prompt("Edit your note:", text.textContent);

        if (newText !== null && newText.trim() !== "") {
            text.textContent = newText.trim();
        }
    });

    importantButton.addEventListener("click", function () {
        note.classList.toggle("important");

        if (note.classList.contains("important")) {
            importantButton.textContent = "Unmark";
        } else {
            importantButton.textContent = "Important";
        }
    });

    deleteButton.addEventListener("click", function () {
        note.remove();
        updateNoteCount();
    });

    buttons.appendChild(editButton);
    buttons.appendChild(importantButton);
    buttons.appendChild(deleteButton);

    note.appendChild(text);
    note.appendChild(buttons);

    notesContainer.appendChild(note);

    noteInput.value = "";

    updateNoteCount();
}

addNoteBtn.addEventListener("click", addNote);

noteInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addNote();
    }
});