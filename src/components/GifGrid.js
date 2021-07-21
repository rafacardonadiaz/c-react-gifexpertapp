//import React , { useState, useEffect} from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ( { category }) => {
     
    // //const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);

    const { data:images, loading} = useFetchGifs( category );
    //console.log(data);

    // // hace que solo se ejecute una vez getGifs y no cada vez que cambien un componenete de la pagina.
    // useEffect ( () => {
    //     getGifs( category )
    //         .then ( setImages );
    // }, [ category ])

    //getGifs();

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map( img =>  (
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
