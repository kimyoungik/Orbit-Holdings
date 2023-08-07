import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Repeat() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>REPEAT(반복거래)</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Box>
                <Typography sx={{ margin: 3 }}>
                    자동매매(/addcoin) 경우에는 김프 거래 진입이후 탈출이 실행되면 설정의 수명이 종료되는 1회성인 반면,
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    반복거래 (/addcir) 로 등록된 거래는 탈출하는 순간 조건에 따라 재등록이 자동으로 실행되며,
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    진입대기중인 상황에서도 추세를 계속 재계산하여 매 3분마다 변하는 추세에 따라 진입값과 탈출값을 자동 재설정합니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    따라서, 반복매매 (/addcir) 를 적절히 사용한다면, 김프의 추세가 변할때마다 번거롭게 자동매매설정 (/addcoin) 을 삭제하고 재등록하지 않아도 되며,
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    탈출이 완료된 이후에도 자동으로 재등록이 진행되기 때문에 번거롭게 탈출이 완료된 거래를 삭제하지 않아도 됩니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    (반복거래에서 설정타입에 PAUTO를 사용하여 진입하셔야 봇이 알아서 김프 추세를 추척하여 진입값 탈출값을 자동으로 재설정을 해주게됩니다.)
                </Typography>

            </Box>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}

export default Repeat;