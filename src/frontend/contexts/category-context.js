import { useState, useContext, createContext,useEffect} from "react";
import axios from "axios";

const CategoryContext = createContext();

const useCategory =()=>useContext(CategoryContext);

const CategoryProvider =({children})=>{

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        const getCategories = async ()=>{
            const response = await axios.get("api/categories");
            setCategories(response.data.categories);
        }

        getCategories();

    },[])

    return(
        <CategoryContext.Provider value ={{categories}}>
            {children}
        </CategoryContext.Provider>
    )

}


export {useCategory, CategoryProvider}