function addClass() {
    className = document.getElementById('classInput').value;
   document.getElementById('text').className = className;
}
function changeButtonText() {
   button = document.getElementById('myButton');
   button.textContent = "Clicked!";
   button.classList.add('unclickable');
}
function toggleVisibility(elementId) {
       element = document.getElementById(elementId);
       if (element.classList.contains('visible')) {
           element.classList.remove('visible');
           element.classList.add('hidden');
       } else {
           element.classList.remove('hidden');
           element.classList.add('visible');
       }
   }