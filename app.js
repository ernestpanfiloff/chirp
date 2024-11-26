import { chirpsData } from "./data.js";

let feed = document.querySelector(".feed")

feed.innerHTML = `<div class="feed-item">
                <div class="avatar"> <img src="${chirpsData[0].profilePic}" alt=""></div>
                <div class="feed-content">
                    <p class="feed-content-name">${chirpsData[0].handle}</p>
                    <p class="feed-content-text">${chirpsData[0].chirpText}</p>
                    <div class="feed-actions">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-retweet"></i>
                    </div>
                </div>
            </div>`


            