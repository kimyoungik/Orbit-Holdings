import './App.css';
import AppNavBar from './component/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import Orbit1 from './page/Orbit1';
import { Box, Typography } from '@mui/material';
import Videobg from './Video/BgVideo';
import Videobg2 from './Video/BgVideo1';
import Orbit2 from './page/Orbit2';
import Orbit3 from './page/Orbit3';
import Orbit4 from './page/Orbit4';
import Orbit5 from './page/Orbit5';
import Orbit6 from './page/Orbit6';
import TopButton from './component/TopButton'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function App() {

  const theme = useTheme();
  const isxs = useMediaQuery(theme.breakpoints.down('xs'));
  const ismd = useMediaQuery(theme.breakpoints.down('md'));
  const islg = useMediaQuery(theme.breakpoints.down('lg'));

  const linkStyle = {
    color: '#aaaaaa',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    color: '#aaaaaa',           // 클릭 후 글자색
  };

  return (
    <div className="App">
      <AppNavBar></AppNavBar>
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/orbit1' element={<Orbit1></Orbit1>} />
          <Route path='/orbit2' element={<Orbit2></Orbit2>} />
          <Route path='/orbit3' element={<Orbit3></Orbit3>} />
          <Route path='/orbit4' element={<Orbit4></Orbit4>} />
          <Route path='/orbit5' element={<Orbit5></Orbit5>} />
          <Route path='/orbit6' element={<Orbit6></Orbit6>} />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />

      <TopButton></TopButton>



      <Box
        sx={{
          mt: 0,
          height: '200px',
          bgcolor: '#282828',
          color: '#aaaaaa',
          display: 'flex',
          justifyContent: 'center',
          // position: 'relative',
          padding: 7,
          textAlign: 'left',

        }}
      >
        <Box sx={{ width: '30%', display: 'block', mr: ismd ? 10 : 0 }}>
          <Typography
            variant="h3"
            fontWeight='bold'
            fontSize={ismd ? 30 : 50}
          >
            Orbit Holdings
          </Typography>
        </Box>
        <Box sx={{ width: '20%', display: ismd ? 'none' : 'flex', flexDirection: 'column' }}>
          <Link to="/orbit1" style={linkStyle} activeStyle={activeLinkStyle}>회사소개</Link>
          <Link to="/orbit2" style={linkStyle} activeStyle={activeLinkStyle}>차익거래</Link>
          <Link to="/orbit3" style={linkStyle} activeStyle={activeLinkStyle}>김프봇</Link>
          <Link to="/orbit4" style={linkStyle} activeStyle={activeLinkStyle}>이용방법</Link>
          <Link to="/orbit5" style={linkStyle} activeStyle={activeLinkStyle}>봇설정</Link>
          <Link to="/orbit6" style={linkStyle} activeStyle={activeLinkStyle}>문의</Link>
        </Box>

        <Box>
          <Typography fontSize={ismd ? 12 : 15}>
            오르빗홀딩스
          </Typography>
          <Typography fontSize={ismd ? 12 : 15}>
            사업자등록번호. 797-86-02839
          </Typography>
          <Typography fontSize={ismd ? 12 : 15}>
            Address. 서울 강남구 논현로101길 12
          </Typography>
          <Typography fontSize={ismd ? 12 : 15}>
            Tel. 02-558-1245
          </Typography>
          <Typography fontSize={ismd ? 12 : 15}>
            Fax. 0504-278-2868
          </Typography>
          <Typography fontSize={ismd ? 12 : 15}>
            Email. orbit-ceo@orbitholdings.org
          </Typography>
        </Box>

      </Box>

    </div>
  );
}

export default App;

function Mainpage() {



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      style={{ width: '100%', color: 'white' }}
    >
      <Box>
        <Videobg />
        {/* <Box sx={playerContainerStyle}></Box> */}
        <Videobg2 />
      </Box>
    </motion.div>
  )
}