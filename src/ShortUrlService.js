import axios from 'axios'

export class ShortUrlService {
    URl = 'http://localhost/'

    shortUrl(longUrl) {
        return axios.put(this.URl + 'api/short/url', {url: longUrl});
    }

    getTopMostVisited() {
        return axios.get(this.URl + 'api/top/100/most/visited/urls');
    }
}
