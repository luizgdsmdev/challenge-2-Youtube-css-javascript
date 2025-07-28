
export async function fetchVideosData() {
    const url = 'https://raw.githubusercontent.com/luizgdsmdev/challenge-2-Youtube-css-javascript/refs/heads/main/assets/data/videos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

