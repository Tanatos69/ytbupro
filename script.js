



var btn = document.getElementById('btn');



btn.addEventListener('click', pv);

function pv() {
    ct.innerHTML = '<img src="img/' + i + '.jpg" alt="">'

    document.getElementById('nm').innerHTML = nme;
    document.getElementById('rs').innerHTML = rson;
    document.getElementById('start').innerHTML = st;
    document.getElementById('end').innerHTML = ed;
}

function hand(){
    const nme = document.getElementById('name').value;
    const rson = document.getElementById('reason').value;
    const st = document.getElementById('start').value;
    const ed = document.getElementById('end').value;

    localStorage.setItem("nm",nme);
    localStorage.setItem("rs",rson);
    localStorage.setItem("start time",st);
    localStorage.setItem("End time",ed);

}