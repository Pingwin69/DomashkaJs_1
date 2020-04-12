var styles = document.getElementById('styles');
var wrap = document.getElementById('wrapper');
var hiden = document.getElementById('knopka3');
var peka = document.getElementById('peka');

styles.onclick = function(){
  changes();
}
function changes(){
   wrap.classList.toggle('fon');
}

hiden.onclick = function(){
    hidden();
}
function hidden(){
    wrap.style.display = 'none';
    peka.style.display = 'flex';
}
 