
  function ValidationEvent() {
    
    var name = document.getElementById("name").value;
    var list = document.getElementById("list").value;
    var contact = document.getElementById("contact").value;
    
    
    // Conditions
    if (name != '' && list != '' && contact != '') {
    if (list.match(listReg)) {
    if (document.getElementById("day").checked || document.getElementById("night").checked) {
    if (contact.length == 10) {
    return true;
    } else {
    return false;
    }
    } else {
    alert("You must select DayTime.....!");
    return false;
    }
    } else {
    alert("Or NightTime...!");
    return false;
    }
    } else {
    return false;
    }
    }
  