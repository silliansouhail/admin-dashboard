import {CssBaseline,ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {BrowserRouter as Router ,Navigate,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import Geography from './pages/Geography';
import Overview from './pages/Overview';
import Daily from './pages/Daily';
import Monthly from './pages/Monthly';
import Breakdown from './pages/Breakdown';
import Admins from './pages/Admins';
import Performance from './pages/Performance';


function App() {
const mode = useSelector((state)=>state.global.mode)
const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>} >
              <Route path="/" element={<Navigate to='/dashboard' replace />} />
              <Route path="/dashboard" element={<Dashboard/> }/>
              <Route path='/products' element={<Products/>} />
              <Route path='/customers' element={<Customers/>} />
              <Route path='/transactions' element={<Transactions/>} />
              <Route path='/geography' element={<Geography/>} />
              <Route path='/overview' element={<Overview/>} />
              <Route path='/daily' element={<Daily/>} />
              <Route path='/monthly' element={<Monthly/>} />
              <Route path='/breakdown' element={<Breakdown/>} />
              <Route path='/admin' element={<Admins/>} />
              <Route path='/performance' element={<Performance/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App; 