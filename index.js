//Gathering the items to drag and drop
const items = document.querySelectorAll('.item')
const columns = document.querySelectorAll('.column')
//Yields a nodelist
// console.log(items)
// console.log(columns)

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});


columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

function dragOver(e) {
    e.preventDefault()
    // console.log('drag over');
}

function dragEnter() {
    // console.log('drag entered');
}

function dragLeave() {
    // console.log('drag left');
}


let dragItem = null;

function dragStart() {
    // console.log('drag started');
    dragItem = this;
    dragItem.classList.add("active");
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    // console.log('drag ended');
  	this.className = 'item'
  	dragItem = null;
}

function dragDrop() {
    // console.log('drag dropped');
    this.append(dragItem);
    setTimeout(()=>alert("Dropped Successfully!"),200)
}


function HandleReset(){
   const log= document.getElementById("toDoList")
   for(let i=0;i<items.length;i++){
    // console.log(items[i]);
    log.append(items[i]);
   }
}