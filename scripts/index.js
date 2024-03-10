console.log(getChilds(document.body));

function getChilds(element, tabs = 0){
    let result = '';
    for (let child of element.children){
        result += ' '.repeat(tabs) + child.nodeName + '\n';
        if(child.hasChildNodes())
        result += getChilds(child,tabs + 1);
    }
    return result;
}
//кнопка для добавления элементов
const addBlock = document.querySelector('#add-block');
//метод добавления
addBlock.addEventListener('click',()=>{
let newBlock = document.createElement('div');
newBlock.className = 'block';
// newBlock.addEventListener('click', e=>{
// e.target.remove();
// });
newBlock.style.backgroundColor = `rgb(
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)}
)`;
//запись дивов в сторадж работает
localStorage.setItem(`${++localStorage.length}`,newBlock.outerHTML);

container.appendChild(newBlock);
});

//кнопка для удаления элементов
const removeBlock = document.querySelector('#remove-block');
//метод удаления
removeBlock.addEventListener('click',()=>{
    //удаление дивов из сторадж работает
    localStorage.removeItem(`${localStorage.length}`);
   container.removeChild(container.lastElementChild);
});

//во время обновления окна должно выходить сохраненное состояние
window.onload = () =>{
// если в localStorage имеются данные
if (localStorage.length != 0) {
    // цикл по количеству пар ключ/значение
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        // получаем шаблон - элемент списка
        let template = `${localStorage.getItem(key)}`
        // помещаем задачу в список
        container.innerHTML +=template ;
    }
}

}