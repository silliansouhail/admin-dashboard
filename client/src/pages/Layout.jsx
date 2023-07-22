import React, {useState} from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {useGetUserQuery} from "../redux/state/api"


const Layout = () => {
  const ifNotMobile = useMediaQuery("(min-width: 600px)")
  const [sidebar, setSidebar] = useState(true)

  const {userId} = useSelector(state=>state.global)

  const {data} = useGetUserQuery(userId)

  return (
    <Box display={ifNotMobile ? "flex":"block"} width="100%" height="100%">
          <Sidebar
            user = {data || {} }
            isNonMobile={ifNotMobile}
            drawerWidth= "250px"
            isSidebarOpen={sidebar}
            setIsSidebarOpen={setSidebar}
          />
        <Box flexGrow={1}>
            <Navbar
              user = {data || {} }
              isSidebarOpen={sidebar}
              setIsSidebarOpen= {setSidebar}
            />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout