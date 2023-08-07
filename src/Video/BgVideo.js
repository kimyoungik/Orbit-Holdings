import { Box, Button, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';



function Videobg() {

    const theme = useTheme();
    const issm = useMediaQuery(theme.breakpoints.down('sm'));
    const ismd = useMediaQuery(theme.breakpoints.down('md'));
    const islg = useMediaQuery(theme.breakpoints.down('lg'));

    const [isVisible, setIsVisible] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && currentScrollY > 500) {
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

    useEffect(() => {
        // 두 번째 useEffect로 페이지 로딩 시 한 번만 실행
        setIsVisible(true);
    }, []);




    return (
        <>
            <Box sx={{ mt: ismd ? 10 : 0, }} >
                <section>
                    <Link to="http://221.148.128.213/" target='_blank' >
                        <h1
                            id="animateElement"
                            style={{
                                fontSize: ismd ? '4em' : '6em',
                                color: 'white',
                                position: 'absolute',
                                top: 300,
                                left: ismd ? 100 : isVisible ? 200 : -200, // 왼쪽에서 오른쪽으로 이동하는 애니메이션
                                animation: isVisible ? 'slideIn 1s ease-in' : 'none', // 애니메이션 적용 여부
                                transition: 'left 1s', // 애니메이션 지속시간
                            }}
                        >
                            Kimp Bot
                        </h1>
                    
                    <h1
                        id="animateElement"
                        style={{
                            fontSize: ismd ? '4em' : '6em',
                            color: 'white',
                            position: 'absolute',
                            top: 420,
                            left: ismd ? 100 : isVisible ? 200 : -200, // 왼쪽에서 오른쪽으로 이동하는 애니메이션
                            animation: isVisible ? 'slideIn 1s ease-in' : 'none', // 애니메이션 적용 여부
                            transition: 'left 1s', // 애니메이션 지속시간
                        }}
                    >
                        start!
                    </h1>
                    </Link>
                </section>
            </Box>


        </>

    )
}

export default Videobg;