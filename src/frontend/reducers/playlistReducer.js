const PlaylistReducer = (state,action)=>{
    switch(action.type){
        case "UPDATE_PLAYLIST":
            return {...state, playlists:action.payload }
        case "REMOVE_VIDEO_FROM_PLAYLIST":
            return {...state.playlist, playlist:action.payload }
        default:
            return state
    }
}

export {PlaylistReducer}