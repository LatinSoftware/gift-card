
function OpenModal()  {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList = [];
    modalContainer.classList.add('one');
    document.querySelector("body").classList.add('modal-active');
}

function CloseModal () {
    console.log("close")
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.add('out');
    document.querySelector("#modal-container").classList.remove('modal-active');
}

function findActiveContent(contentList) {
    let activeContent = contentList.findIndex(e => {
        return e.classList.contains('active');
    })

    contentList[activeContent].classList.remove('active', 'fadeInRight');
    return activeContent
}

function SlideText(contentList) {
    let activeList = findActiveContent(contentList)

    console.log(`activeList ${activeList} -- contentList.length ${activeList}`)
    activeList++
    if(activeList === contentList.length){
        return CloseModal()
    }

    if (activeList === 10) {
        document.getElementById("next").innerText = "Finalizar";
    }
    contentList[activeList].classList.add('active', 'fadeInRight', 'animated')
}


export { OpenModal, CloseModal,  SlideText}