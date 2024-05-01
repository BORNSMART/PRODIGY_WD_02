var timer=document.querySelector('.timer');
var togglebtn=document.querySelector('.start');
var resetbtn=document.querySelector('.reset');
var lap_box=document.querySelector('.lap_box');
var lapBtn=document.querySelector('.lap');
var watch=new stopwatch(timer);
function start()
{
    togglebtn.textContent='stop';
    togglebtn.classList.start("on");
    watch.start();

}
function stop(){
    togglebtn.textContent='start';
    togglebtn.classList.start("on");
    watch.stop();
}
function stopWhenOn(){
    togglebtn.textContent='Start';
    togglebtn.classList.toggle("on");
    watch.stop();
    watch.reset();

}
togglebtn.addEventListener('click',function(){
    watch.isOn ? watch.lapOn():watch.reset();
});
lapBtn.addEventListener('click',function(){
    watch.isOn ? watch.lapOn():watch.lapOff();
});