import { Box, Tabs, Tab, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import Bg1 from '../bgimg/orbitbg6.jpg'
import { motion } from "framer-motion";
import Inquiry2 from "../component/Inquiry2";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

function Orbit6() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <div className='bg2' style={{ display: 'flex', alignItems: 'center', }}>
                <div className='bg-overlay2' style={{ backgroundImage: 'url(' + Bg1 + ')' }}></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', color: 'white' }}
                >
                    <Box
                        sx={{
                            color: 'white',
                            fontSize: 20,
                            width: '100%'
                        }}>
                        <Typography variant="h3" fontWeight='bold' letterSpacing={3}  >
                            INQUIRY
                        </Typography>
                    </Box>
                </motion.div>
            </div>
            <Box>
                <Tabs value={value} onChange={handleChange} centered
                    sx={{
                        "& .MuiTab-root": { mr: '20px' },
                        borderBottom: "1px solid #dcdcdc "
                    }}
                >
                    <Tab label="문의" sx={{ fontSize: issm ? 16 : 20 }} />
                    <Tab label="테스트 신청" sx={{ fontSize: issm ? 16 : 20 }} />
                </Tabs>

                <motion.div className="motion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', color: 'black' }}
                >
                    <Box sx={{ marginTop: 20 }}>
                        {value === 0 && <Inquiry />}
                        {value === 1 && <Inquiry2 />}
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
};

export default Orbit6;

function Inquiry() {

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
        if (data.name && data.contact && data.QnA) {
            sendFormData(data);
            event.target.reset();
        } else {
            window.alert('모든 항목을 입력해주세요.'); // 입력이 하나라도 비어있으면 알림창 띄우기
        }

    }

    return (
        <Box>
            <Typography variant="h3" fontWeight={'bold'}>문의</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Box sx={{ display: ismd ? 'block' : 'flex', justifyContent: 'center', }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h4" fontWeight={'bold'}>
                        CONTACT
                    </Typography>
                    <br></br>
                    <Typography variant="h6">
                        H.P : 010-9129-2263
                    </Typography>
                    <br></br>
                    <Typography variant="h6">
                        Teleglam : @show2263
                    </Typography>
                    <br></br>
                    <Typography variant="h6">
                        Email : youngik@orbitholdings.org
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', mt: ismd ? 10 : 'null' }}>
                    <Typography variant="h4" fontWeight={'bold'}>
                        Q & A
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}>
                        <Box

                            sx={{
                                '& > :not(style)': { m: 1, width: '90%' },
                            }}
                        >
                            <TextField name="name" id="outlined-basic" label="이름" variant="outlined" />
                        </Box>

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '90%' },
                            }}
                        >
                            <TextField name="contact" id="outlined-basic" label="연락처" variant="outlined" />
                        </Box>

                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '90%' },
                            }}
                        >
                            <TextField
                                name="QnA"
                                id="outlined-multiline-static"
                                label="질문내용"
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Button sx={{ width: '90%' }}
                            variant="outlined"
                            type="submit"
                        >전송!</Button>
                    </Box>
                </Box>
            </Box>

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