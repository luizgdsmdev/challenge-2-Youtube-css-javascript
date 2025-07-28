import { fetchVideosData } from './api.js'
import { Video } from "./classes/videoClass.js"
import { Shorts } from "./classes/shortsClass.js"


const videosListFromJson = await fetchVideosData(); 



function loadRecomendedVideos(videosList, limit){
    let videos__sectionRecomendedVideo = document.getElementById("videos__section-recomended-video");
    let htmlLoadRecomendedVideos;

    htmlLoadRecomendedVideos = videosList.slice(0, limit).map(video => {
        let newVideo = new Video(video.name, video.thumb, video.channel, video.channelIcon, video.videoLink, video.videoID)
        return `
            <li>
                <div id="latest-news-card" class="latest-news-card">
                    <img loading="lazy" id="latest-news-card-thumb" class="latest-news-card-thumb" alt="" src="${video.thumb}" >
                    <div id="latest-news-card-details" class="latest-news-card-details">
                        <div id="latest-news-card-details-text" class="latest-news-card-details-text">
                            
                            <div id="latest-news-card-details-text-tile" class="latest-news-card-details-text-tile">
                                <h3>${video.name}</h3>
                                <img loading="lazy" id="latest-news-card-thumb-dots-menu" class="latest-news-card-thumb-dots-menu" title="Options" alt="Options" src="./assets/svg/svg-three-dots.svg" >
                            </div>


                            <div id="latest-news-card-details-text-2" class="latest-news-card-details-text-2">
                                <img loading="lazy" id="latest-news-card-details-channel-img" class="latest-news-card-details-channel-img" alt="" src="${video.channelIcon}" >
                                <div id="latest-news-card-details-block" class="latest-news-card-details-block">
                                    <div id="latest-news-card-details-block-in" class="latest-news-card-details-block-in">
                                        <p>${video.channel}</p>
                                        <img loading="lazy" id="latest-news-card-details-verify-channel" class="latest-news-card-details-verify-channel" src="" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;
    });

    videos__sectionRecomendedVideo.innerHTML += htmlLoadRecomendedVideos.join("");
}

function loadShorts(shortsList, limit){
    let shorts__sectionRecomendedShorts = document.getElementById("shorts__section-recomended-shorts");
    let htmlLoadShorts;

    htmlLoadShorts = shortsList.slice(0, limit).map(shorts => {
        let newVideo = new Shorts(shorts.name, shorts.thumb, shorts.view, shorts.shortsLink)
        return `
            <li>
                <div id="shorts-card" class="shorts-card">
                    <img loading="lazy" id="shorts-card-thumb" class="shorts-card-thumb" alt="" src="${shorts.thumb}">
                    <div id="shorts-card-details" class="shorts-card-details">
                        <div id="shorts-card-details-text" class="shorts-card-details-text">

                            <div id="shorts-card-details-text-tile" class="shorts-card-details-text-tile">
                                <h3>${shorts.name}</h3>
                                <img loading="lazy" id="shorts-card-thumb-dots-menu" class="shorts-card-thumb-dots-menu" title="Options" alt="Options" src="./assets/svg/svg-three-dots.svg" >
                            </div>
                            
                            <p>1,4 mi de visualizações</p>
                        </div>
                    </div>
                </div>
            </li>
        `;
    });

    shorts__sectionRecomendedShorts.innerHTML += htmlLoadShorts.join("");
}


function loadlatestNews(latestNews, limit){
    let videos__sectionRecomendedLatestNews = document.getElementById("videos__section-recomended-latest-news");
    let htmlLatestNews;

    htmlLatestNews = latestNews.slice(0, limit).map(latestNew => {
        let latestNewlist = new Video(latestNew.name, latestNew.thumb, latestNew.channel, latestNew.channelIcon, latestNew.videoLink, latestNew.videoID)
        return `
            <li>
                <div id="latest-news-card" class="latest-news-card">
                    <img loading="lazy" id="latest-news-card-thumb" class="latest-news-card-thumb" alt="" src="${latestNew.thumb}" >
                    <div id="latest-news-card-details" class="latest-news-card-details">
                        <div id="latest-news-card-details-text" class="latest-news-card-details-text">
                            
                            <div id="latest-news-card-details-text-tile" class="latest-news-card-details-text-tile">
                                <h3>${latestNew.name}</h3>
                                <img loading="lazy" id="latest-news-card-thumb-dots-menu" class="latest-news-card-thumb-dots-menu" title="Options" alt="Options" src="./assets/svg/svg-three-dots.svg" >
                            </div>


                            <div id="latest-news-card-details-text-2" class="latest-news-card-details-text-2">
                                <img loading="lazy" id="latest-news-card-details-channel-img" class="latest-news-card-details-channel-img" alt="" src="${latestNew.channelIcon}" >
                                <div id="latest-news-card-details-block" class="latest-news-card-details-block">
                                    <div id="latest-news-card-details-block-in" class="latest-news-card-details-block-in">
                                        <p>${latestNew.channel}</p>
                                        <img loading="lazy" id="latest-news-card-details-verify-channel" class="latest-news-card-details-verify-channel" src="" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;
    });

    videos__sectionRecomendedLatestNews.innerHTML += htmlLatestNews.join("");
}



// 4 is the limit for loading the video on frontend
loadRecomendedVideos(videosListFromJson.videos_top_line.videos_recomend, 3);
loadShorts(videosListFromJson.shorts, 6);
loadlatestNews(videosListFromJson.videos_top_line.latest_news, 3);


