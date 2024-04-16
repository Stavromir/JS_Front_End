function create(words) {
   const contentElement = document
       .getElementById('content');


   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newParElement = document.createElement('p');

      newParElement.textContent = word;
      newParElement.style.display = 'none';

      newDivElement.appendChild(newParElement);
      newDivElement.addEventListener('click', showText);
      contentElement.appendChild(newDivElement);
   }

   function showText(e) {
      const element = e.currentTarget.children[0];
      element.style.display = '';
   }
}