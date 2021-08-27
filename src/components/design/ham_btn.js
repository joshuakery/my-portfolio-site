import React from "react"
import hamBtnStyles from './ham_btn.module.css';


export default ({open, setOpen}) => {
    if (open) {
        return (
            <div className={hamBtnStyles.btn}>
                <div className={hamBtnStyles.btn_open} onClick={() => setOpen()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.52 101.52">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">
                        <path class="cls-1" d="M50.76,0a50.76,50.76,0,1,0,50.76,50.76A50.77,50.77,0,0,0,50.76,0ZM72.68,67A4,4,0,0,1,67,72.68L50.76,56.42,34.5,72.68A4,4,0,0,1,28.84,67L45.1,50.76,28.84,34.5a4,4,0,0,1,5.66-5.66L50.76,45.1,67,28.84a4,4,0,0,1,5.66,5.66L56.42,50.76Z"/>
                        </g>
                    </g>
                </svg>
                </div>
            </div>
            
        )
    }
    else {
        return (
            <div className={hamBtnStyles.btn}>
                <div className={hamBtnStyles.btn_closed} onClick={() => setOpen()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.52 101.52">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_2-2" data-name="Layer 2">
                            <path class="cls-1" d="M50.76,0a50.76,50.76,0,1,0,50.76,50.76A50.77,50.77,0,0,0,50.76,0Zm27,74.76h-54a4,4,0,0,1,0-8h54a4,4,0,0,1,0,8Zm0-20h-54a4,4,0,1,1,0-8h54a4,4,0,0,1,0,8Zm0-20h-54a4,4,0,0,1,0-8h54a4,4,0,1,1,0,8Z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
    
}