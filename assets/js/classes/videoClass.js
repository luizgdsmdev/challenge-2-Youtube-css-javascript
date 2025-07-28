export class Video{
    name;
    thumb;
    channel;
    channelIcon;
    videoID;

    constructor(name, thumb, channel, channelIcon, videoID){
        this.name = name;
        this.thumb = thumb;
        this.channel = channel;
        this.channelIcon = channelIcon;
        this.videoID = videoID;
    }
}