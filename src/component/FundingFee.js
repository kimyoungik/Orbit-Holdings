import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function FundingFee() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>FUNDINGFEE(펀딩피)</Typography>
            <br></br>
            <Box sx={{margin: ismd ? 3 : 10}}>
                <Typography>
                    선물거래가 무기한 계약으로 이루어질 때, 선물 가격이 현물 가격에 수렴하지 않는 상황이 오는 가능성을 막는 도구 입니다.
                    앞서 설명드린 상승(Long Position), 하락(Short Position) 보유 유저간 균형을 맞추기 위해서 지불하는 보증금 개념입니다.
                    예를들어 하락장일 경우 하락(Short Position)에 투자한 사람이 상승(Long Position)에 투자한 사람보다 많게 됩니다.
                    이 때, 하락(Short Position)에 투자한 사람들이 상승(Long Position)투자한 사람들에게 펀딩비(Funding Fee)를 지불하게 됩니다.
                    반대로 상승장이라면 상승(Long Position) 에 투자한 사람들이 하락(Short Position) 투자한 사람들에게 펀딩비(Funding Fee)를 지불해아 합니다.
                    펀딩비(Funding Fee)는 8시간마다 지급됩니다. AR-BOT은 시세 상승과 하락에 영향없이 수익을 나오고 일반적으로
                    하락(Short Position)에 펀딩비 지급 확률이 높아서 펀딩비 또한 추가 수익으로 발생되고 있습니다.
                </Typography>
            </Box>
            <Box >
                <img src="설명img/펀딩비.jpg" style={{ width: '100%'}}></img>
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

export default FundingFee;