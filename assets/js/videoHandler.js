import { fetchVideosData } from './api.js'
import { Video } from "./classes/videoClass.js"


const videosListFromJson = await fetchVideosData(); 


let videos__sectionRecomendedVideo = document.getElementById("videos__section-recomended-video");
function loadRecomendedVideos(videosList){
    let htmlLoadRecomendedVideos;
    htmlLoadRecomendedVideos = videosList.map(video => {
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

loadRecomendedVideos(videosListFromJson.videos_top_line.videos_recomend)






// <li>
//     <div id="latest-news-card" class="latest-news-card">
//         <img loading="lazy" id="latest-news-card-thumb" class="latest-news-card-thumb" alt="" src="https://i.ytimg.com/vi/Ec08db2hP10/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBTHZ6Bn7fqu2Nf57CwgtOahVJoIQ" >
//         <div id="latest-news-card-details" class="latest-news-card-details">
//             <div id="latest-news-card-details-text" class="latest-news-card-details-text">
                
//                 <div id="latest-news-card-details-text-tile" class="latest-news-card-details-text-tile">
//                     <h3>Djo - 'End of Beginning' (live at Laneway 2025)</h3>
//                     <img loading="lazy" id="latest-news-card-thumb-dots-menu" class="latest-news-card-thumb-dots-menu" title="Options" alt="Options" src="./assets/svg/svg-three-dots.svg" >
//                 </div>


//                 <div id="latest-news-card-details-text-2" class="latest-news-card-details-text-2">
//                     <img loading="lazy" id="latest-news-card-details-channel-img" class="latest-news-card-details-channel-img" alt="" src="https://yt3.ggpht.com/cmycB_xqU9BRUqBeDxft-hZZGOi0jiX-u0rj1d7W_8sDlPxxWZk-9Qxiafbns3qdiIuG3BRqZQ=s68-c-k-c0x00ffffff-no-rj" >
//                     <div id="latest-news-card-details-block" class="latest-news-card-details-block">
//                         <div id="latest-news-card-details-block-in" class="latest-news-card-details-block-in">
//                             <p>triple j</p>
//                             <img loading="lazy" id="latest-news-card-details-verify-channel" class="latest-news-card-details-verify-channel" src="" alt="">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </li>
