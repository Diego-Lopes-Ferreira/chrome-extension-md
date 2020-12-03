//@ts-nocheck
function createListOfNotes() {
  let [notes, currentId] = getNoteContents();
  document.querySelector('#list').innerHTML = '';

  for (let note of notes) {
    let noteExternal = document.createElement('div');
    let noteColorBall = document.createElement('div');
    let noteName = document.createElement('p');
    let noteDeleteButton = document.createElement('button');
    let noteEditButton = document.createElement('button');

    noteExternal.classList.add('note-list-item');
    noteColorBall.classList.add('note-color-ball');

    if (note.id === currentId) {
      noteExternal.classList.add('selected');
    }

    noteColorBall.style.backgroundColor = note.color;
    
    noteName.innerHTML = note.name;
    noteName.onclick = () => {
      localStorage.setItem(currentKey, note.id); // ! currentKey from 'get-note-contents.js'
      log();
    };

    noteDeleteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    noteDeleteButton.onclick = () => {
      createNewConfirmModal('Sure you want to delete?', (yes) => {
        if (yes) {
          deleteNote(note.id);
        }
      });
    };

    noteEditButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
    noteEditButton.setAttribute('id', 'edit-self');
    noteEditButton.onclick = () => {
      toggleEditNoteModal(note); // ! toggleEditNoteModal from 'modal-toggler'
      document.querySelector('#edit-modal').onclick = () => editNote(note.id); // ! editNote from 'crud'
    };

    noteExternal.appendChild(noteColorBall);
    noteExternal.appendChild(noteName);
    noteExternal.appendChild(noteEditButton);
    noteExternal.appendChild(noteDeleteButton);
    document.querySelector('#list').appendChild(noteExternal);
  }
}
