// @ts-nocheck
let saveBtn = document.querySelector('#save');
let editAllBtn = document.querySelector('#edit');
let createModalBtn = document.querySelector(
  '.modal-wrapper#create #create-modal'
);

editAllBtn.onclick = openEditor;
saveBtn.onclick = save;
createModalBtn.onclick = createNewNote;

// htmlArea.onclick = openEditor;

log();

function log() {
  let content = '';
  let [notes, currentId] = getNoteContents(); // ! getNoteContents from 'get-note-contents'
  for (note of notes) {
    if (note.id == currentId) {
      content = note.content;
    }
  }
  htmlArea.innerHTML = marked(content); // ! marked from 'marked.js'
  createListOfNotes(); // ! createListOfNotes from 'list-of-notes'
  fixEveryCheckboxWithListStyle(); // ! fixEveryCheckboxWithListStyle from 'markdown-fix'
  fixAnchorsToBeTargetBlank(); // ! fixAnchorsToBeTargetBlank from 'markdown-fix'

  document.querySelector('.modal-wrapper#edit').classList.remove('appear');
  document.querySelector('.modal-wrapper#create').classList.remove('appear');
}

try {
  document.querySelector('#foo').onclick = () => {
    localStorage.removeItem(localStorageKey); // ! localStorageKey from 'get-note-contents'
    localStorage.removeItem(currentKey); // ! currentKey from 'get-note-contents'
  };
} catch (err) {}
