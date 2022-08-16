import { HistoryReducer} from "../reducers/historyReducer"
import { useContext, createContext, useReducer} from "react";

const HistoryContext = createContext()

const useHistory =()=> useContext(HistoryContext);

const HistoryProvider =({children})=>{
      
    const [historyState, historyDispatch] = useReducer(HistoryReducer, {history:[]})
       
    return(
        <HistoryContext.Provider value={{historyState, historyDispatch}}>{children}
        </HistoryContext.Provider>
    )
}

export {useHistory, HistoryProvider}
