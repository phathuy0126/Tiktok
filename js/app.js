"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const container = $('.container');
const containerScroll = $('.containerScroll');
const navbar = $('.navbar');
containerScroll.style.height = window.innerHeight - 60 + 'px';
const app = {
    tiktokPost: [
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
            src: 'girl2.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'girl3.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'girl4.mp4',
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
            src: 'girl5.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'girl6.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'girl7.mp4',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'man1.mp4',
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
                            <video src=./video/${post.src}></video>
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
                                <div class="nameMusic">
                                    <p>${post.nameMusic}</p>
                                </div>
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
        const iPlayPause = $('#playPause');
        const hearts = $$('.interact .heart');
        const nameMusics = $$('.info .music .nameMusic p');
        const home = $('.navbar .home');
        const allow = $('.allow');
        const overlayLoader = $('.overlayLoader');
        containerScroll.onscroll = function () {
            reLoad();
        }
        const reLoad = function () {
            iPlayPause.style.visibility = 'hidden'
            video.forEach(ele => {
                const rectTop = ele.getBoundingClientRect().top;
                if (Math.floor(rectTop) === 0 || Math.round(rectTop) === 0) {
                    ele.play();
                    ele.onended = function (e) {
                        e.target.play();
                    }
                    handleNameMusic(true)
                    ele.onclick = function (e) {
                        if (e.target.paused) {                            
                            handleNameMusic(true)
                            e.target.play();
                            setTimeout(() => {
                                iPlayPause.style.visibility = 'hidden'
                            }, 200);
                        } else {                            
                            handleNameMusic(false)
                            e.target.pause();
                            iPlayPause.style.visibility = 'visible'
                        }
                    }
                    iPlayPause.onclick = function () {
                        handleNameMusic(true)
                        ele.play();
                        setTimeout(() => {
                            iPlayPause.style.visibility = 'hidden'
                        }, 200);
                    }
                    //allow
                    allow.onclick = function () {
                        allow.remove();
                        ele.play();
                    }
                    //kiểm tra video load
                    // if (ele.networkState != 1) {
                    //     overlayLoader.style.display = 'flex';
                    // }
                    ele.ontimeupdate = function (e) {                        
                        allow.remove();
                        if (e.target.networkState == 1) {
                            overlayLoader.style.display = 'none';
                            console.log('đã tải xong video');                            
                        } else {
                            overlayLoader.style.display = 'flex';
                            console.log('chưa tải video xong');
                        }
                    }
                } else {
                    ele.pause();
                    ele.currentTime = 0;
                }
            });
        }
        reLoad();
        //handle play pause nameMusic
        function handleNameMusic(dr) {
            nameMusics.forEach(nameMusic => {
                const aniNameMusic = nameMusic.animate([
                    // keyframes
                    { transform: 'translateX(0%)' },
                    { transform: 'translateX(40%)' },
                    { transform: 'translateX(0%)' }
                ], {
                    // timing options
                    duration: 5000,
                    iterations: Infinity
                });
                dr ? aniNameMusic.play() : aniNameMusic.pause();
            });
        }
        // thả tim     
        hearts.forEach((heart) => {
            heart.onclick = function () {
                // handle toggle click                
                heart.querySelector('i').style.color === 'red' ?
                    heart.querySelector('i').style.color = 'white' :
                    heart.querySelector('i').style.color = 'red';
            }
        });
        home.onclick = function () {
            window.location.reload();                                        
        }
    },
    start: function () {
        console.warn('cảnh báo virus xâm nhập');
        console.error('vui lòng tắt console ngay lập tức')
        this.renderPost();
        this.handleEvent();
    }
}
app.start();



