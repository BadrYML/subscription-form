function redirect() {
    window.location.href = "confirmation.html";
   }


    var lName = document.getElementById("lastname");
    var fName = document.getElementById("firstname");
    var Email = document.getElementById("email");
    var Phone = document.getElementById("phone");


if(lName === '' || lName == null) {
    document.getElementById("lNameOutput").innerHTML = "*This is a required Input";
    document.getElementById("lName" ).style.borderBottom = "1px solid #DE0068";
}
if(fName === '' || fName == null) {
    document.getElementById("fNameOutput").innerHTML = "*This is a required Input";
    document.getElementById("fName" ).style.borderBottom = "1px solid #DE0068";
}
if(Email === '' || Email == null) {
    document.getElementById("emailOutput").innerHTML = "*This is a required Input";
    document.getElementById("Email" ).style.borderBottom = "1px solid #DE0068";
}
if(Phone === '' || Phone == null) {
    document.getElementById("phoneOutput").innerHTML = "*This is a required Input";
    document.getElementById("Phone" ).style.borderBottom = "1px solid #DE0068";
}

function CheckForLast(){
    const x = document.getElementById("lastname").  value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("lastnameoutput").innerHTML = "*The Name must note containe any numbers";
        document.getElementById("lastname" ).style.border = "1px solid #DE0068";
    }
    else if(x.length < 30 && x.length > 3){
        document.getElementById("lastname").style.border = "1px solid #59CE8F";
        document.getElementById("lastnameoutput").innerHTML = "";
    } else {
        document.getElementById("lastnameoutput").innerHTML = "*Your Name must be between 3 and 30 characters";
        document.getElementById("lastname" ).style.border = "1px solid #DE0068";
    }
}

function CheckForFirst(){
    const x = document.getElementById("firstname").value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("firstnameoutput").innerHTML = "* The Name must not contain any numbers";
        document.getElementById("firstname" ).style.border = "1px solid #DE0068";
    }
    else if(x.length < 30 && x.length > 3){
        document.getElementById("firstname").style.border = "1px solid #59CE8F";
        document.getElementById("firstnameoutput").innerHTML = "";
    } else {
        document.getElementById("firstnameoutput").innerHTML = "* Your Name must be between 3 and 30 characters";
        document.getElementById("firstname").style.border = "1px solid #DE0068";
    }
}

function CheckForMail(){
    const x = document.getElementById("Email").value;
   alert(lName.value+" "+fName.value);
    if(x == (lName.value+"."+fName.value+"@ofppt.ma")){
        document.getElementById("Email").style.border = "1px solid #59CE8F";
        document.getElementById("mailoutput").innerHTML = ""; alert("hello");
    } else {
        document.getElementById("mailoutput").innerHTML = "*The Email Must be in this formula : LastName.FirstName@ofppt.ma";
        document.getElementById("Email").style.border = "1px solid #DE0068";alert("invalide");
    }
}

function CheckForNumber(){
    const x = document.getElementById("phone").value;
    let y = new RegExp('[0-9]','g');
    if(y.test(x) == true && x.length == 10 && x[0] == 0 && ( x[1] == 5 || x[1] == 6 || x[1] == 7)){
        
        document.getElementById("phone").style.border = "1px solid #59CE8F";
        document.getElementById("phoneoutput").innerHTML = "";
    } else {
        document.getElementById("phoneoutput").innerHTML = "* Please enter a valid p    hone number";
        document.getElementById("phone").style.border = "1px solid #DE0068";
    }
}

function numberCheck(){
    let x = document.getElementById("phone").value;
    let y = new RegExp('[0-9]','g');
    if(y.test(x) == true && x.length == 10 && x[0] == 0 && ( x[1] == 5 || x[1] == 6 || x[1] == 7)){
        document.getElementById("phone").style.borderBottom = "1px solid #59CE8F";
        document.getElementById("phoneoutput").innerHTML = "";
    } else if(x.length > 10){
        document.getElementById("phoneoutput").innerHTML = "* The Phone number Must containe 10 numbers";
        document.getElementById("phone").style.borderBottom = "1px solid #DE0068";
    }
     else {
        document.getElementById("phoneoutput").innerHTML = "* The Phone number must containe 10 caracters & commence with 06 or 07 or 05";
        document.getElementById("phone").style.borderBottom = "1px solid #DE0068";
    }
}

if(man.checked || woman.checked) {
    document.querySelector(".gender").style.borderBottom ="1px solid #59CE8F";
    genderOutput.innerHTML = "";
}
else {
    document.querySelector(".gender").style.borderBottom ="1px solid #DE0068";
    genderOutput.innerHTML = "choose your gender Please !";
}

function groupCheck(){
    let Group1 =  document.getElementById("101");
    let Group2 =  document.getElementById("102");
    let Group3 =  document.getElementById("103");
    let Group4 =  document.getElementById("104");
    let Group5 =  document.getElementById("105");
}

if(Group1.checked || Group2.checked || Group3.checked || Group4.checked || Group5.checked ){
    document.getElementById('groupOutput').innerHTML = "valide";
    document.querySelector('.clubs').style.borderBottom = "green";
}
else {
    document.getElementById('groupOutput').innerHTML = "choose your group Please !";
}

function clubsCheck(){
    let clubs =  document.getElementById("clubchoice");
    let counter = 0;
        for(let x=0; x< clubs.options.length; x++) {
            if(clubs.options[x].selected == true ) {
                counter++;
            }
        } 
        if(counter>=1 && counter<=3) {
            document.getElementById("clubchoice").style.borderBottom = "1px solid #59CE8F";
            document.getElementById("cluboutput").innerHTML = "";
        } else {
            document.getElementById("clubchoice").style.borderBottom = "1px solid #DE0068";
            document.getElementById("cluboutput").innerHTML = "*3 Clubs Maximum"; 
        }
}

if (varLastName === true &&
    varFirstName === true &&
    varEmail === true &&
    varEmail === true &&
    varPhone === true &&
    varClubs === true) {

    window.location.replace("confirmation.html");
}
