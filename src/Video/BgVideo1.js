import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




function Videobg2() {

    const theme = useTheme();
    const issm = useMediaQuery(theme.breakpoints.down('sm'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    const [isVisible, setIsVisible] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current > currentScrollY && currentScrollY < 900) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            prevScrollY.current = currentScrollY;
        };

        // 페이지 로딩 시 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     // 두 번째 useEffect로 페이지 로딩 시 한 번만 실행
    //     setIsVisible(true);
    // }, []);


    return (
        <>
            <Box sx={{ mt: -1 }}>
                <section className='section2'>
                    <h1
                        style={{
                            fontSize: ismd ? '3em' : '6em',
                            color: 'white',
                            position: 'relative',
                            top: 300,
                            left: 0,
                            textAlign: 'center',
                            margin: 5,
                            animation: isVisible ? 'slideInFromBottom 1s ease-in' : 'none', // 애니메이션 적용 여부
                            transition: 'left 1s', // 애니메이션 지속시간

                        }}
                    >
                        Creating a Life You Love
                    </h1>
                </section>
            </Box>
        </>

    )
}

export default Videobg2;