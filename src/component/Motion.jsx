import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function ScrollMotion() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        let value = window.scrollY;
        console.log('scrollY', value);

        if (value > 400 && value < 1500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box>
            <Box
            >
                <Typography
                    variant="h1"
                    sx={{
                        position: "absolute",
                        left: isVisible ? '300px' : "-300px",
                        opacity: isVisible ? 1 : 0,
                        transition: "left 0.5s ease-in-out, opacity 0.5s ease-in-out",
                    }}
                >
                    kimp
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    left: '800px',
                    bgcolor: 'wheat',
                    width : '30%'
                }}
            >
                <Typography>가상자산은 거래소 단위로 거래가 이뤄지기 때문에 같은 종류의 가상자산일지라도 거래소별로 가격 차이가 있을 수 있습니다</Typography>
                <Typography>가상자산은 거래소 단위로 거래가 이뤄지기 때문에 같은 종류의 가상자산일지라도 거래소별로 가격 차이가 있을 수 있습니다</Typography>
                <Typography>가상자산은 거래소 단위로 거래가 이뤄지기 때문에 같은 종류의 가상자산일지라도 거래소별로 가격 차이가 있을 수 있습니다</Typography>
            </Box>
        </Box>
    );
}

export default ScrollMotion;