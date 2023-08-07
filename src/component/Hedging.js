import { Box, Typography } from "@mui/material";
import HedginVideo from "../Video/HedgingVideo";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Hedging() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant= {ismd ? 'h4' : "h3"} fontWeight={'bold'}>HEDGING(양방향 헷징)</Typography>
            <br></br>
            <Box>
                <Box sx={{ m: ismd ? 3 : 10 }}>
                    <Typography>
                        ＡＲ－ＢＯＴ은 김치프리미엄 차익 실현시 자산의 안정성을 유지하기 위한 리스크 헷지를 위해 양방향으로 거래가 진행됩니다．
                        ① 국내 거래소 업비트(Up bit)에서 Long상승시 수익에 투자）그리고 ② 해외거래소 바이낸스 (Binance)에서 Short(하락시 수익에 투자）
                        ２가지 포지션에 동시 진입하여 가상자산 가격이 급락하거나 급등해도 투자 자산이 변동되지 않게 밸런스를 유지하는 방법입니다．
                        ２가지 포지션에 안정적으로 진입하여 밸런스가 유지되면서 진입시점보다 높은 김치프리미엄이 발생하게 되면 차익이 실현되면서 포지션은 자동으로 종료됩니다．
                        이를통해 자산손실 리스크를 해결함과 동시에 김치프리미엄 차익실현을 지속적으로 반복할 수 있습니다．
                    </Typography>
                    <br></br>
                    <Typography>
                        아래 예시를 통해 시세 상승 or 하락에 따라 자산의 가치 변동없이 안정적으로 밸런스 상태를 유지할 수 있습니다．
                        오직 김치프리미엄에 상승시점에 따라 수익이 발생하게 됩니다．
                    </Typography>
                    <Typography>
                        즉， 리스크를 최소화 시키고 안정적으로 수익이 지속적으로 발생하게 됩니다．
                    </Typography>
                </Box>
                <Box>
                    <HedginVideo />
                </Box>
                <Box sx={{ m: ismd ? 3 : 10 }}>
                    <Typography>
                        이번에는 반대로 시세가 하락 했을때 확인해보겠습니다. 위 그림처럼 매매한 코인의 시세가 -10% 하락시 업비트(Upbit)에서는 코인 하락분-10(%) + 김치프리미엄 +0(%) 만큼 손실이 발생하고,
                        바이낸스(Binance)에서는 Short(하락시 수익에 투자)거래를 진행하여 하락분인 +10(%) 만큼 수익이 발생하게 됩니다. 따라서, 코인이 하락해도 시세 에 따른 가치 변화는 영향 없이 밸런스
                        상태로 유지되어 수익이 +0(%)이지만 손실도 +0(%)가 유지됩니다. 시세가 20(%) 하락에 김치프리미엄이 발생했을때, 김치프리미엄 +3(%) 만큼 수익이 발생하여 총 -17(%)의 손실이 업비트(Upbit)에서
                        발생하게되고 바이낸스(Binance)에서는 Short(하락시 수익에 투자)거래를 진행하여 하락분인 +20(%) 만큼 손실이 발생하게 됩니다. 이럴 경우에도 두 거래소의 차액이 +3(%)로 김치프리미엄 차익거래가 완성됩니다.
                        즉, 코인의 상승 or 하락에 관계가 없어 리스크를 최소화 시키고 안정적으로 김치프리미엄 차익(수익)이 지속적으로 발생하게 됩니다．
                    </Typography>
                </Box>

            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br><br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}

export default Hedging;