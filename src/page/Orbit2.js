import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Bg1 from '../bgimg/orbitbg4.jpg'
import { motion } from "framer-motion";
import Hedging from "../component/Hedging";
import FundingFee from "../component/FundingFee";
import Leverage from "../component/Leverage";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Orbit2() {

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <div className='bg2' style={{ display: 'flex', alignItems: 'center', }}>
                <div className='bg-overlay2' style={{ backgroundImage: 'url(' + Bg1 + ')' }}></div>
                <motion.div
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
                            ARBITRAGE
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
                    <Tab label="김치프리미엄" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="양방향 헷징" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="레버리지" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="펀딩피" sx={{ fontSize: issm ? 13 : 20 }} />
                </Tabs>
            </Box>
            <motion.div className="motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', color: 'black' }}
            >
                <Box sx={{ mt: 20 }}>
                    {value === 0 && <Kimp />}
                    {value === 1 && <Hedging />}
                    {value === 2 && <Leverage />}
                    {value === 3 && <FundingFee />}
                </Box>
            </motion.div>

        </Box>
    )
};

export default Orbit2;


function Kimp() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        let value = window.scrollY;
        

        if (value > 100 && value < 1200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const [isVisible2, setIsVisible2] = useState(false);

    const handleScroll2 = () => {
        let value2 = window.scrollY;

        if (value2 > 700 && value2 < 2000) {
            setIsVisible2(true);
        } else {
            setIsVisible2(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll2);

        return () => {
            window.removeEventListener('scroll', handleScroll2);
        };
    }, []);

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>KIMP(김치프리미엄)</Typography>
            <br></br>
            <Box sx={{ m: 3 }}>
                <Typography>
                    가상자산은 거래소 단위로 거래가 이뤄지기 때문에 같은 종류의 가상자산일지라도 거래소별로 가격 차이가 있을 수 있습니다. 김치 프리미엄(Kimchi premium)은
                    한국에서 거래되는암호화폐의 시세가 해외 거래소 시세와 비교해 얼마나 높은가를 뜻하는 단어로 전 세계 흐름보다 국내의 높은 수요  때문에 발생하고 있습니다.
                    또한, 외국에 비해 국내에는 채굴업자가 부족하여 제한적 코인공급 되지 않아 국내 거래소의 코인 가격이 해외보다 더 높은 프리미엄이 발생됩니다.
                    여기에 외국인들이 국내 거래소에서 거래하는 것이 불가능하다 보니 외국에서 유입되는 것도 한계가 있어 국내 거래소의 경우 타 국가의 거래소보다 가산자산의 시세가 높게 형성되고 있습니다.
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    top: isVisible ? '50px' : "300px",
                    opacity: isVisible ? 1 : 0,
                    transition: "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
            >
                <img src="설명img/김치프리미엄.jpg" style={{ width: ismd ? '90%' : '70%' }}></img>
            </Box>
            <br></br>
            <br></br>
            <Box>
                <Box sx={{ display: ismd ? 'blcok': 'flex' }}>
                    <Box
                        sx={{
                            position: "relative",
                            top: '100px',
                            left: isVisible2 ? 0 : "-200px",
                            opacity: isVisible2 ? 1 : 0,
                            transition: "left 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        }}
                    >
                        <img src="설명img/김프생성.jpg" style={{ width: ismd ? '90%' : '70%' }}></img>
                    </Box>

                    <Box
                        sx={{
                            width: ismd ? '70%' : '30%',
                            position: 'relative',
                            top: ismd ? '150px' : '130px',
                            right: issm ? '-70px' : ismd ? '-180px' :'100px',
                        }}
                    >
                        <Typography sx={{ fontSize: ismd ? 25 : 25 }}>
                            실제 업비트, 바이낸스 차트를 같은 날 같은 시각에 차트를 가져와 시세차익이
                            벌어지며 김프가 형성되는 모습이다. 바이낸스 거래량으로 급격하게 하락하는
                            구간에서 업비트는 거래량을 따라가지 못하고 차익 김프가 발생하게 된다.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
