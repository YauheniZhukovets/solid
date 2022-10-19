interface MusicApi {
    getTracks: () => void
}


class YandexMusicApi implements MusicApi {
    getTracks(): void {
    }
}

class SpotifyApi {
    getTracks(): void {
    }
}

class VKMusicApi {
    getTracks(): void {
    }
}

// абстракция(прослойка)
class MusicClient implements MusicApi {
    client: MusicApi

    constructor(client: MusicApi) {
        this.client = client
    }

    getTracks() {
        this.client.getTracks()
    }
}


export const MusicApp = () => {
    const API = new MusicClient(new YandexMusicApi())

    API.getTracks()
}