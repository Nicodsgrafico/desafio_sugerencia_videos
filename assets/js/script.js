const iife = (() => {
    const srcMultimedia = (url, id) => {
        let elemento = document.getElementById(`${id}`);
        elemento.setAttribute('src', url);
    };

    return {
        play: (url, id) => {
            srcMultimedia(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set url(url) {
        this._url = url;
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    playMultimedia() {
        iife.play(this.url, this._id)
    }
    setInicio(tiempo) {
        //obtener la url
        let nuevaUrl = `${this.url}?start=${tiempo}`;
        //Reemplazar la existente por la que define el inicio
        this.url = nuevaUrl;
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/sgdPlDG1-8k", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/ayi6VfCKBcA", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/fXDWcRNet6E", "series")
musica.setInicio("27")
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();