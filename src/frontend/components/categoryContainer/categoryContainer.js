import "./categoryContainer.css";
import { useCategory } from "../../contexts";

const CategoryContainer=()=>{

    const { categories} = useCategory();

    return(
        <>
            <div className="main-header">
                {categories && categories.map(({categoryName,_id})=><button key={_id} className="category-btn">{categoryName}</button>)}
                        
            </div>
        </>
    )
}

export { CategoryContainer}