// @ts-nocheck

// * Fix checkbox with list style :)

// fixEveryCheckboxWithListStyle();
// window.addEventListener('click', fixEveryCheckboxWithListStyle);
function fixEveryCheckboxWithListStyle() {
  let everyLi = document.querySelectorAll('#editable li');
  for (let li of everyLi) {
    try {
      if (li.children[0].children[0].tagName === 'INPUT') {
        li.classList.add('haveinput');
      }
    } catch (err) {}
    try {
      if (li.children[0].tagName === 'INPUT') {
        li.classList.add('haveinput');
      }
    } catch (err) {}
  }
}

// * Fix checkbox not marking itself
// fixEveryCheckboxNotMarkingItself();
// window.addEventListener('click', fixEveryCheckboxNotMarkingItself);
function fixEveryCheckboxNotMarkingItself() {
  // ! Not done yet
  // [ ] Get all notes
  // [ ] Find the one Im editing
  // [ ] Find the place where the checkbox is
  // [ ] Mark it .replace("[ ]", "[x]");
  // [ ] Edit
  // [ ] Save
  let everyCheckbox = document.querySelectorAll('input[type=checkbox]');
  for (let checkbox of everyCheckbox) {
    checkbox.disabled = false;
  }
}

// * Fix anchors to be target blank
// window.addEventListener('click', fixEveryCheckboxWithListStyle);
function fixAnchorsToBeTargetBlank() {
  let everyAnchor = document.querySelectorAll('a');
  for (let anchor of everyAnchor) {
    anchor.setAttribute('target', 'blank');
  }
}
