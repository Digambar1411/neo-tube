const HistoryReducer = (state,action)=>{
    switch(action.type){
        case "UPDATE_HISTORY":
            return {...state, history:action.payload }
       default:
         return state
    }
}

export {HistoryReducer}