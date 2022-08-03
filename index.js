const dataItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('.dropZone');
let draggedItem = null
let droppedItem = null
dataItems.forEach((dragItem) => {
    dragItem.addEventListener('dragstart', handlerDragstart);
    dragItem.addEventListener('dragend', handlerDragend);
    dragItem.addEventListener('drag', handlerDrag);
    dragItem.addEventListener('dragenter', () => {
        if (dragItem !== droppedItem) {
            droppedItem = dragItem
        }
    });
    dragItem.addEventListener('dragenter', () => {
        droppedItem = null
    });
})

dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragenter', handlerDragenter);
    dropZone.addEventListener('dragleave', handlerDragleave);
    dropZone.addEventListener('dragover', handlerDragover);
    dropZone.addEventListener('drop', handlerDrop);
})



function handlerDragstart (event) {
    // erb elementy vercnum es mi angam ashxatyuma u verj
    event.dataTransfer.setData('dragItem', this.dataset.item)
    //datatransferov  uxxarkum em vercrac elementy u dnum yndhanur stat
    this.classList.add('dragItem--active')
    draggedItem = this
}
function handlerDragend (event) {
    // erb toxum es elementy mi angam ashxatuma u verj
    // console.log('handlerDragend')
    this.classList.remove('dragItem--active')
    draggedItem = null
}
function handlerDrag (event) {
    // anyndhat ashxatuma erb elementy vercnum es
    // u minchev chtoxes ashxatelua
    // console.log('drag')
}
function handlerDragenter (event) {
    //erb mtnum a vercrac elementy zona
    event.preventDefault()
    // event.preventDefault() y nra hamar a vorovhetev drop i func y chi ashxatum
    // qani vor zaglushka ka uje vren drac browseri komic  isk es event.prevent ov
    // karelia asel zaglushken hanum enq
    this.classList.add('dropZone--active')
}
function handlerDragleave (event) {
    //erb durs a galis  vercrac elementy zonaic

    this.classList.remove('dropZone--active')
}
function handlerDragover (event) {
    //ashxatuma erb vercnum es u anyndhat minchev en jamanaky erb elementy
    // ira zonayic durs ches hanum
    event.preventDefault()
    // event.preventDefault() y nra hamar a vorovhetev drop i func y chi ashxatum
    // qani vor zaglushka ka uje vren drac browseri komic  isk es event.prevent ov
    // karelia asel zaglushken hanum enq
}
function handlerDrop (event) {
    //erb elementy bac enq toxum u ynguma zonai mej es this y cuyca talis vor
    // elementi mej ynkav elementy
    // const dragFlag = event.dataTransfer.getData('dragItem')
    // //stex vercnum em data transferov state ic elementy
    // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
    // this.append(dragItem)
    //ete uzenanq jnjenq elem y karanq urish zona sarqenq jnjelu hamar
    // if (this.dataset.zone === '3') {
    //     dragItem.remove()
    // }

    if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement){
            console.log('erkusnel patkanum en nuyn cnoxin')
        }
    }
    this.append(draggedItem)
}