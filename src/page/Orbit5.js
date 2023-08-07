import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import Bg1 from '../bgimg/orbitbg7.jpg'
import { motion } from "framer-motion";
import BotSetting from "../component/BotSetting";
import Balancing from "../component/Balancing";
import Caution3 from "../component/Caution3";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Orbit5() {

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
                            BOT SETTING
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
                    <Tab label="AIP 설정" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="봇 작동설정" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="밸런싱" sx={{ fontSize: issm ? 13 : 20 }} />
                    <Tab label="주의사항" sx={{ fontSize: issm ? 13 : 20 }} />
                </Tabs>

                <motion.div className="motion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', color: 'black' }}
                >
                    <Box sx={{ marginTop: 20 }}>
                        {value === 0 && <ApiSetting />}
                        {value === 1 && <BotSetting />}
                        {value === 2 && <Balancing />}
                        {value === 3 && <Caution3 />}
                    </Box>
                </motion.div>

            </Box>
        </Box>
    )
};

export default Orbit5;

function ApiSetting() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>
                API 설정
            </Typography>
            <br />
            <br />
            <br />
            <Typography sx={{ m: 3, fontSize: 20 }}>
                업비트와 바이낸스에서 제공하는 API를 통해 계정의 포지션과 잔고를 조회하고 주문을
                실행하기 위해서는 사용하시고자 하는 계정의 API KEY가 필요합니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                현재 김프트레이딩봇은 국내 거래소로 업비트를 이용하고, 해외 선물거래소로 바이낸스를 이용하므로, 업비트의 API 키와 바이낸스의 API 키를 등록해 주셔야
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                김프트레이딩봇을 통해 자동매매기능을 이용하실 수 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                API 키는 모든 거래소가 동일하게, Access key와 Secret key 1 쌍으로 이루어져 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                Access key 는 ID와 같은 역할을 하고, Secret key 는 비밀번호 역할을 한다고 생각하면 됩니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                우선 업비트의 API 키 등록과정부터 설명드리겠습니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>

            <Typography sx={{ m: 3, fontSize: 20 }}>
                1. 업비트 거래소에서 마이페이지 클릭 후 Open API 관리를 클릭합니다.
            </Typography>
            <img src="설명img/api1.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                2. Open API 관리 페이지에서 보안을 위해 자산조회, 주문조회, 주문하기만 체크한 이후 '특정IP에서만 실행'을 체크하고 IP 주소입력창에
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                (저희 Ar-Bot봇을 이용하시는 분들은 말씀해주시면 IP 발급해드립니다.) 입력
            </Typography>
            <img src="설명img/api2.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                3. 등록이 정상적으로 이루어지면, Open API Key가 발급됩니다. 업비트 설명과 같이, Secret Key 는 확인을 누르게 되면 더 이상 확인할 수 없으므로, 따로 꼭 메모 해두시기 바랍니다.
            </Typography>
            <img src="설명img/api3.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                다음은 바이낸스의 API Key 등록과정을 설명드리겠습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *바이낸스 api키 발급전 선물계정 비활성화 이시면 선물 퀴즈를 하고 발급 진행해주시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                선물 퀴즈를 하지않고 api키 발급시 정상적으로 진행이 안될 수 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                (선물계정 활성화시 레퍼럴68833443 입력하시면 한달동안 수수료 할인)
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                1. 바이낸스에 로그인 하신 후, 계정정보를 확인하는 창에서 API Management 배너를 클릭합니다.
            </Typography>
            <img src="설명img/api4.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                2. System generated API key 선택 next 클릭!
            </Typography>
            <img src="설명img/api5.jpg" style={{ width: ismd ? '95%' : '20%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                3. Label API key to proceed 창에 API key 의 이름을 설정합니다. 아무 이름이나 상관없습니다. 그리고 Create API 버튼을 눌러주세요.
            </Typography>
            <img src="설명img/api6.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                4. Create API 버튼을 누르면 API Key를 생성하기 이전에 본인인증 과정이 진행됩니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                본인인증 과정을 진해해 줍니다.
            </Typography>
            <img src="설명img/api7.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                5. 본인인증이 성공하면, 다음과 같이 API Key가 생성됩니다. 최초 생성 시에는, 아래 사진과 같이 Enable Reading (계정정보조회) 기능만 체크되어 있으므로,
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                Enable Futures (선물거래허용) 을 체크하기 위해 Edit restrictions 버튼을 클릭 해 줍니다.
            </Typography>
            <img src="설명img/api8.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                6. 보안을 위해 Enable Reading (계정정보조회), Enable Futures (선물거래) 만 체크를 해 주고, Restrict access to trusted IPs only 도 체크한 이후,
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                IP입력 칸에 바이낸스도 마찬가지로 Ar-Bot에서 발급 받으신 IP를 입력 해주시면 됩니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                그리고 업비트와 마찬가지로 Secret Key 는 시간이 지나면 **(별표) 처리되므로,따로 꼭 메모 하시기 바랍니다.
            </Typography>
            <img src="설명img/api9.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                7. Enable Futures (선물거래) 체크 ip입력 후 save를 클릭하여 저장합니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                이로써 모든 API 키 등록과정이 끝났습니다. API키 등록시 정보조회와 주문기능만 체크하는 이유는, 해당 API 키를 사용하여 출금을 할 수 없도록 하여 보안성을 높이기 위함입니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                그럼에도, 주문자체에 대한 위험성은 존재하므로, 복사한 API 키들을 절대로 외부에 노출하지 않도록 주의하세요.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                이제 업비트,바이낸스 API키를 Ar-Bot 매매페이지에 등록해 주시면 됩니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                1. Ar-Bot 매매페이지에서 좌측 메뉴 봇 작동설정 들어가시고
            </Typography>
            <img src="설명img/api10.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                2. 좌측 업비트 API키 등록, 우측 바이낸스 API키 등록해 주시면 됩니다.
            </Typography>
            <img src="설명img/api11.jpg" style={{ width: ismd ? '95%' : '50%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                * 완료후 자산현황을 확인해 주시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                만약 자산현황이 뜨지 않는다면 API키 또는 IP를 제대로 입력하셨는지 확인 하시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *여기까지 모두 완료 하시고 만원만 테스트 진행해주시기 바랍니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}