import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import Bg1 from '../bgimg/orbitbg1.jpg'
import { motion } from "framer-motion";
import Kbank from "../component/Kbank"
import Binanace from "../component/Binance"
import BotSetting from "../component/BotJoin"
import Caution2 from "../component/Caution2"
import { Link } from "react-router-dom";
import BotJoin from "../component/BotJoin";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Orbit4() {

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
            <div className='bg3' style={{ display: 'flex', alignItems: 'center', }}>
                <div className='bg-overlay3' style={{ backgroundImage: 'url(' + Bg1 + ')' }}></div>
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
                            INSTALLATION
                        </Typography>
                    </Box>
                </motion.div>
            </div>
            <Box>
                <Box

                >
                    <Tabs value={value} onChange={handleChange} centered
                        sx={{
                            "& .MuiTab-root": { mr: ismd ? '7px' : '20px' },
                            borderBottom: "1px solid #dcdcdc ",
                        }}
                    >
                        <Tab label="업비트" sx={{ fontSize: issm ? 13 : 20 }} />
                        <Tab label="케이뱅크" sx={{ fontSize: issm ? 13 : 20 }} />
                        <Tab label="바이낸스" sx={{ fontSize: issm ? 13 : 20 }} />
                        <Tab label="ArBot가입" sx={{ fontSize: issm ? 13 : 20 }} />
                        <Tab label="주의사항" sx={{ fontSize: issm ? 13 : 20 }} />
                    </Tabs>
                </Box>

                <motion.div className="motion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', color: 'black' }}
                >
                    <Box sx={{ marginTop: 20 }}>
                        {value === 0 && <Upbit />}
                        {value === 1 && <Kbank />}
                        {value === 2 && <Binanace />}
                        {value === 3 && <BotJoin />}
                        {value === 4 && <Caution2 />}
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
};

export default Orbit4;


function Upbit() {

    const steps = Array.from({ length: 7 }, (_, index) => ({
        image: `설명img/업비트설정${index + 1}.jpg`
    }));

    const descriptions = [
        '1. 먼저 케이뱅크가 없으신 분들은 케이뱅크 계좌 개설후 신분증준비 하시고 스마트폰에서 업비트 앱을 다운로드후 앱 실행해주세요.',
        '2. 이미지에서 처럼 순서대로 클릭하고 정보를 입력해주세요.',
        '3. 이미지에서 처럼 은행인증을 통해 입금자 앞에 숫자3개 입력후 PIN비밀번호를 설정해주세요.',
        '4. 다음은 생체인증은 지문을 통한 인증인데 필수가 아니니 다음에 버튼 클릭하시면 됩니다. 그리고 닉네임 설정후 PIN비밀번호 입력 하시면 됩니다.',
        '5. 첫번째 이미지에서 고객환인 완료후 거래하기 클릭후 정보를 입력해주시면 됩니다. 영문이름 여권에 나온 그대로 입력해주시면됩니다.(바이낸스와 정보가 꼭 같아야됩니다.)',
        '6. 신분증 촬영하고 본인명의 계좌로 인증하시면 고객확인 완료! (계좌인증시 케이뱅크로 하시면 원화출금 바로 가능 아니신 분들은 케이뱅크 개설로 이동)',
        '7. 첫번째 이미지와 같이 업비트앱에서 오른쪽 하단 내정보 누르고, 회원등급 누르고 2채널 인증 들어가셔서 네이버인증 카카오페이 인증 둘중에 하나로 인증해주시면 됩니다.',
    ];

    const rows = [];
    for (let i = 0; i < steps.length; i += 3) {
        const row = steps.slice(i, i + 3);
        rows.push(row);
    }

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));



    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>
                업비트 설정
            </Typography>
            <br />
            <br />
            <br />
            {rows.map((row, rowIndex) => (
                <Box key={rowIndex}>
                    {row.map((step, stepIndex) => (
                        <Box key={stepIndex}>
                            <Typography sx={{ m: 3, fontSize: 20 }}>
                                {descriptions[rowIndex * 3 + stepIndex]}
                            </Typography>
                            <img src={step.image} style={{ width: ismd ? '90%' : '50%'}} />
                        </Box>
                    ))}

                </Box>
            ))}
            <Typography sx={{ m: 3, fontSize: 20 }}>
                8. 카카오페이 인증시 이미지와 같이 인증 활성화 누르시고 카톡에서 확인하기 누르시면 2채널 인증 완료됩니다!
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                여기까지 완료 하시고 케이뱅크 계좌 개설 또는 이체한도를 푸실려면  케이뱅크로 가시면됩니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}