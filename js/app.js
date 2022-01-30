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
        const htmls = this.tiktokPost.map(function (post) {
            return `
                <div class="containerItem">
                    <div class="video">
                        <video src="video/${post.src}"></video>
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
        const _this = this;
        const video = $$('.video video');
        const iPlayPause = $('#playPause')

        containerScroll.onscroll = function () {
            reLoad();
        }        
        const reLoad = function () {
            iPlayPause.style.visibility = 'hidden'
            video.forEach(ele => {
                const rectTop = ele.getBoundingClientRect().top;
                if (Math.floor(rectTop) === 0) {
                    ele.play();
                    ele.onended = function (e) {
                        e.target.play();
                    }
                    ele.onclick = function (e) {
                        if (e.target.paused) {
                            e.target.play();
                            setTimeout(() => {
                                iPlayPause.style.visibility = 'hidden'
                            }, 200);
                        } else {
                            e.target.pause();
                            iPlayPause.style.visibility = 'visible'
                        }
                    }
                } else {
                    ele.pause();
                    ele.currentTime = 0;
                }
            });
        }
        reLoad();
    },
    start: function () {
        this.renderPost();
        this.handleEvent();
    }
}
app.start();