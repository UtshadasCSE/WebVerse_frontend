
function Agee(){
    let day=document.getElementById("dayIn").value;
    let month=document.getElementById("monthIn").value;
    let year=document.getElementById("yearIn").value;

    let date = new Date();
    let day2=date.getDate();
    let month2=1 + date.getMonth();
    let year2=date.getFullYear();
    let mon_th=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(day>day2){
        day2=day2+mon_th[month2-1];
        month2=m2-1;
    }
    if(month>month2){
        month2=month2+12;
        year2=year2-1;
    }
    let d=day2-day;
    let m=month2-month;
    let y=year2-year;
    document.getElementById("birthDate").innerHTML='Your age is '+y+' years '+m+ ' months ' +d+ ' days';
}