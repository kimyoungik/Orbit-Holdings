import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Kbank() {
    const steps = Array.from({ length: 4 }, (_, index) => ({
        image: `설명img/케이뱅크개설${index + 1}.jpg`
    }));

    const descriptions = [
        '1. 케이뱅크 앱을 다운로드 후 케이뱅크 가입 누릅니다.',
        '2. 본인 확인을 위해 밑에 그림과 같이 숫자가 생산되고 그아래 인증 전화 걸기 버튼을 눌러서 전화가 오면 생산된 숫자를 눌러 본인인증을 해주시고 이름 생년월일 까지 입력 해주세요.',
        '3. 통신사 선택한 후에 이용 약관 동의하고 간편 비밀번호 설정',
        '4. 등록후 나머지 요청하는 정보를 모두 입력후 계좌 비밀번호 설정',
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
            <Typography variant="h3" fontWeight={'bold'}>
                케이뱅크
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *국내 핸드폰과 USIM 휴대전화기가 아닌 스마트폰일 경우 이용이 제한될 수 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                개설전 간단한 준비물이 있습니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                본인명의 스마트폰, 주민등록증or운전면허증, 사용중이신 다른 은행 계좌번호
            </Typography>
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
                            <img src={step.image} style={{ width: ismd ? '90%' : '60%' }} />
                        </Box>
                    ))}

                </Box>
            ))}
            <Typography sx={{ m: 3, fontSize: 20 }}>
                5. 준비한 신분증을 촬영을 해주세요.
            </Typography>
            <img src="설명img/케이뱅크개설5.jpg" />
            <Typography sx={{ m: 3, fontSize: 20 }}>
                6. 본인이 가지고 있는 계좌 중 하나를 선택후 계좌 인증하기
            </Typography>
            <img src="설명img/케이뱅크개설6.jpg" style={{ width: ismd ? '90%' : '50%' }}  />
            <Typography sx={{ m: 3, fontSize: 20 }}>
                7. 입금자명 메시지의 숫자 4개를 입력하면 케이뱅크 계좌개설 완료!
            </Typography>
            <img src="설명img/케이뱅크개설7.jpg" style={{ width: ismd ? '90%' : '50%' }} />
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *업비트에 첫 원화를 입금후 72시간 이후 출금 전송 가능, 그다음 입금부터는 24시간 이후 출금 전송 가능합니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                *케이뱅크 이체한도 꼭 확인해주시기 바랍니다.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Box>
                <Typography variant="h3" fontWeight={'bold'}>
                    케이뱅크 이체한도 풀기
                </Typography>

                <Typography sx={{ m: 3, fontSize: 20 }}>
                    케이뱅크 계좌개설 후 처음에는 한도 계좌가 100만원으로 설정되어 있습니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    한도 계좌 풀 수 있는 방법은 직장인이라면 재직증명서 또는 건강보험료로 확인할 수 있고,
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    관리비 고지서, 핸드폰요금 청구서,타은행 otp등록, 사업자등록증명원 이런 식으로 여러 방법으로 풀수 있습니다.
                </Typography>
                <img src="설명img/한도풀기1.png" style={{ width: ismd ? '80%' : '30%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    고지서 등록방법으로 해보겠습니다.
                </Typography>
                <img src="설명img/한도풀기3.png" style={{ width: ismd ? '90%' : '50%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    관리비 고지서 선택 후 원하는 서류 선택 후 촬영하면 등록끝
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    서류상 개인정보와 일치해야 하고 지난달 또는 이번달 고지서 원본만 가능합니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    *모니터 촬영은 불가 서류 전체를 글자가 잘 보이게 촬영해야됩니다.
                </Typography>
                <img src="설명img/한도풀기4.png" style={{ width: ismd ? '60%' : '30%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    신청완료 후 카톡으로 접수 안내 메세지가 오고, 평일 영업일 기준 최대 3일까지 소요될수 있습니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    그럼 1일 이체한도 100만원에서 5000만원으로 바뀌게 됩니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    (서류 제출 방법은 모두 같은 방식으로 풀수 있습니다.)
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    1일 이체한도는 최대로 늘리려면 1등급 otp 등록시 가능합니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    거래중인 실물 otp가 없으면 케이뱅크 실물 otp 발급 받으시면 최대 5억까지 늘리실수 있습니다.
                </Typography>
                <img src="설명img/한도풀기5.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    인증센터에서 otp등록/관리 눌러줍니다.
                </Typography>
                <img src="설명img/한도풀기6.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    1일 최대 5억까지 필요 없으신 분들은 발급 수수료 없이 휴대폰 otp 이용하시면 됩니다.
                </Typography>
                <img src="설명img/한도풀기7.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    휴대폰으로 본인 인증 후, 케이뱅크 계좌정보 입력하시고,
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    *기존 실물 otp가 있으신 분들은 타행계좌로 인증하기 하시면 됩니다.
                </Typography>
                <img src="설명img/한도풀기8.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    비밀번호 설정하고 이체한도 선택한 다음, 하단 확인을 누릅니다.
                </Typography>
                <img src="설명img/한도풀기9.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    케이뱅크 otp 발급 완료!
                </Typography>
                <img src="설명img/한도풀기10.png" style={{ width: ismd ? '85%' : '40%' }}></img>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    이체한도 변경 메뉴로 들어가 보면 1일 최대 1억 5000만원으로 설정되어 있는 것을 확인할 수 있고,
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    하단의 변경하기로 바꿀 수 있습니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    *이체한도를 최대 5억까지 늘리시려면 실물 otp 발급받으셔야 됩니다.
                </Typography>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}
export default Kbank;