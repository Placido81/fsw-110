function myValues(){
    const fyi = prompt(["FirstName" + "Last Name" + "age"+"Gender" + "Location" + "allergies"]);
    
};
    
    userInfo.addEventListener("submit",(event) => {
        alert(`
        Name: ${userInfo.fname.value} ${userInfo.lname.value}
        Age: ${userInfo.age.value}
        Gender: ${userInfo.gender.value}
        Location: ${userInfo.state.value}
        Dietary Restrictions: ${dietAdjust()}`)

    })
    const checkedInputs = [];
    function dietAdjust(){
    for(let i = 0; i < userInfo.allergies.length; i++){
        if(userInfo.allergies[i].checked){
            checkedInputs.push(userInfo.allergies[i].value);
        }
    }
    
    return(checkedInputs)
}