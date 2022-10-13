import { useState } from 'react';
import { GifGrid, AddCategory} from './components';


export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Messi']);

    const onAddCategory = ( newCategory )=> {

        if(categories.includes(newCategory)) return;
          
        setCategories([...categories, newCategory ])
    }

    return(
        <>
           
                <h1>GifExpertApp</h1>
            
                
                <AddCategory onNewCategory={ onAddCategory } />
                
                {   
                    categories.map(( category ) => (   
                        
                        <GifGrid category={category} key={category}/>
                        
                    ))
                }
                
                
             
        </>
    )

} 