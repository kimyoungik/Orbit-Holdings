import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Leverage() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>LEVERAGE(레버리지)</Typography>
            <br></br>
            <Box sx={{ margin: ismd ? 3 : 10}}>
                <Typography>
                    선물거래는 일반적인 투자와 달리 상승 or 하락에 투자할 수 있다는 점입니다．
                    선물 거래시 가장 큰 특징은 레버리지（Ｌｅｖｅｒａｇｅ）를 이용할 수 있다는 점 입니다．
                    레버리지란？ 거래소에 보유한 자신의 자산을 담보로 하여 총 투자금액에서 자산의 비율만큼
                    높게 투자가 가능하여 수익시 레버리지의 비율만큼 보다 높은 수익을 낼 수 있지만，
                    반대로 손실 또한 레버리지의 비율만큼 손실을 추가로 더 보게되고 원금을 잃는 청산 리스크
                    또한 존재하기 때문에 이용 시 항상 주의해야합니다． 투자 성향에 따라 (x1~x4) 배 이내로 레버리지
                    비율을 선정하는 것을 권고 드립니다． AR-BOT은 적정 수준의 레버리지는 양방향 리스크 헷지
                    방법을 통해서 청산리스크 위험을 해소하였지만 과도하게 높은 레버리지는 자산 손실이 발생할 수 있습니다．
                </Typography>
            </Box>
            <Box>
                <img src="설명img/레버리지.jpg" style={{ width: ismd ? '100%' : '70%'}}></img>
            </Box>
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

export default Leverage;