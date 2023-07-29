function Time(){
    let currTime=new Date();
    let show=currTime.toLocaleString();
    document.getElementById('show').innerHTML=show;

}