import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //Solo se hace la peticion http cuando se crea el componente y no cuando se vuelve a renderizar
    useEffect(() => {
        getImages();
    }, [])


    return {
        images : images,
        isLoading : isLoading
    }
}
