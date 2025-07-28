export class Video{
    name;
    thumb;
    channel;
    channelIcon;
    videoLink;
    videoID;

    constructor(name, thumb, channel, channelIcon, videoLink, videoID){
        this.name = name;
        this.thumb = thumb;
        this.channel = channel;
        this.channelIcon = channelIcon;
        this.videoLink = videoLink;
        this.videoID = videoID;
    }
}