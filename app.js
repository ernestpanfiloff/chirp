import { chirpsData } from "./data.js";

let feed = document.querySelector(".feed")
const chirpingButton = document.querySelector(".chirping-button")
const chirpingInput = document.querySelector(".chirping-input")


document.addEventListener("click", function (e) {
    if (e.target.dataset.like) {
        handleLike(e.target.dataset.like)
    } else if (e.target.dataset.rechirp) {
        handleRechirp(e.target.dataset.rechirp)
    } else if (e.target.dataset.comment) {
        handleComment(e.target.dataset.comment)
    }
})

function handleLike(chirpId) {
    for (let chirp of chirpsData) {
        if (chirpId === chirp.uuid && chirp.isLiked === false) {
            chirp.isLiked = true
            chirp.likes++
            renderFeed()
        } else if (chirpId === chirp.uuid && chirp.isLiked === true) {
            chirp.isLiked = false
            chirp.likes--
            renderFeed()
        }
    }
}

function handleRechirp(chirpId) {
    for (let chirp of chirpsData) {
        if (chirpId === chirp.uuid && chirp.isRechirped === false) {
            chirp.isRechirped = true
            chirp.rechirps++
            renderFeed()
        } else if (chirpId === chirp.uuid && chirp.isRechirped === true) {
            chirp.isRechirped = false
            chirp.rechirps--
            renderFeed()
        }
    }
}

function handleComment(chirpId) {
    document.getElementById(`replies-${chirpId}`).classList.toggle("hidden")
}

function getFeedHtml() {
    let feedHtml = ``

    chirpsData.forEach(function (chirp) {
        let liked = ""
        let rechirped = ""

        if (chirp.isLiked) {
            liked = "red-color"
        }

        if (chirp.isRechirped) {
            rechirped = "green-color"
        }

        let repliesHtml = ""

        if (chirp.replies.length > 0) {
            for (let reply of chirp.replies) {
                let index = 0
                console.log(reply)
                repliesHtml += `<div class="feed-item-reply" id="replies-${chirp.uuid}">
                    <div class="avatar"> <img src="${reply.profilePic}" alt=""></div>
                        <div class="feed-reply-content">
                            <p class="feed-reply-content-name">${reply.handle}</p>
                            <p class="feed-reply-content-text">${reply.chirpText}</p>
                
                        </div>
                </div>`
            }

        }

        feedHtml += `<div class="feed-item" id="${chirp.uuid}">
                <div class="avatar"> <img src="${chirp.profilePic}" alt=""></div>
                <div class="feed-content">
                    <p class="feed-content-name">${chirp.handle}</p>
                    <p class="feed-content-text">${chirp.chirpText}</p>
                    <div class="feed-actions">
                        <i class="feed-actions-item like-action fa-solid fa-heart ${liked}" data-like="${chirp.uuid}"> ${chirp.likes}</i>
                        <i class="feed-actions-item fa-solid fa-retweet ${rechirped}" data-rechirp="${chirp.uuid}"> ${chirp.rechirps}</i>
                        <i class="feed-actions-item comment-action-${chirp.uuid} fa-solid fa-comment" data-comment="${chirp.uuid}"> ${chirp.replies.length}</i>
                    </div>
                    
                <div id="replies-${chirp.uuid}" class="hidden">
                    ${repliesHtml}
                </div>
                    
                </div>

            </div>`
    })

    return feedHtml
}


// Clear feed and render it
function renderFeed() {
    document.querySelector(".feed").innerHTML = getFeedHtml()
}
renderFeed()
