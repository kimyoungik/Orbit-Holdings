import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';


function Inquiry2() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));


    function sendFormData(data) {
        // 'YOUR_SERVER_ENDPOINT'를 서버의 실제 엔드포인트 주소로 바꿔주세요
        const url = 'http://localhost:5000/api/data';

        axios
            .post(url, data, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then((response) => {
                // 서버로부터 오는 응답을 처리하고 싶다면 여기서 처리해주세요
                window.alert('전송이 완료되었습니다!');
                console.log(response.data);
            })
            .catch((error) => {
                // 요청 중 발생한 에러를 처리하고 싶다면 여기서 처리해주세요
                window.alert('전송이 실패했습니다.');
                console.error(error);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // 입력 값 검사
        if (data.name && data.contact && data.amount && data.referrer) {
            sendFormData(data);
            event.target.reset();
        } else {
            window.alert('모든 항목을 입력해주세요.'); // 입력이 하나라도 비어있으면 알림창 띄우기
        }

    }


    return (
        <Box>

            <Typography variant="h3" fontWeight={'bold'}>테스트 신청</Typography>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: ismd ? '100%' : '50%', margin: 'auto', display: 'block' }}>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: ismd ? '80%' : '90%' },
                    }}
                >
                    <TextField name="name" id="outlined-basic" label="이름" variant="outlined" />
                </Box>

                <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: ismd ? '80%' : '90%' },
                    }}
                >
                    <TextField name="contact" id="outlined-basic" label="연락처" variant="outlined" />
                </Box>

                <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: ismd ? '80%' : '90%' },
                    }}
                >
                    <TextField name="amount" id="outlined-basic" label="예상 운용 금액(업비트기준)" variant="outlined" />
                </Box>

                <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: ismd ? '80%' : '90%' },
                    }}
                >
                    <TextField
                        name="referrer"
                        id="outlined-multiline-static"
                        label="경로(추천인) 및 질의사항"
                        multiline
                        rows={4}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ width: ismd ? '80%' : '90%' }}

                    >전송!</Button>
            </Box>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


        </Box>
    )
}

export default Inquiry2;