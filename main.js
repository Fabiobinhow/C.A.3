// Script created to show the user from ramdom.me
    //Get API 
    function getRamdon(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {
       
        let author = data.results;
        
        let output = "</br></br>";
        console.log(data);
        author.forEach(function (user) {
            output += `
              
                    <div class="random">
                        <tr>
                        <th>DOB</th>
                        <td> ${user.dob.date}</td>
                        </tr>
                        <tr>
                        <th>AGE:</th>
                        <td>${user.dob.age}</td>
                        </tr>
                        <tr>
                        <th>EMAIL:</th>
                        <td> ${user.email} </td>
                        </tr>
                        <tr>
                            <th>GENDER:</th>
                            <td> ${user.gender}</td>
                        </tr>
                        <tr>
                            <th>CITY:</th>
                            <td> ${user.location.city} </td>
                        </tr>
                        <tr>
                            <th>COUNTRY:</th>
                            <td> ${user.location.country}</td>
                        </tr>
                        <tr>
                            <th>POSTCODE:</th>
                            <td> ${user.location.postcode} </td>
                        </tr>
                    
                   
      </div>
        `;
    });
    
    
    document.getElementById('output').innerHTML = output;
});

}
// gets the password
window.onload = ()=>{
   this.sessionStorage.setItem("password","1234");

}
var input = document.getElementsByName('input');
var login = document.getElementsById('log-in');
var form = document.querySelector('form');
form.onsubmit = () =>{return false}


login.onclick = ()=>{
  if ((input[0].value != "") && (input[1].value != ""))
   {
    if (input[0].value == sessionStorage.getItem(passord));
   }
   else
   {
     if (input[0].value == "")
      {
           input[0].nextElementSibling.textContent = "password is empty";
           setTimeout(()=>{
               input[1].nextElementSibling.textContent = "";
           },2000);
           }
       }
   }
   function passord(pass){
    return document.getElementById(pass);
  }
  //
  if(/[A-Z]/.test(password)){
    show_pass("uppercase")[0].classList.add("active");
} else {
    show_pass("uppercase")[0].classList.remove("active");
}

if(/[0-9]/.test(password)){
    show_pass("number")[0].classList.add("active");
} else {
    show_pass("number")[0].classList.remove("active");
}

if(/[^A-Za-z0-9]/.test(password)){
    show_pass("number,uppercase")[0].classList.add("active");
} else {    show_pass("number,uppercase")[0].classList.remove("active");
}