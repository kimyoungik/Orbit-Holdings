import { useState, useEffect } from 'react';

function TopButton() {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 400) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button" > TOP</button>
        </div>

    )
}

export default TopButton;