import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);

    // const handledAdd   = () =>{

    //     //setCategories([...categories,'HunterXHunter']);
    //     setCategories( cats => [...categories,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={ handledAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(categoria =>  (
                    // <li key={ categoria }>{ categoria }</li>
                    <GifGrid 
                        key = { categoria }
                        category = { categoria }
                    />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;