import { useState, useContext, createContext} from "react";

const SidebarContext = createContext();

const useSidebar = ()=> useContext(SidebarContext);

const SidebarProvider = ({ children})=>{

    const [sidebar, setSidebar]= useState(true);
    
    const showSidebar=()=>{
        setSidebar(!sidebar);
    }

    return(
        <SidebarContext.Provider value={{showSidebar,sidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export {useSidebar, SidebarProvider}