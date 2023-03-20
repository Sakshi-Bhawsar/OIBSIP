const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
  //  console.log(numberTemp);

  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  //celsius to fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
    return fahrenheit;
  }
  // fahrenheit to celsius
  const fahToCel = (fah) =>{
    let celsius = ((fah - 32) * 5 / 9).toFixed(1);
    return celsius;
  }

  
  if(valueTemp=='cel'){
    document.getElementById("result").innerHTML = celToFah(numberTemp) + "°fahrenheit";
  } 
  else{
    document.getElementById("result").innerHTML = fahToCel(numberTemp) + "°celsius";
  }
}
