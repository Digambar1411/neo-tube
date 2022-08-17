import { SidebarProvider ,useSidebar} from "./Sidebar-context";
import { ThemeProvider, useTheme } from "./theme-context";
import { useVideos, VideosProvider } from "./video-context";
import { useCategory, CategoryProvider} from "./category-context";
import { AuthProvider, useAuth} from "./auth-context";
import { useLikedVideos, LikedVideosProvider} from "./likes-context"
import{ useWatchLaterVideos, WatchLaterVideosProvider} from "./watchLater-context"
import { useHistory , HistoryProvider} from "./history-context"
import { usePlaylist, PlaylistProvider } from "./playlist-context"

export{ 
    SidebarProvider,  useSidebar,
    useWatchLaterVideos, WatchLaterVideosProvider,
    ThemeProvider, useTheme, 
    useVideos, useCategory, 
    CategoryProvider, VideosProvider, 
    AuthProvider, useAuth, 
    useLikedVideos, LikedVideosProvider,
    useHistory , HistoryProvider,
    usePlaylist, PlaylistProvider
}
