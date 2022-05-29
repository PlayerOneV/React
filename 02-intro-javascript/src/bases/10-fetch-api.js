// Fetch API
const apiKey = 'te9RiIb7Rfhro4zt8aNNprNqYNZIdcIY';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(res => res.json())
    .then(({ data }) => {
        //Desestructuramos la respuesta para solamente obtener la url
        const { url } = data.images.original;
        const img = document.createElement('img'); //Creamos un nuevo elemento HTML
        img.src = url;

        document.body.append(img); //Agregamos la img al body
    })
    .catch(console.warn);