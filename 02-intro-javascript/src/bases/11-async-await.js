const getImagen = async () => {
    try {
        const apiKey = 'te9RiIb7Rfhro4zt8aNNprNqYNZIdcIY';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        // console.log(data);

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
}

getImagen();