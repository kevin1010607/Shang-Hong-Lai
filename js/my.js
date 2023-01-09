var all_tab = {};
var current_tab = {};

window.onload = () => {
    let tab = document.querySelectorAll('.tab');
    for(let i of tab){
        all_tab[i.id] = i;
        current_tab[i.id] = 0;
    }
}

openTab = (event, idx) => {
    let name = event.currentTarget.parentNode.parentNode.id;
    let links = all_tab[name].querySelector('.tab-all-links').children;
    let contents = all_tab[name].querySelector('.tab-all-contents').children;

    links[current_tab[name]].className = links[current_tab[name]].className.replace(' active', '');
    contents[current_tab[name]].className = contents[current_tab[name]].className.replace(' active', '');
    links[idx].className += ' active';
    contents[idx].className += ' active'

    current_tab[name] = idx;
}