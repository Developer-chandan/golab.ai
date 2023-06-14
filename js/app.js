// const startBtn = document.getElementById('start_btn');
// const loadingModal = document.getElementById('loading_modal');
// const userName = document.getElementById('user_name');
// const userId = document.getElementById('user_id');
// const registerBtn = document.getElementById('registerBtn');
// const logInPage = document.getElementById('log_InPage');
// const forgotPassDiv = document.getElementById('forgot_password_div');
// const forgotPassLink = document.getElementById('forgotPassword');
// const loginInputDiv = document.getElementById('loginInputDiv');
// const backToLogIn = document.getElementById('backToLogIn');
// const userProfileIcon = document.getElementById('user_profile_icon');
// const userProfileLinks = document.getElementById('user_profil_links_wrap');






//   startBtn.addEventListener('click',()=>{
//     setTimeout( hideModal =  () =>{
//       loadingModal.classList.add('d-none');
//       loadingModal.classList.remove('fade');
//       window.location.assign(
//           "golab.html"
//         );
      
  
//   }, 3000)
  
//   })
  

//   forgotPassLink.addEventListener('click', () => {
//     loginInputDiv.classList.add('d-none');
//     forgotPassDiv.classList.remove('d-none');
    
//   })





  
//   backToLogIn.addEventListener('click', () =>{
//     forgotPassDiv.classList.add('d-none');
//     loginInputDiv.classList.remove('d-none');
  
  
//   })



//   userProfileIcon.addEventListener('click', () =>{
//     userProfileLinks.classList.toggle('visibility-hidden');
  
  
//   })





// // const url = 'http://54.209.147.213/wssdedsasree';
// // fetch(url)
// // .then(res => res.json())
// // .then(data => loadData(data))




// // const loadData = userdata =>{
// //     userName.innerText = `User: ${userdata.user.Name}`
// //     userId.innerText = `User ID: ${userdata.session_end}`
// //     const aiUrl = userdata.link;

// //     fetch(aiUrl)
// //   .then(response => response.text())
// //   .then(htmlContent => {
// //     console.log(htmlContent);
// //   })
// //   .catch(error => {
// //     console.log("An error occurred:", error);
// //   });
// // }


let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 




