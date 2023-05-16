let login_id = document.getElementById("user_id");
let login_pw = document.getElementById("user_pw");
let login_button = document.getElementById("login");

login_button.addEventListener("click", login);

fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (logdata){
        console.log(logdata);
    })
    .catch(function (error){
        console.log(error);
    });

    JSON.stringify(user_data);

function login(logdata){
    console.log(logdata);
    console.log(logdata.id);
    console.log(logdata.pw);
}

function signin(){

}