// @ts-nocheck
let spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.onclick = () => click(span);
})

function click(span) {
  spans.forEach((spanOfTheList) => {
    spanOfTheList.classList.remove('selected');
  })
  span.classList.add('selected');
}
