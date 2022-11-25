
function OpenModal()  {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList = [];
    modalContainer.classList.add('one');
    document.querySelector("body").classList.add('modal-active');
}

function CloseModal () {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.add('out');
    document.querySelector("#modal-container").classList.remove('modal-active');
    document.querySelector(".modal-content").classList.add('active');
}

function findActiveContent(contentList) {
    let activeContent = contentList.findIndex(e => {
        return e.classList.contains('active');
    })

    if(activeContent < 0)
        return 0;

    contentList[activeContent].classList.remove('active', 'fadeInRight', 'animated');
    return activeContent
}

function SlideText(contentList) {
    let activeList = findActiveContent(contentList)
    activeList++
    if(activeList === contentList.length){
        document.getElementById("next").innerText = "Continuar";
        activeList = 0;
        return CloseModal()
    }
    
    if (activeList === 10) {
        document.getElementById("next").innerText = "Finalizar";
    }
    contentList[activeList].classList.add('active', 'fadeInRight', 'animated')
}


export { OpenModal, CloseModal,  SlideText}