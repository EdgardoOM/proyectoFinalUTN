document.addEventListener('click', e =>{
    if(e.target.matches('.panel-btn') || e.target.matches('.panel-btn *')) {
        document.querySelector('.panel').classList.toggle('is-active');
        document.querySelector('.panel-btn').classList.toggle('is-active');
    };
    if(e.target.matches('.panel-btn a')){
        document.querySelector('.panel').classList.remove('is-active');
        document.querySelector('.panel-btn').classList.remove('is-active');
    };
});