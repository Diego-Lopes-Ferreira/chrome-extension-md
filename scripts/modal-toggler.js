// @ts-nocheck
let createNewBtn = document.querySelector('#create-new');
let cancelCreateBtn = document.querySelector(
  '.modal-wrapper#create #cancel-modal'
);

createNewBtn.onclick = toggleCreateNewNoteModal;
cancelCreateBtn.onclick = toggleCreateNewNoteModal;

function toggleCreateNewNoteModal() {
  const modal = document.querySelector('.modal-wrapper#create');
  modal.classList.toggle('appear');
  let input = document.querySelector('.modal-wrapper#create div #modal-name');
  input.value = '';
  let spans = document.querySelectorAll('.modal-wrapper#create span');
  spans.forEach((spanOfTheList) => {
    spanOfTheList.classList.remove('selected');
  });
}

let cancelEditBtn = document.querySelector('.modal-wrapper#edit #cancel-modal');

cancelEditBtn.onclick = toggleEditNoteModal;

function toggleEditNoteModal(note) {
  const modal = document.querySelector('.modal-wrapper#edit');
  modal.classList.toggle('appear');

  let input = document.querySelector('.modal-wrapper#edit div #modal-name');
  input.value = note.name;

  let spans = document.querySelectorAll('span');
  spans.forEach((spanOfTheList) => {
    if (spanOfTheList.classList[0] === note.color) {
      spanOfTheList.classList.add('selected');
      return;
    }
    spanOfTheList.classList.remove('selected');
  });
}
