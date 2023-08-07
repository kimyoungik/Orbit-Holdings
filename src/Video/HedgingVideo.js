import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



function HedginVideo() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box >
            <Box sx={{ marginLeft: ismd ? 2 : 50 }}>
                <ReactPlayer
                    url={process.env.PUBLIC_URL + './video/HedgingVideo1.mp4'}
                    width={ismd ? '100%' :'70%'}
                    height='auto'
                    playing={true}
                    muted={true}
                    loop={true}
                />
            </Box>
            <Box sx={{ margin: ismd ? 3 :  10}}>
                <Typography>
                    위 그림처럼 매매한 코인의 시세가 10% 상승시 업비트(Upbit)에서는 코인 상승분10(%) + 김치프리미엄 0(%) 만큼 수익이 발생하고,
                    바이낸스(Binance)에서는 Short(하락시 수익에 투자)거래를 진행하여 상승분인 10(%) 만큼 손실이 발생하게 됩니다.
                    따라서, 코인의 가치 변화에 따라 수익이 0(%)이지만 손실도 0(%)가 유지됩니다.
                    시세가 20(%) 상승에 김치프리미엄이 발생했을때, 김치프리미엄 3(%) 만큼 수익이 발생하여 총 23(%)의 수익은 
                    업비트(Upbit)에서 발생하게되고 바이낸스(Binance)에서는 Short(하락시 수익에 투자)거래를 진행하여 상승분인 20(%) 만큼 손실이 발생하게 됩니다. 
                    이럴경우 두 거래소의 차액이 +3(%)로 김치프리미엄 차익거래가 완성됩니다.
                </Typography>
            </Box>

            <Box sx={{ ml: ismd ? 2 : 50 }}>
                <ReactPlayer
                    url={process.env.PUBLIC_URL + './video/HedgingVideo2.mp4'}
                    width={ismd ? '100%' :'70%'}
                    height='auto'
                    playing={true}
                    muted={true}
                    loop={true}
                />
            </Box>


        </Box>

    )
}

export default HedginVideo;