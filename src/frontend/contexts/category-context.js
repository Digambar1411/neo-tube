import { useState, useContext, createContext, useEffect, useReducer} from "react";
import axios from "axios";
import { categoryFilterReducer } from "../reducers"

const CategoryContext = createContext();

const useCategory =()=>useContext(CategoryContext);

const CategoryProvider =({children})=>{

    const [categories, setCategories] = useState([]);
    const [ state, dispatch] = useReducer(categoryFilterReducer, {category: "All"})

    useEffect(()=>{
        const getCategories = async ()=>{

            try{
            const response = await axios.get("/api/categories");
            setCategories(response.data.categories);
            }
            catch(error){
                console.log(error)
            }
            
        }
        getCategories();

    },[])

   

    return(
        <CategoryContext.Provider value ={{categories, state, dispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

export { useCategory, CategoryProvider}
