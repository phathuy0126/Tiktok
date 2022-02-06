"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const windowLoad = $('.windowLoad');
const containerScroll = $('.containerScroll');
const navbar = $('.navbar');

const app = {
    tiktokPost: [
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/3fe66b6ddd0e5dcff9fd08ba4c0fe46a/61f972c9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/514fe38609374cb784c2818b00bf0cdf/?a=1988&br=2374&bt=1187&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThIBn.lXq&l=202202011149490102452480471D95B939&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY3bjU6ZnBoOjMzZjgzM0ApZGY6OGhkZGVoNzs2Ozk4OWdkbzVkcjRvZTJgLS1kL2NzczA2NTQvLi4xLi42LTUvNDA6Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/eac87e9e15eb50b4fdf250a84d46c86d/61f97387/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dd5288582539421389f77981a13621b9/?a=1988&br=4580&bt=2290&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2hrZDQ6ZjQ8OjMzZjgzM0ApaDdmNjgzOTs3Nzk6NzlpN2cvcnFfcjRvamVgLS1kL2Nzc2NhXjUuMy5eNDNjMzE1YmA6Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/b78f9dc5f27e0752946db5e05b69f251/61f9738a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/161944e09e4542bca8b3ed08494e7721/?a=1988&br=1932&bt=966&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lzM2g6ZjN5NzMzZjgzM0ApNDU7Zmk2ZjxkNzplOGZlOWdnaGAxcjQwZ2xgLS1kL2Nzc14zMDYyMzEyXmFfNTUtM146Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/ae7cf6d35d822a9659141d3b2f9fe85a/61f973b5/video/tos/alisg/tos-alisg-pve-0037/73494227a8794db4b15ce15db2384e95/?a=1988&br=2138&bt=1069&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hweGVyOnd1NjMzODgzNEApODhlZjg6aTxpNzhmPDtoNGdgbDFgZ2NoNTNgLS1kLy1zcy0vLV9eMDJgLy0zYjIwLWA6Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/6d192fd5f9f7982558c880d596e8c7de/61f97386/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2f85b0020b62445fa39f6a67bdd8373e/?a=1988&br=3516&bt=1758&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am53czc6Znd5OTMzZjgzM0ApZzxlODY6NWU6N2c1aWZnZWcwZ2tqcjRvYWBgLS1kL2NzczQtLS41MF81LzMvLTM1Ni46Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/3fbe7e280f916e9ace345bd71fa29230/61f97386/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ba6cdb550a114f7dab247879680df672/?a=1988&br=2314&bt=1157&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY0NWU6ZjV0ODMzZjgzM0ApaTc2aWZoN2U3N2UzNGZmZmducWAxcjRfZ3NgLS1kL2Nzcy82YTEwYF9hMTJjNTY2Yy86Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/1752ab1a338021366c123d2d2614c7c9/61f97385/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/e9a83d02612641d496fe7553217b2b12/?a=1988&br=2746&bt=1373&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThqXn.lXq&l=202202011153000102450571842191ABDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29tbTY6ZjVnOTMzZjgzM0ApZDk7OWZmZGVnN2U8NTs2NGdiYTVxcjRvbWBgLS1kL2Nzc2BhMDQuLTY2NGIzXzI0LWA6Yw%3D%3D&vl=&vr=',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj',
            nameMusic: 'nhạc nền: Nhạc này hơi chill',
            avatarMusic: 'https://yt3.ggpht.com/ytc/AAUvwngVidpfS3gfW_OycU0IsosjQurTmGYk34Cb9iJD=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Phát Huy',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            src: 'https://v16-webapp.tiktok.com/c1b8b56059fb60aa7bd3bb3a4692120e/61f97433/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c72af2063c79402caa84b7b84e2e0ff3/?a=1988&br=2766&bt=1383&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7Thjwn.lXq&l=2022020111554801024401221416937E70&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVmOjM6ZndqOjMzZjgzM0ApMzVnODUzZmVmNzNoOGRkOWdjbGppcjRfc2JgLS1kL2Nzc2I1MDQwNC0wYV81Ni8wYzY6Yw%3D%3D&vl=&vr=',
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
                            <video src=${post.src}></video>
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
                    { transform: 'translateX(-60%)' },
                    { transform: 'translateX(100%)' }
                ], {
                    // timing options
                    duration: 4000,
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
    },
    start: function () {
        this.renderPost();
        this.handleEvent();
    }
}
app.start();
// $('.allow').onclick = function () {    
//     $('.allow').remove();
// }
window.onload = function () {
    windowLoad.remove();  
}


