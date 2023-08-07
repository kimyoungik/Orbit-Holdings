import { Box, Typography } from "@mui/material";

function Caution2() {
    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>주의사항</Typography>
            <br></br>
            <br></br>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                1. 업비트와 바이낸스 영문이름 똑같이 해주세요!
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                2. 핸드폰 기기변경시 바이낸스 구글OTP 내보기후 기기변경해주세요.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                3. 케이뱅크 출금한도 확인해주세요.(운영자금이 크신분들은 꼭 한도 늘려주세요)

            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                4. 법인 명의 휴대전화인 경우 이동통신사에 실사용자를 등록한 후 휴대전화 인증을 하실 수 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                5. 해외에서는 케이뱅크 ARS 인증이 불가할 수도 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                6. 해외에서의 카카오페이 인증이 제한됩니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 15 }}>
                국내에서 인증서를 발급 후 해외에 체류하는 경우에는 인증 톡 메시지를 통해 인증을 제한적으로 수행할 수 있습니다.
            </Typography>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Box>
    )
}
export default Caution2;