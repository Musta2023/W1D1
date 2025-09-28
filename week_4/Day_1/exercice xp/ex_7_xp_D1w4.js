// ((userName)=>{
//     const navbar = document.querySelector(".navbar")
//     const userDiv=document.createElement('div')
//     userDiv.classList.add('user-profile')
//     userDiv.innerHTML=`<span>Welcom ${userName}</span>
//     <img src="https://as1.ftcdn.net/v2/jpg/06/99/46/60/1000_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" alt="profile picture" width="50" height="30">`;
//     navbar.appendChild(userDiv)
// })("mustapha");
function addUserToNavbar(userName){
    const navbar=document.querySelector('.navbar')
    const userDiv=document.createElement('div')
    userDiv.className="user-profile"
     userDiv.innerHTML = `
    <span>Welcome ${userName}</span>
    <img src="https://as1.ftcdn.net/v2/jpg/06/99/46/60/1000_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg"
         alt="profile picture" width="30" height="30">
  `;
  navbar.appendChild(userDiv)

}

addUserToNavbar("Mustapha")
