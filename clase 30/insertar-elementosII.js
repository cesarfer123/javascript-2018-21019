/*
Insertar y eliminar elementos II
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent="I am  a new element"

// list.insertBefore(newElement,list.children[0]);

// list.children[0].insertAdjacentElement("beforebegin",newElement)
// list.insertAdjacentElement("afterbegin",newElement)
// list.insertAdjacentElement("beforeend",newElement)
// list.children[2].insertAdjacentElement("afterend",newElement)

// list.children[1].insertAdjacentHTML("afterend","<li>elemento nuevo</li>")

// list.children[1].insertAdjacentText("afterend","<li>elemento nuevo</li>")

// list.replaceChild(newElement,list.children[1])

// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.children[1].after(newElement)

// document.getElementById("child-to-replace").replaceWith(newElement)

// clonar y eliminar elementos

// list.after(list.cloneNode(true))  //clonamos

// list.remove()

list.removeChild(list.children[1])


