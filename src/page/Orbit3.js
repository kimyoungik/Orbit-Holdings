import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import Bg1 from '../bgimg/orbitbg5.jpg'
import { motion } from "framer-motion";
import TetherGo from '../component/TetherGo'
import Repeat from "../component/Repeat";
import Caution1 from "../component/Caution1";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Orbit3() {

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
                            KIMP BOT
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
                    <Tab label="김프진입" sx={{ fontSize: issm ? 13 :  20 }} />
                    <Tab label="테더환산가진입" sx={{ fontSize: issm ? 13 :  20 }} />
                    <Tab label="반복거래" sx={{ fontSize: issm ? 13 :  20 }} />
                    <Tab label="주의사항" sx={{ fontSize: issm ? 13 :  20 }} />
                </Tabs>
            </Box>
            <motion.div className="motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', color: 'black' }}
            >
                <Box sx={{ mt: 20 }}>
                    {value === 0 && <KimpGo />}
                    {value === 1 && <TetherGo />}
                    {value === 2 && <Repeat />}
                    {value === 3 && <Caution1 />}
                </Box>
            </motion.div>
        </Box>
    )
};

export default Orbit3;




function KimpGo() {

    const theme = useTheme();
    const ismd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>KIMP BOT(김프거래)</Typography>
            <br></br>
            <br></br>
            <Box>
                <Typography variant="h5">작동방식</Typography>
                <Typography sx={{ m: ismd ? 3 : 7, }}>
                    김프봇의 모든 기능은 국내거래소와 해외거래소에서 지원하는 API 요청을 통하여 실행됩니다.
                    API 는 Application Program Interface의 약자로, 서로다른 컴퓨터 프로그램들끼리 의사소통을
                    할 수 있게 해주는 특별한 채널이며, 모든 암호화폐 거래소는 API 를 제공하여 유저가 프로그래밍
                    언어를 통하여 매수 매도 주문을 포함한 다양한 기능을 사용할 수 있도록 하고 있습니다. 따라서,
                    봇은 사용자의 API 키를 이용하여 매매를 중개하여 주기 때문에, 김프봇 사용자는 거래를 위해 자산을
                    타인의 지갑으로 옮길 필요가 없으며, 본인의 지갑에 자산을 보유한 채로 거래가 가능합니다.
                    봇이 사용자를 대신하여 매수, 매도, 조회 등 거래소의 다양한 기능을 이용할 수 있도록 사용자는
                    본인의 API 키를 발급받아 봇에 등록하여야 하며, 봇은 각 유저의 API 키를 이용하여 국내거래소와
                    해외거래소에서 매수, 매도 및 잔고 조회를 실행합니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    모든 거래는 시장가매매로 이루어지며, 현 시점 기준의 업비트 시장가 거래수수료는 0.05%, 바이낸스의
                    시장가 거래수수료는 0.04% 입니다. 따라서, 한 쌍의 진입과 탈출에서 발생하는 총 수수료는 진입금액의 0.18% 이며,
                    김프 거래를 통하여 최소 0.18% 이상의 차익을 발생시켜야 수익이 발생하게 됩니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    김프거래의 기준이 되는 김프는 김프가의 방식으로 계산하지 않습니다. 즉,
                    김프봇은 김프계산에 있어서 최종거래가격을 이용하지 않습니다. 김프가의 김프 계산 방법은
                    국내와 해외 양측 거래소의 최종거래가로 계산된 김프입니다. 이는 매우 일반적인 계산방법이며,
                    최종거래가란 아래의 이미지와 같이 거래소 웹사이트나 어플이케이션에서 대표적으로 표시되는 가격입니다.
                </Typography>
                <Box>
                    <img src="설명img/김프거래방식1.jpg" style={{ width: ismd ? '100%' : '50%'}}></img>
                </Box>
                <br></br>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    위와 같은 최종거래가격은, 마지막으로 체결된 가격을 의미하며, 누군가가 시장가로 호가창에 나와있는
                    매도물량을 매수하거나 매수호가에 매도했을 때 최종거래가격이 갱신됩니다.
                </Typography>
                <br></br>
                <Box>
                    <img src="설명img/김프거래방식2.jpg" style={{ width: ismd ? '100%' : '40%'}}></img>
                </Box>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    위의 사진과 같이, 누군가가 30,545,000 원에 나와있는 비트코인 매도물량을 시장가로 매수했다고 가정하면
                    그 순간 최종거래가격은 30,545,000원이 됩니다. 반대로, 누군가가 30,544,000 원에 나와있는 비트코인 매수호가에
                    시장가 매도를 하게되면 그 순간 최종거래가격은 30,544,000 원이 됩니다. 따라서 시장가로 체결된 마지막 가격이
                    최종거래가격이며, 최종거래가격은 매수최우선호가 혹은 매도최우선호가 둘 중 하나라는 것을 알 수 있습니다.
                    매수 혹은 매도 최우선호가로 나와있는 물량을 누군가가 시장가로 체결시켜주었을 때 갱신되는 가격이기 때문입니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    그렇다면 김프계산에 왜 최종거래가격을 이용하지 않을까요?
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    김프봇은 시장가로 매매하게 되며, 이 때의 시장가 매수 및 매도 가격은 거래소의 최종거래가격과 다를 확률이 높기 때문입니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    김프봇은 김프거래에 진입할 때에는 업비트에서는 시장가 매수거래를 진행하며, 바이낸스 USD-M 선물에서는
                    시장가 SHORT 거래를 진행하게 됩니다. 즉, 업비트에서의 시장가 매수에서는 매도 호가창 매물중에 가장 아래에
                    있는 매도최우선호가의 가격으로 코인을 구입하게 되며, 바이낸스에서의 시장가 공매도(SHORT) 거래에서는 공매수(LONG)
                    호가창 매물 중에 가장 위에 있는 매수최우선호가의 가격으로 공매도(SHORT)계약을 체결하게 됩니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    따라서, 김프거래 진입 시, 업비트에서는 매도최우선호가의 가격으로 체결되고, 바이낸스 USD-M 선물에서는
                    매수최우선호가의 가격으로 체결됩니다. 만약 최종거래가격을 보고 진입한다면, 실제로 체결되는 가격과 최종거래가격이
                    서로 다르기 때문에, 진입 전 계산했던 김프과 실제로 체결된 이후 체결된 가격으로 계산한 김프가 서로 다를 확률이 매우 높습니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    최종거래가격은 매도최우선호가 가격일수도 있고, 매수최우선호가 가격일수도 있기 때문입니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    위와 마찬가지로, 김프거래에서 탈출할 때에는, 업비트에서는 시장가 매도거래를 진행하며, 바이낸스 USD-M 선물에서는
                    시장가 LONG 거래를 진행합니다. 이때는 업비트에서 매수 호가창 매물중에 가장 위에 있는 매수최우선호가의
                    가격으로 코인을 매도하게 되며, 바이낸스에서는 공매도(LONG) 호가창 매물 중 가장 아래에 있는 매도최우선호가의 가격으로 매수계약을 체결하게 됩니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    김프봇은 업비트의 매도최우선호가와 바이낸스 USD-M 선물의 매수최우선호가로 계산한 김프를 진입김프라고 칭하며,
                    김프거래 진입을 위한 김프를 모니터링 할 때에는 각 코인의 진입김프를 계산하여 모니터링합니다.
                    반대로 탈출을 위한 김프를 모니터링 할 때에는 업비트의 매수최우선호가와 바이낸스 USD-M 선물의 매도최우선호가로
                    계산한 탈출김프를 계산하여 모니터링합니다. 그래야만 모니터링 과정에서 관측한 김프에 정확하게 체결시킬 수 있기 때문입니다.
                </Typography>
                <Typography sx={{ m: ismd ? 3 : 7 }}>
                    김프 진입과 탈출 거래는 순차적으로 실행되는 것이 아니라, 양 측 거래소에서 동시에 실행됩니다.
                </Typography>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Box>
                <Typography variant="h5">김프진입</Typography>
                <Typography sx={{ margin: 3 }} >
                    수동지정거래는 말그대로 진입값 탈출값을 사용자가 직접 입력하는 방식입니다. 우선 김치프리미엄 차트를 확인하여
                </Typography>
                <Typography sx={{ margin: 3 }} >
                    어느 시점이 진입/탈출하면 좋을지 확인한 후에 아래 그림과 같이 진입/탈출 시점의 김치프리미엄을 결정하여 수동으로
                </Typography>
                <Typography sx={{ margin: 3 }} >
                    입력하게 되며 입력값을 기준으로 진입/탈출 설정값의 그래프를 확인할 수 있습니다.
                </Typography>
                <Typography sx={{ margin: 3 }} >
                    확인 후 진입하고자 할 금액을(업비트기준) 입력 후 설정 등록하게 되면 Ar-Bot이 자동매매를 진행하게 됩니다.
                </Typography>
                <Box sx={{width: '100%'}}>
                    <img src="설명img/김프진입.jpg" style={{ width: ismd ? '100%' : '70%'}}></img>
                </Box>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>

    )
}