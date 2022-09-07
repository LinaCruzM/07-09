const ValidatedString = (cad) =>{
    //Ternario (If else)
    let response = (cad.length > 3) ? true : false;
    return response;
 }

 const ValidatedAdverage = (value) =>{
    let result = (value >=0 && value <=5) ? true : false;
    return result;
 }

 export {ValidatedString,ValidatedAdverage};