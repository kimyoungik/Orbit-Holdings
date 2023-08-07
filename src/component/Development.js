import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from "react";

function Development() {

    const theme = useTheme();
    const isxs = useMediaQuery(theme.breakpoints.down('xs'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));
    const isxl = useMediaQuery(theme.breakpoints.down('xl'));

    // 스크롤에 따른 이미지 보이기/숨기기 상태를 관리하는 state
    const [showImage, setShowImage] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        // 여기에서 스크롤 위치 등을 확인하여 showImage 값을 변경
        const scrollY = window.scrollY;
        const threshold = 200; // 이미지가 나타나는 스크롤 위치 조건값
        setShowImage(scrollY > threshold);
    };

    // 스크롤에 따른 이미지 보이기/숨기기 상태를 관리하는 state
    const [showImage2, setShowImage2] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll2 = () => {
        // 여기에서 스크롤 위치 등을 확인하여 showImage 값을 변경
        const scrollY2 = window.scrollY;
        const threshold2 = 1000; // 이미지가 나타나는 스크롤 위치 조건값
        setShowImage2(scrollY2 > threshold2);
    };

    // 스크롤에 따른 이미지 보이기/숨기기 상태를 관리하는 state
    const [showImage3, setShowImage3] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll3 = () => {
        // 여기에서 스크롤 위치 등을 확인하여 showImage 값을 변경
        const scrollY3 = window.scrollY;
        const threshold3 = 1700; // 이미지가 나타나는 스크롤 위치 조건값
        setShowImage3(scrollY3 > threshold3);
    };

    useEffect(() => {
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll2);
        window.addEventListener('scroll', handleScroll3);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll2);
            window.removeEventListener('scroll', handleScroll3);
        };
    }, []); // useEffect는 최초 렌더링 시에만 실행됨



    return (
        <Box>
            <Typography variant={ismd ? 'h4' : "h3"} fontWeight={'bold'}>프로그램 개발</Typography>

            <Box
                sx={{
                    display: islg ? 'grid' : 'flex',
                    margin: islg? 5 : 20,
                }}
            >
                <Box
                    sx={{
                        width: islg ? '80%' : '50%',
                        margin: islg ? 5 : 10,
                        bgcolor: '#148CFF',
                        opacity: showImage ? 1 : 0,
                        transition: 'opacity 1s',

                    }}
                >

                    <img src="설명img/arbot2bg.jpg"
                        style={{
                            width: '100%',
                            position: 'relative',
                            bottom: showImage ? 50 : 0,
                            left: showImage ? 50 : 0,
                            transition: 'all 1.5s',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '80%',
                        display: 'grid',
                        alignItems: 'center',
                        opacity: showImage ? 1 : 0,
                        transition: 'opacity 1s',
                        p: islg ? 5 : 0

                    }}
                >
                    <Typography variant="h4">
                        김프자동매매 프로그램 개발
                    </Typography>
                    <Typography>
                        <Typography fontSize={20}>
                            차익거래 기법을 코인시장에서 현물거래 선물거래를 이용하여 수익 실현
                        </Typography>
                        <Typography fontSize={20}>
                            저위험으로 중수익을 낼 수 있는 프로그램
                        </Typography>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: islg ? 'grid' : 'flex', mt: 20, margin: islg? 5 : 20, }}>

                <Box
                    sx={{
                        width: '80%',
                        display: 'grid',
                        alignItems: 'center',
                        opacity: showImage2 ? 1 : 0,
                        transition: 'opacity 1s',
                        p: islg ? 5 : 0

                    }}
                >
                    <Typography variant="h4">
                        김프매매 커뮤니티
                    </Typography>
                    <Typography>
                        <Typography fontSize={20}>
                            차익거래 기법을 코인시장에서 현물거래 선물거래를 이용하여 수익 실현
                        </Typography>
                        <Typography fontSize={20}>
                            저위험으로 중수익을 낼 수 있는 프로그램
                        </Typography>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: islg ? '80%' : '50%',
                        margin: 10,
                        bgcolor: '#148CFF',
                        opacity: showImage2 ? 1 : 0,
                        transition: 'opacity 1s',
                    }}
                >

                    <img src="설명img/arbot5bg.jpg"
                        style={{
                            width: '100%',
                            position: 'relative',
                            bottom: showImage2 ? 50 : 0,
                            right: showImage2 ? 50 : 0,
                            transition: 'all 1.5s',
                        }}
                    />
                </Box>

            </Box>

            <Box sx={{ display: islg ? 'grid' : 'flex', mt: 20, margin: islg? 5 : 20,}}>
                <Box
                    sx={{
                        width: islg ? '80%' : '50%',
                        margin: islg ? 5 : 10,
                        bgcolor: '#148CFF',
                        opacity: showImage3 ? 1 : 0,
                        transition: 'opacity 1s',
                    }}
                >

                    <img src="설명img/arbot4bg.jpg"
                        style={{
                            width: '100%',
                            position: 'relative',
                            bottom: showImage3 ? 50 : 0,
                            left: showImage3 ? 50 : 0,
                            transition: 'all 1.5s',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '80%',
                        display: 'grid',
                        alignItems: 'center',
                        opacity: showImage3 ? 1 : 0,
                        transition: 'opacity 1s',
                        p: islg ? 5 : 0

                    }}
                >
                    <Typography variant="h4">
                        자동연결 프로그램 어플
                    </Typography>
                    <Typography>
                        <Typography fontSize={20}>
                            차익거래 기법을 코인시장에서 현물거래 선물거래를 이용하여 수익 실현
                        </Typography>
                        <Typography fontSize={20}>
                            저위험으로 중수익을 낼 수 있는 프로그램
                        </Typography>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Development;