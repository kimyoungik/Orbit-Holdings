import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function BotJoin() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>ARBOT가입</Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *텔레그램도 가입후 @arbi_v2_1_bot(<a className="텔레그램" href="https://t.me/arbi_v2_1_bot" target="_blank" style={{ color: 'blue' }}>https://t.me/arbi_v2_1_bot</a>)
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                친구등록후 (/start 입력후, /email abc@def.com) 이런식으로 입력하시면 이메일로 인증메일 발송됩니다.
            </Typography>

            <br></br>
            <br></br>
            <br></br>

            <Typography sx={{ m: 3, fontSize: 20 }}>
                1. ArBot 매매페이지 들어가셔서 우측상단 회원가입 클릭해주세요.
            </Typography>
            <img src="설명img/arbot가입1.jpg" style={{ width: ismd ? '95%' : '60%' }}></img>

            <Typography sx={{ m: 3, fontSize: 20 }}>
                2. 인적사항 모두 입력후 이메일 인증해주시고 추천인 코드는 관계자분이 발급해주십니다.
            </Typography>
            <img src="설명img/arbot가입2.jpg" style={{ width: ismd ? '95%' : '60%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                3. 로그인후 우측 상단 마이페이지 클릭!
            </Typography>
            <img src="설명img/arbot가입3.jpg" style={{ width: ismd ? '95%' : '60%' }}></img>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            4. 위에 화면처럼 우측에 보이는 서비스이용권등록에 관계자분이 보내주신 쿠폰입력하면 가입끝!
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
            *여기까지 (업비트설정,바이낸스설정,텔레그램추가,ARBOT가입)모두 끝나셨으면 봇설정에서 API등록해주시면됩니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </Box>
    )
}
export default BotJoin;