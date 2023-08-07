
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Bg1 from '../bgimg/orbitbg3.jpg'
import { motion } from 'framer-motion'
import ScrollMotion from "../component/Motion";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Development from "../component/Development";

function Orbit1() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <div className='bg' style={{ display: 'flex', alignItems: 'center', }}>
                <div className='bg-overlay' style={{ backgroundImage: 'url(' + Bg1 + ')' }}></div>
                <motion.div className="motion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', color: 'white' }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            fontWeight='bold'
                            letterSpacing={3}
                            fontSize={50}
                        >
                            COMPANY
                        </Typography>
                    </Box>
                </motion.div>
            </div>
            <Box>
                <Tabs value={value} onChange={handleChange} centered
                    sx={{
                        "& .MuiTab-root": { mr: '20px' },
                        borderBottom: "1px solid #dcdcdc "
                    }}
                >
                    <Tab label="Ar-Bot" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="Development" sx={{ fontSize: issm ? 13 : 20 }} />
                </Tabs>
            </Box>
            <Box sx={{ mt: 20, mb: 10 }}>

                {value == 0 && <Company1></Company1>}
                {value == 1 && <Development></Development>}

            </Box>

        </Box>
    )
};

export default Orbit1;

function Company1() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));
    const isxl = useMediaQuery(theme.breakpoints.down('xl'));

    // 스크롤에 따른 이미지 보이기/숨기기 상태를 관리하는 state
    const [showImage, setShowImage] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        // 여기에서 스크롤 위치 등을 확인하여 showImage 값을 변경
        const scrollY = window.scrollY;
        const threshold = 200; // 이미지가 나타나는 스크롤 위치 조건값
        setShowImage(scrollY > threshold);
    };

    useEffect(() => {
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // useEffect는 최초 렌더링 시에만 실행됨


    return (
        <Box>
            <motion.div className="motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', color: 'black' }}
            >
                <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>기업개요</Typography>
            </motion.div>
            <Box sx={{ display: islg ? 'grid' : 'flex', mt: 1 }}>

                <Box sx={{ width: islg ? '100%' : '50%', mt: 10 }}>

                    <Box
                        sx={{
                            width: ismd ? '80%' : '80%',
                            margin: islg ? 5 : 20,
                            bgcolor: '#148CFF',
                            opacity: showImage ? 1 : 0,
                            transition: 'opacity 1s',
                        }}
                    >
                        <img src="설명img/회사소개.jpg"
                            style={{
                                width: '100%',
                                position: 'relative',
                                bottom: showImage ? 25 : 0,
                                left: showImage ? 35 : 0,
                                transition: 'all 1.5s',

                            }}></img>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: islg ? '70%' : '40%',
                        margin: islg ? 10 : 20,
                        textAlign: 'left',
                        opacity: showImage ? 1 : 0,
                        transition: 'opacity 1s',
                    }}
                >
                    <Typography variant="h5">
                        차익거래 프로그램 전문기업
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography>
                        프로그램 차익거래 시스템을 연구개발하는 과정에서 코인의 차익, 즉 김치프리미엄을 발견되었고
                        현물시장과 선물시장의 차익거래 시스템을 코인 현물시장과 코인 선물 시장에 적용시켜
                        이를 간편하게 거래할 수 있는 차익거래 자동 매매봇을 개발하게 되었습니다.
                    </Typography>
                    <br></br>
                    <Typography>
                        차익거래란 과거로부터 역사가 깊은 무위험 수익 거래 기법을 의미합니다.
                        많은 분들이 안전자산과 같은 개념으로 포트폴리오에 추가하시지만 수익률은 안전자산 대비 월등하고
                        꾸준한 수익을 투자자에게 안겨 주고 있는 거래 기법입니다.
                    </Typography>
                    <br></br>
                    <Typography>
                        시장의 특성으로 보아 주식시장보다 코인 시장의 변동성이 더 크고 꾸준하기 때문에
                        코인 차익거래는 그동안 있었던 수많은 차익거래 중에서도 높은 수익률을 자랑합니다.
                    </Typography>
                    <br></br>
                    <Typography>
                        시장 규모를 보았을 때 이미 코인 시장의 거래량이 주식시장의 거래량을 추월 한지
                        오래이며 코인 차익거래 또한 그 영향을 받아 시장규모가 확대되었습니다.
                    </Typography>
                    <br></br>
                    <Typography>
                        이 결과 수많은 차익거래 투자자들이 코인 차익거래로 배를 옮겨 타고 있으며
                        저희 프로그램은 이에 발맞춰 차익거래 투자자분들이 더욱더 편리하고 간편하게
                        24시간 차익거래를 하실 수 있게끔 양방향 헷징을 통한 무위험 중수익 김치프리미엄
                        차익거래 봇을 출시하게 되었습니다.
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}