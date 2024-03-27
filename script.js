

function show() {
    // making variables
    let pfp = document.querySelector(".profile-picture").value
    let username = document.querySelector(".main-frame2 .name").value
    let postimage = document.querySelector(".postimage").value
    let likes = document.querySelector(".likes").value
    let comment = document.querySelector(".comments").value

    // checking to see if all inputs are filled
    if (pfp == "" || username == "" || postimage == "" || likes == "" || comment == "") {
        alert("please input every field")
    }
    else {
        // profile picture
        document.querySelector(".main-frame .pfp").style.backgroundImage = `url(${pfp}.png)`

        // username
        document.querySelector(".main-frame .name").innerHTML = username

        // post image
        document.querySelector(".main-frame .sec-2").style.backgroundImage = `url(${postimage}.png)`

        // number of likes
        document.querySelector(".main-frame .sec-4 p").innerHTML = `${likes} likes`

        // comment username
        document.querySelector(".main-frame .sec-5 .username").innerHTML = `${username}
        <img src="verified.png" width="20px">`

        // comment
        document.querySelector(".main-frame .comment").innerHTML = comment



        // toggle visibility
        document.querySelector(".main-frame").classList.toggle("hide")


    }

}

