let select = function(){
    let selectHeader = document.querySelectorAll('.nav__select-header');
    let selectItem = document.querySelectorAll('.nav__select-item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.nav__select'),
        currentText = select.querySelector('.nav__select-current');
        /* console.log(currentText); */
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();