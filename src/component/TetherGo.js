import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function TetherGo() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>TETHER(테더환산가진입)</Typography>
            <Box>
                <Typography sx={{ margin: 3 }}>
                    일반적으로 해외거래소에 달러(USD)형태의 자산인 테더(USDT)를 보유하여 거래를 할 수 있습니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    해외거래소의 자산형태가 달러(USD)의 환율이 내려가게 된다면 가지고 있던 자산 또한 하락하게 됩니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    이를 환차손 이라고 합니다. 김치프리미엄 차익거래로 1%의 수익을 발생했다고 가정했을때, 만약 달러가 1% 하락했다면 결과적으로 수익이 발생하지 않겠됩니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    이를 보완하기 위해 만들어진 기능이 바로 테더(USDT)환산가 입니다. 진입시점의 환율을 수익 발생 후 탈출시점의 환율을 고려하여 원화기준 수 수익이
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    발생시점으로 재계산되어 탈출 시점이 조금 더 높거나 낮을 수 있습니다. 이를통해 환차손으로 인한 손실 리스크가 해결될 수 있습니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    보다 안정적인 투자성향을 가지고 계신분들은 테더(USDT)환사가를 통해 거래하시면 자산가치를 보다 안전하게 수익을 발생시킬 수 있습니다.
                </Typography>


                <Box sx={{ display: ismd ? 'block' : 'flex' , justifyContent: 'center'}}>
                    <img src="설명img/테더진입1.jpg" style={{ width: ismd ? '100%' : '40%'}}></img>
                    <img src="설명img/테더진입2.jpg" style={{ width: ismd ? '100%' : '40%'}}></img>
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
        </Box>
    )
}

export default TetherGo;