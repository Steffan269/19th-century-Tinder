class Profile {
    constructor(data) {
        Object.assign(this, data)
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    getProfileHtml() {
        const {name, avatar, age, bio} = this
        return `
        <div class="profile-card">
            <div class="profile-info">
                <h4 class="name-age"> ${name}, ${age}</h4>
                <p class="bio">${bio}</p>
            </div>
            <img class="avatar" src="${avatar}">
        </div>
    `
    }
}

export default Profile