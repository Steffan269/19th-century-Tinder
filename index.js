import Profile from "./Profile.js"
import profileData from "./data.js"
let currentProfileIndex = 0
let currentProfile = new Profile(profileData[currentProfileIndex])
const likeEl = document.getElementById("like")
const nopeEl = document.getElementById("nope")
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()

likeEl.innerHTML = `<img src="images/like.png">`
nopeEl.innerHTML = `<img src="images/nope.png">`

function render(){
    document.getElementById('profile').innerHTML = currentProfile.getProfileHtml()
}

function getNewProfile() {
    currentProfileIndex+=1 
    if(currentProfileIndex < profileData.length){
        currentProfile = new Profile(profileData[currentProfileIndex])
        render()
    } else {
        document.getElementById('main').innerHTML = `<div class="end-message">You ran out of people</div>`
        document.getElementById('actions').innerHTML = ''
    }
  
}



function yes() {
    likeEl.style.display = "block"
    setTimeout(()=>{
        currentProfile.setMatchStatus(true)
        getNewProfile()
        likeEl.style.display = "none"
    }, 1000)
}

function no() {
    nopeEl.style.display = "block"
    setTimeout(()=>{
        currentProfile.setMatchStatus(false)
        getNewProfile()
        nopeEl.style.display = "none"
    }, 1000)
}
