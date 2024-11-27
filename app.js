import { chirpsData } from "./data.js";

let feed = document.querySelector(".feed")
const chirpingButton = document.querySelector(".chirping-button")
const chirpingInput = document.querySelector(".chirping-input")



document.addEventListener("click", function (e) {
    if (e.target.dataset.like) {
        console.log(e.target.dataset.like)
    } else if (e.target.dataset.rechirp) {
        console.log(e.target.dataset.rechirp)
    } else if (e.target.dataset.comment) {
        console.log(e.target.dataset.comment)
    }
})



function getFeedHtml() {
    let feedHtml = ``

    chirpsData.forEach(function (chirp) {
        feedHtml += `<div class="feed-item" id="${chirp.uuid}">
                <div class="avatar"> <img src="${chirp.profilePic}" alt=""></div>
                <div class="feed-content">
                    <p class="feed-content-name">${chirp.handle}</p>
                    <p class="feed-content-text">${chirp.chirpText}</p>
                    <div class="feed-actions">
                        <i class="feed-actions-item fa-regular fa-heart" data-like="${chirp.uuid}"> ${chirp.likes}</i>
                        <i class="feed-actions-item fa-solid fa-retweet" data-rechirp="${chirp.uuid}"> ${chirp.rechirps}</i>
                        <i class="feed-actions-item fa-regular fa-comment" data-comment="${chirp.uuid}"> ${chirp.replies.length}</i>
                    </div>
                </div>
            </div>`
    })

    return feedHtml
}

function renderFeed() {
    document.querySelector(".feed").innerHTML = getFeedHtml()
}

renderFeed()