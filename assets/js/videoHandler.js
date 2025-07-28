import { fetchVideosData } from './api.js'
import { Video } from "./classes/videoClass.js"


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



// 4 is the limit for loading the video on frontend
loadRecomendedVideos(videosListFromJson.videos_top_line.videos_recomend, 3)


