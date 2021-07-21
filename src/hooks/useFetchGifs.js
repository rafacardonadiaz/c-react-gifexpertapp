import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // // hace que solo se ejecute una vez getGifs y no cada vez que cambien un componenete de la pagina.
    useEffect ( () => {
        getGifs( category )
            .then ( imgs => {


                    console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    });

            })
    }, [ category ])

    return state;
}