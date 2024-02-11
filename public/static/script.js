const elementsWithX = Array.from(document.querySelectorAll('*')).filter(element => element.textContent.trim() === 'X');
alert(elementsWithX);

elementsWithX.forEach(element => {
  element.addEventListener('click', () => {
    // Close the parent div when the element is clicked
    const parentDiv = element.parentElement;
    parentDiv.style.display = 'none';
  });
});
