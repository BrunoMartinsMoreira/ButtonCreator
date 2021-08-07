const controllers = document.querySelector('#controllers');
const textCss = document.querySelector('.css');
const btn = document.querySelector('.btn');

controllers.addEventListener('change', handleChange)

const handleStyle = {
   element: btn,
   backgroundColor(value) {
      this.element.style.backgroundColor = value
   },

   height(value) {
      this.element.style.height = value + 'px';
   },

   width(value) {
      this.element.style.width = value + 'px';
   },

   color(value) {
      this.element.style.color = value;
   },

   border(value) {
      this.element.style.border = value;
   },

   borderRadius(value) {
      this.element.style.borderRadius = value + 'px';
   },

   fontFamily(value) {
      this.element.style.fontFamily = value;
   },

   fontSize(value) {
      this.element.style.fontSize = value + 'rem';
   },

   texto(value) {
      this.element.innerText = value;
   },
}

function handleChange(event) {
   const name = event.target.name;
   const value = event.target.value;
   handleStyle[name](value);
   saveValuesInLocalStorage(name, value)
   showCss();
}

function saveValuesInLocalStorage(name, value) {
   localStorage[name] = value
}

function setValues() {
   const properties = Object.keys(localStorage);
   properties.forEach(propertie => {
      handleStyle[propertie](localStorage[propertie]);
      controllers.elements[propertie].value = localStorage[propertie];
      showCss();
   })
}
setValues();

function showCss() {
   textCss.innerHTML = '<span>' + btn.style.cssText
      .split('; ')
      .join(';</span><span>')
}