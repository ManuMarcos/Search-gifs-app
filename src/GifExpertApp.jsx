import { useState } from "react";
import { AddCategory , GifGrid} from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);
  
    const onAddCategory = (newCategory) => {
        const newCategoryUpper = newCategory.toUpperCase();
        if ( categories.includes(newCategoryUpper) ) return;
        //Spread : copia el array y le agrega uno
        setCategories([newCategoryUpper, ...categories]);
    }


    return (
    
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        />

        {categories.map( category => (
            <GifGrid 
                key={ category } 
                category = { category }
            />
        ))}

    </>
  )
}
