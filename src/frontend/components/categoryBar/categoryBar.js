import "./categoryBar.css";
import { useCategory} from "../../contexts";

const CategoryBar=()=>{

    const { categories,  state :{category}, dispatch} = useCategory();
   
    return(
        <>
            <div className="main-header">
                {/* {categories && categories.map(({categoryName,_id})=><button onClick={()=>getCategoryVideos(categoryName)}key={_id} className="category-btn">{categoryName}</button>)} */}

                {categories && categories.map(({categoryName,_id})=>
                <div key={_id}>
                    <input 
                        className="category-input" 
                        type="radio" 
                        checked={category && category===categoryName}
                        id={categoryName}
                        onChange={()=>
                            dispatch({type:"CATEGORY", payload:categoryName})
                        }
                    /> 
                    <label className="category-btn" htmlFor={categoryName}>
                        {categoryName}
                    </label>
                </div>)}
                
            </div>
        </>
    )
}

export { CategoryBar}