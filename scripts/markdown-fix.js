// @ts-nocheck

function fixReplaceEveryInputTypeChecked(content) {
  console.log('');
  console.log('Initiating function ...');
  console.log(content);
  // * Replace empty checkbox
  let regexForEmptyInput = '<li><input disabled="" type="checkbox">';
  let substituteForEmptyCheckbox = '<li class="haveinput"><svg viewBox="0 0 24 24" class="checkbox-icon not-checked"><circle cx="12" cy="12" r="10"></circle></svg>';
  content = content.replaceAll(regexForEmptyInput, substituteForEmptyCheckbox);

  let otherRegexForEmptyInput = '<li><p><input disabled="" type="checkbox">';
  let substituteForOtherEmptyInput = '<li class="haveinput"><p><svg viewBox="0 0 24 24" class="checkbox-icon not-checked"><circle cx="12" cy="12" r="10"></circle></svg>';
  content = content.replaceAll(otherRegexForEmptyInput, substituteForOtherEmptyInput);
  
  // * Replace marked checkbox
  let regexForCheckedInput = '<li><input checked="" disabled="" type="checkbox">';
  let substituteForCheckedCheckbox = '<li class="haveinput"><svg viewBox="0 0 24 24" class="checkbox-icon checked"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline class="checkmark" points="22 4 12 14.01 9 11.01"></polyline></svg>';
  content = content.replaceAll(regexForCheckedInput, substituteForCheckedCheckbox);

  let otherRegexForCheckedInput = '<li><p><input checked="" disabled="" type="checkbox">';
  let otherSubstituteForCheckedCheckbox = '<li class="haveinput"><p><svg viewBox="0 0 24 24" class="checkbox-icon checked"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline class="checkmark" points="22 4 12 14.01 9 11.01"></polyline></svg>';
  content = content.replaceAll(otherRegexForCheckedInput, otherSubstituteForCheckedCheckbox);
  
  console.log('replacing');
  console.log(content);
  return content;
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
