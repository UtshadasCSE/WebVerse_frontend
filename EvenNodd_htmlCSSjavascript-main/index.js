function Check(){
  var number=Number(document.getElementById('number').value)


  if(number==0){
    alert("Given a value")
  }
  else if(number%2==0){
    document.getElementById('result').innerHTML="It's a Even Number!"
  }
 
 else if(number<0){
    document.getElementById('result').innerHTML="It's a Negative Number(^|^)"

  }
  else(
    document.getElementById('result').innerHTML="It's a odd number!"
  )
}