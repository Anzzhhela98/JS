function extractText() {
   const lielements=document.getElementsByTagName('li');
   const content = [...lielements].map((el)=>el.textContent);
   document.getElementById('result').value = content.join('\n');
}