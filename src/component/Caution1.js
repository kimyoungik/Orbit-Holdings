import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Caution1() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>CAUTION(주의사항)</Typography>

            <Box>
                <Typography sx={{ margin: 3 }}>
                    1. Position Mode 가 One-way Mode 인지 확인하기
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    Position Mode 가 Hedge Mode 로 되어있을 경우 봇의 바이낸스(Binanace) USD-M 선물 주 문에서 에러가 발생합니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    바이낸스 USD-M Futures(선물) 에서 하단의 이미지와 같이 Position Mode 설정에 서 One-way Mode 로 되어있는지 확인을 해야합니다. (아래그림 참조)
                </Typography>
                <Box>
                    <img src="설명img/주의사항1.jpg" style={{ width: ismd ? '100%' : '50%' }}></img>
                </Box>
                <Box>
                    <img src="설명img/주의사항2.jpg" style={{ width: ismd ? '100%' : '50%' }}></img>
                </Box>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box>
                <Typography sx={{ margin: 3 }}>
                    2. Asset Mode 에서 Single-Asset Mode 인지 확인하세요.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    격리모드로 진행할때 Asset Mode가 Multi-Assets Mode로 되있으면 진입시 에러가 발생합니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    바이낸스 USD-M Futures(선물) 에서 우측 하단 Single-Asset Mode 에서 Asset Mode를 확인해주시기 바랍니다.
                </Typography>
                <Box>
                    <img src="설명img/주의사항4.jpg" style={{ width: ismd ? '100%' : '40%' }}></img>
                </Box>
                <Box>
                    <img src="설명img/주의사항5.jpg" style={{ width: ismd ? '100%' :  '40%' }}></img>
                </Box>

            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box>
                <Typography sx={{ margin: 3 }}>
                    3. 두 거래소간 레버리지 비율이 맞지않은 상태에서 AR-BOT을 진행하게 되면 어느 한쪽에 잉여자산이 생겨서 수익성이 줄어들어 비효율적 입니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    Addcir(반복거래)를 진행하게 되는 경우 AR-BOT이 자동적으로 반복해서 진입/탈출을 하기 때문에 모니터링을 잘 안하게 되는 경우 자산현황에서
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    밸런싱이 잘 맞지 않는 경우가 생길 수 있습니다. 이런 경우 앞서 말한 한쪽에 잉여자산이 생겨 밸런싱이 맞게되어 AR-BOT이 동작하지 않는
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    경우가 있으니, 효율적인 수익을 위해서 에러메세지와 자산현황을 주기적으로 확인하여 밸런싱을 유지하는 것을 권장드립니다.
                </Typography>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box>
                <Typography sx={{ margin: 3 }}>
                    4. 자산현황에서 헷징상태 확인 하기
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    거래소 정지로 인해 봇이 작동하지 않거나, 봇이 동작하지 않거나,거래량 폭발로
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    위와 같은 문제가 생겼을때 첫번째 텔레그램 메세지, Ar-bot 메세지를 잘 확인해주셔야 됩니다.
                </Typography>
                <Typography sx={{ margin: 3 }}>
                    두번쨰로 자산현황(pos)에서 코인이 양쪽 거래소에 같은 수량인지 헷징상태는 정상인지 확인 하시기 바랍니다.
                </Typography>

                <img src="설명img/주의사항3.jpg" style={{ width: ismd ? '100%' : '50%' }}></img>
            </Box>
            <br></br>
            <Box sx={{ m: 3}}>
                <br /><br />
                <p>5.슬리피지(호가비율,거래량)</p>
                <p>슬리피지란 간단히 말해 내가 체결하고 싶은 가격과 실제로 체결된 가격의 차이를 말합니다. 예를들어 리플코인(XRP)을 1,000원에 사겠다고 매수 주문을 넣었는데, </p>
                <p>실제 체결되는 가격이 1,100원이라면 이때 발생하는 차이 100원이 슬리피지입니다. 일반적인 자동매매 프로그램의 경우 시장가 거래로 진행되다보니 매수체결가</p>
                <p>보다 비싸게 체결되거나 매도체결가보다 싸게 거래가 체결되는 슬리피지 해결이 되지 않아 많은 손실을 보게 됩니다. 거래하고자 하는 코인의 거래량과 주문금액</p>
                <p>의 규모에 따라 슬리피지가 발생할 수 있으며, 코인의 거래량이 낮고, 주문금액이 높을수록 더 큰 슬리피지가 발생합니다 특히 큰 금액을 한번에 매수/매도 하는</p>
                <p>경우에 슬리피지는 더욱 크게 나타날 수 있습니다. 슬리피지가 발생하는 원인 여러요인이 있지만 대표적으로 크게 4가지가 있습니다.</p>
                <p>충분하지 않은 거래량, 호가비율에 비해 너무 많은 주문량, 급변하는 시장 가격, 주문지연</p>
                <p>AR-BOT은 특히 주문지연으로 인한 슬리피지 문제를 최소화 하여 실시간 거래로 슬리피지로 인한 손실이 극히 드물게 거래가 되고 있습니다. </p>
                <p>큰 금액을 한번에 매수/매도 하기보다는 분할하여 거래 (1회 거래 설정 기준 BTC 최대 3,000만 원 이하 / ETH 1,000만원 / 이외 알트코인 500만원 이하 권장)</p>
                <p>거래량이 풍부하고 변동성이 적은 종목 선정 (큰 금액의 경우 BTC, ETH, XRP 등 거래량이 높은 코인 권장)</p>
                <br /><br />
            </Box>
            <Box sx={{ m: 3}}>
                <p>6. 같은 코인에 대하여 여러 개의 자동매매를 설정하는 경 우 고려할 점 </p>
                <p>같은 코인에 대하여 여러개의 자동매매(/addcoin)혹은 반복매매(/addcir) 설정을 하 는 경우에는 각 설정 값 간의 진입시점과 탈출시점의 값이 차이 나게 설정해야 합니다.</p>
                <p>예를 들어, 자동매매(/addcoin) 설정을 통하여 BTC 진입시점 1%에 BTC진입, 탈출시점 2%에 탈출하는 1,000만 원 매도/매수거래가 설정되어 있다고 가정하겠습니다. </p>
                <p>이러한 상황에서 추가로 1,000만 원 어치의 BTC 거래를 설정하실 경우에는, 동일한 진입시점 값과 탈출시점 값을 설정하게 되면, 두 개의 설정은 해당시</p>
                <p>점프 돌파시 동시에 실행되어 1,000만 원 짜리 주문 2개가 아닌, 2,000만 원 짜리 주문 1개와 동일한 슬리피지 손실이 발생할 수 있습니다. 즉, 이러한 경우에는</p>
                <p>자동매매설정은 2개로 나뉘어져 있는 것처럼 보이지만 실제로 김치프리미엄 거래 실행은 동시에 실행되기 때문에, 진입시점 1%에 진입하고 2%에 탈출하는 2,000만 </p>
                <p>원 짜리 주문 1개와 동일한 상황이 됩니다. 따라서, 같은 코인에 대하여 여러 개의 자동매매를 설정하시는 경우에는 진입시점과 탈출시점을 조금씩 다르게 해서 설정 </p>
                <p>해야합니다. 위의 경우를 예시로 들면, 이미 존재하는 BTC 설정과 겹치는 것을 피하기 위해 추가 적으로 설정하는 BTC 김치프리미엄 설정은 진입시점 1.1%, 탈출시점 </p>
                <p>2.2% 로 설정하시거나, PAUTO를 사용하는 경우라면, PAUTO의 폭을 다르게 하여 진입시점 0.9%, 탈출시점 2.1% 이 되도록 </p>
                <p>진입 시점과 탈출 시점을 다르게 하여 설정 해 주시면 슬리피지 손실을 최소화 하실 수 있습니다.</p>
                <br /><br />
            </Box>
            <Box sx={{ m: 3}}>
                <p>7. 투자금액을 지나치게 많게 분할하지 말 것</p>
                <p>슬리피지 손실을 염두에 두고 자동매매(/addcoin)혹은 반복매매(/addcir) 설정의 투 입금액을 매우 작게 설정하여 여러 개의 설정 값을 등록시키려는 시도가 있을</p>
                <p>수 있습니다. 위와 같은 전략은 위험한 전략이며, 진입시점과 탈출시점이 동일하다면 같은 코인에 대하여 단순히 금액을 분할한다고 해서 슬리피지가 줄어드는 </p>
                <p>것이 절대 아닙니다. 같은 코인에 대해 설정된 진입시점과 탈출시점이 동일하다면, 여러 개의 자동매매 설정이 동시에 진입하고 동시에 탈출되기 때문입니다. </p>
                <p>이러한 전략이 위험한 이유는, 각 개인의 주문요청 횟수 제한 때문입니다. 바이낸스는 제약이 없으나, 업비트의 경우에는 각 개인당 API 주문(매수,매도 합산) 횟수를 1초에 </p>
                <p>8번, 분 당 200번으로 제한하고 있습니다. 만약 해당 요청횟수를 초과하는 매도/매수 거래가 1초 이내에 일어난다면, 업비트 측에서 거래 에러가 발생할 수 있으므로, 위와 같은 전략은
                    지양해주시길 바랍니다.</p>
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

export default Caution1;