import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function BotSetting() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>봇 작동설정</Typography>
            <Typography sx={{ m: 5, fontSize: 15 }}>
                청산감지 : 바이낸스에서는 선물 포지션의 미실현손실이 약 80%에 도달하면 API 및 유저의 이 메일,
                휴대폰으로 경고메시지를 발신합니다. AR_BOT 또한 각 유저의 API 를 활용하여 해당 경고 메세지를
                수신할 수 있으며, 마진콜 모니터링 설정을 해 놓을 경우, 메세지를 수신하게 되면 해당 유저에게
                텔레그램으 로 경고메세지를 발송하거나, 해당 포지션에 대한 자동청산을 실행하도록 할 수 있습니다.
                해당기능은 격리 모드일때만 작동하며, 바이낸스에서 마진콜 경고메세지를 발신하 지 않는 경우에는 작동하지 않을 수 있습니다.
            </Typography>
            <Typography sx={{ m: 5, fontSize: 15 }}>
                역매매 안정장치 : AR-BOT은 속도 상의 이유로 거래 진입과 탈출 시에 업비트와 바이낸스 USD-M 선물에 동시에 거래를 실행시킵니다.
                즉, 순차 실행이 아니기에 어느 한쪽 거래소의 거래 에러를 미리 체크하는 것은 불가능하며, 알 수 없는 에러로 인해 한 쪽 거래소의
                거래가 실패하는 경우에는 헷지 가 풀린 상태가 됩니다. 이로인한 피해를 최소화하기 위해 존재하는 것이 역매매 안전장치입니다.
                역매매 안전장치의 목적은 헷지가 풀리는 것을 방지하기 위함이며, 역매매가 발동 되는 과정에서 매도/매수 수수료 및 스프레드
                손실은 발생할 수 있습니다. 역매매 안전장치가 활성화 되어있고, 진입 혹은 탈출 시, 한쪽의 거래소에서 에러가 발생하는 경우
                역매매기능이 즉시 실행됩니다. 만약 양측 거래소에서 모두 에러가 발생하는 경우에는 역매매가 발동되지 않습니다.
            </Typography>
            <Typography sx={{ m: 5, fontSize: 15 }}>
                반복거래성정(addcir) : 반복거래에서 PAUTO로 진입시 추세선을 보고 진입김프값이 설정하기 때문에 높은 김프에서
                재진입하여 고점에 물리는 상황을 방지하고자 만들어진 기능입니다. 진입 기준은 평균김프를 확인하여 설정값 보다 높은
                김프에서는 비활성화 시키게 됩니다.
            </Typography>
            <img src="설명img/봇작동설정.jpg" style={{ width: ismd ? '90%' : '50%' }} ></img>

            <Typography variant="h6" fontWeight={'bold'}>
                *모든 설정을 다 하셨으면 꼭 설정적용하기 클릭후 다음 페이지로 넘어가시기 바랍니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Box>
    )
}
export default BotSetting;