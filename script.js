const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp-diff').value;


  
    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fahToCell = (fah) =>{
        let Celcius = Math.round((fah-32)*5/9);
        return Celcius;
    }



    let result;

    if(tempSelected == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `=${result}°Fahrenheit`;
    }
    if(tempSelected == 'fah'){
        result =  fahToCell(numberTemp);
        document.getElementById('resultContainer').innerHTML= `=${result}°Celcius`;
    }

}