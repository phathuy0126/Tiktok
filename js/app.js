"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const containerScroll = $('.containerScroll');
const navbar = $('.navbar');

const app = {
    tiktokPost: [
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'traval.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'hotgirl.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'traval.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'hotgirl.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        }
    ],
    renderPost: function () {
        const htmls = this.tiktokPost.map(function (post,index) {
            return `
                <div class="containerItem">
                    <div class="video">
                        <video src="video/${post.src}" data-indexPost=${index}></video>
                    </div>
                    <div class="interact">
                        <div class="interactItem avatar">
                            <div class="img">
                                <img src=${post.avatar} alt="">
                            </div>                        
                            <div class="check">
                                <i class="bx bx-plus"></i>
                            </div>
                        </div>
                        <div class="interactItem heart">
                            <i class="bx bxs-heart"></i>
                            <p>20.2k</p>
                        </div>
                        <div class="interactItem comment">
                            <i class="bx bx-message-rounded-dots"></i>
                            <p>215</p>
                        </div>
                        <div class="interactItem share">
                            <i class="bx bxs-share"></i>
                            <p>29</p>
                        </div>
                    </div>
                    <div class="info">
                        <strong class="name">@${post.name}</strong>
                        <p class="title">${post.title}</p>
                        <div class="music">
                            <i class="bx bxs-music"></i>
                            <marquee>${post.nameMusic}</marquee>
                            <div class="musicAvatar">
                                <img src=${post.avatarMusic} alt="">
                            </div>
                        </div>
                    </div>
                </div>
                `
        });
        const html = htmls.join("");
        containerScroll.innerHTML = html;
    },
    handleEvent: function () {
        const video = $$('.video video');

        let indexPost = 0;        
        // containerScroll.onscroll = function () {
        //     const distanceTop = containerScroll.scrollTop  
        //     console.log(distanceTop);               
        // }

        video.forEach(ele => {            
            const rectTop = ele.getBoundingClientRect().top;
            ele.onclick = function (e) {
                indexPost = e.target.dataset.indexpost;
                indexPost != e.target.dataset.indexpost ? ele.pause() : video[indexPost].play()                
                console.log(e.target.dataset.indexpost);
            }            
            console.log(ele.offsetHeight)            
        });
    },
    start: function () {
        this.renderPost();
        this.handleEvent();
    }
}
app.start();