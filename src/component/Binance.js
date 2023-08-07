import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Binanace() {

    const steps = Array.from({ length: 7 }, (_, index) => ({
        image: `설명img/바낸설정${index + 1}.jpg`
    }));

    const descriptions = [
        '1. Sing up with phone or email 누르시고, 인증 받으실 이메일과 비밀번호 설정, 인증번호 입력후 바이낸스 앱을 실행해주세요.',
        '2. 로그인후 Verify Now 눌러 이미지와 같이 빨간 글씨 모두(영문 집주소 포함) 입력해주세요.(영문이름은 꼭 업비트와 똑같이 입력해주세요.) ',
        '3. 준비된 신분증으로 글씨가 잘보이게 촬영해주시면 됩니다.',
        '4. 앞뒷면 모두 촬영후 얼굴인식을 해주시면 됩니다. 나오는 그림모션을 따라해주세요.',
        '5. 첫 화면으로 돌아오셔서 좌측 상단 사람모양 누르시고 우측에 Verified가 뜨면 성공!',
        '6. 다시 사람 모양 클릭하시고 Security를 누르고, Authenticator App을 눌러주세요. 그리고 우측 하단에 Binance/Google Authenticator 버튼을 눌러주세요.',
        '7. 이미지와 같이 노란색 버튼 클릭후 QR코드 나오면 16자리 코드 복사후 구글otp앱 실행해주세요.',
    ];

    const rows = [];
    for (let i = 0; i < steps.length; i += 3) {
        const row = steps.slice(i, i + 3);
        rows.push(row);
    }

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>바이낸스 설정</Typography>

            <Typography sx={{ m: 3, fontSize: 20 }}>
                *업비트에서 인증한 신분증 준비, 바이낸스앱 설치, 구글otp앱 설치
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *아래 링크를 통해 가입해주시면 수수료 할인 받으실수 있습니다.
            </Typography>
            <a href="https://accounts.binance.com/en/register?ref=62134227">https://accounts.binance.com/en/register?ref=62134227</a>
            <br />
            <br />
            <br />
            {rows.map((row, rowIndex) => (
                <Box key={rowIndex}>
                    {row.map((step, stepIndex) => (
                        <Box key={stepIndex}>
                            <Typography sx={{ m: 3, fontSize: 20 }}>
                                {descriptions[rowIndex * 3 + stepIndex]}
                            </Typography>
                            <img src={step.image} style={{width: ismd ? '90%' : '50%'}} />
                        </Box>
                    ))}

                </Box>
            ))}
            <Typography sx={{ m: 3, fontSize: 20 }}>
                8. 실행후 우측아래 플러스 누르고, 설정 키 입력 누르시고 이미지와 같이 계정이름 과 아까 복사한 코드를 입력해주세요.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                9. 그리고 otp 번호를  바이낸스 어플 인증하라고 뜨면 입력해주시고, 이메일 또는 문자인증을 해주시면 끝입니다!
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Box>
    )
}
export default Binanace;


