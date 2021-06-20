function time() {
    const date = new Date()
    const seconds = date.getSeconds();
    const secondsDegree = seconds*6 + 90;
    const minutes = date.getMinutes();
    const minutesDegree = minutes*6 + 90;
    const hours = date.getHours();
    const hoursDegree = hours*30 + 90;
    document.querySelector(".second-hand").style.transform = 'rotate('+secondsDegree+'deg)';
    document.querySelector(".min-hand").style.transform = 'rotate('+minutesDegree+'deg)';
    document.querySelector(".hour-hand").style.transform = 'rotate('+hoursDegree+'deg)';
}

setInterval(time , 1000);