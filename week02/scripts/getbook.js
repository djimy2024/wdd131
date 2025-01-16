
const addButton = document.getElementById('addChapterBtn');
const inputField = document.getElementById('chapterInput');
const chapterList = document.getElementById('chapterList');

addButton.addEventListener('click', function() {
    // Check if the input is empty
    if (inputField.value.trim() === '') {
        // If input is empty, focus back on the input and do nothing else
        inputField.focus();
        return;
    }

    // Create a new list item
    const newChapter = document.createElement('li');
    newChapter.textContent = inputField.value;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Add an event listener to the delete button to remove the list item
    deleteButton.addEventListener('click', function() {
        newChapter.remove();
    });

    // Append the delete button to the list item
    newChapter.appendChild(deleteButton);

    // Add the new list item to the chapter list
    chapterList.appendChild(newChapter);

    // Clear the input field after adding the chapter
    inputField.value = '';

    // Focus the input field again for the next entry
    inputField.focus();
});
