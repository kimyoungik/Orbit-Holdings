import { Box, Typography } from "@mui/material";

function Caution3() {
    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>주의사항</Typography>
            <br></br>
            <br></br>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            1. 밸런싱 과정에서 지갑주소 입력시 주의 하시고 테스트로 소액을 먼저 진행 하시는걸 추천드립니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            2. API키 발급후 꼭 드라이브에 저장해주시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            3. 봇작동설정 하시고 꼭 설정적용하기를 클릭해주시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            4. 업비트 출금이 24시간 동안 제한되므로 밸런싱시 미리 입금해주시기 바랍니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            5. 에러 메세지는 텔레그램으로 발송되니 텔레그램 메세지를 잘 확인 하시기 바랍니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Box>
    )
}
export default Caution3;