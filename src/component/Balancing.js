import { Box, Typography } from "@mui/material";

function Balancing() {

    const steps = Array.from({ length: 17 }, (_, index) => ({
        image: `설명img/밸런싱${index + 1}.jpg`
    }));

    const descriptions = [
        '1. 하단 오른쪽 wallets 클릭후 Deposit 클릭',
        '2. 검색창에 XRP 검색 후 검색 된 XRP 클릭',
        '3. 바이낸스 지갑주소와 태그를 복사해 저장합니다.',
        '4. 업비트앱에서 리플 매수 후 입출금 클릭!',
        '5. 입충금 창에 보유자산 중 리플 누릅니다.',
        '6. XRP 입출금 창에 출금하기 클릭!',
        '7. XRP 출금하기 창에 출금수량 입력 후 확인 클릭',
        '8. 처음에 바이낸스에서 복사해놓은 지갑주소와 태그 입력후 출금신청 클릭 *주소나 태그를 잘못 입력시 코인은 증발하니 주의하여 입력해주세요!',
        '9. 전송 완료 확인후 리플 매도하고 , 현물을 선물로 전환, 바이낸스 실행후 우측하단 wallets 클릭후, spot 클릭!',
        '10. 화면 처럼 리플 전송 완료 확인가능 확인후 XRP 클릭',
        '11. 화면 처럼 XRP/USDT 클릭',
        '12. 리플을 팔아야 하니 SELL을 눌러주고',
        '13. Market(시장가)로 바꿔주시고',
        '14. 화면처럼 100%까지 당겨주시고 Sell XRP 버튼 클릭!',
        '15. 매도후 Wallets에서 Spot 탭에 들어가시면 USDT가 들어와 있는것을 확인 하실 수 있습니다. 마지막으로 USDT를 선물지갑으로 변환시켜주셔야 합니다.',
        '16. 다시 Wallets클릭후 중간 우측에 Transfer클릭',
        '17. TO 부분의 Fundong클릭후 USDs-M Futures로 변경 밑에 coin부분은 USDT로 변경하고 바로 아래 가격은 Max로 설정후 하단 Confirm Transfer 클릭 ',
    ];

    const rows = [];
    for (let i = 0; i < steps.length; i += 3) {
        const row = steps.slice(i, i + 3);
        rows.push(row);
    }

    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>
                밸런싱<Typography variant="h5">(업비트에서 바이낸스로 코인전송하기)</Typography>
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                전송이 가장 빠르고 수수료도 저렴한 리플로 전송하시는걸 추천드립니다.
            </Typography>
            <Typography sx={{ m: 3, fontSize: 20 }}>
                먼저 바이낸스앱을 실행하여 로그인 해줍니다.
            </Typography>

            <br></br>
            <br></br>
            <br></br>

            <Box>
                {rows.map((row, rowIndex) => (
                    <Box key={rowIndex}>
                        {row.map((step, stepIndex) => (
                            <Box key={stepIndex}>
                                <Typography sx={{ m: 3, fontSize: 20 }}>
                                    {descriptions[rowIndex * 3 + stepIndex]}
                                </Typography>
                                <img src={step.image} className="밸런싱" />
                            </Box>
                        ))}

                    </Box>
                ))}
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    선물 지갑으로 전송되어 이제 김프매매를 진행 하실수 있습니다!
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    *업비트로 전송은 위상황을 반대로 진행하시면 됩니다.
                </Typography>
                <Typography sx={{ m: 3, fontSize: 20 }}>
                    (진행이 잘 안되시거나 궁금하신 사항은 문의 주시기 바랍니다.)
                </Typography>
            </Box>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Box>
    )
}
export default Balancing;
