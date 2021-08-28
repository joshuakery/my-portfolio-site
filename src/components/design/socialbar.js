import React from 'react';
import styles from "./socialbar.module.css"

const SocialBar = props => {
    const { small } = props;
    return (
        <ul className={`${styles.socialbar}`}>
            <li>
                <a href="https://www.instagram.com/joshuatkery/" target="_blank">
                    <div className={`${styles.sociallink} ${styles.instagram} ${small && styles.small}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.52 101.52">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_2-2" data-name="Layer 2">
                            <g>
                                <path d="M50.76,38.76a12,12,0,1,0,12,12A12,12,0,0,0,50.76,38.76Z"/>
                                <path d="M50.76,0a50.76,50.76,0,1,0,50.76,50.76A50.77,50.77,0,0,0,50.76,0Zm0,76.76a26,26,0,1,1,26-26A26,26,0,0,1,50.76,76.76ZM79.18,30.09h-.1a5.43,5.43,0,0,1-7.65,0,8.86,8.86,0,0,1-.67-.82,5.07,5.07,0,0,1-.5-.95,5.76,5.76,0,0,1-.3-1,6.14,6.14,0,0,1,0-1.05,5.52,5.52,0,0,1,1.58-3.83,6.65,6.65,0,0,1,.82-.67A5.5,5.5,0,0,1,74.3,21a5.4,5.4,0,0,1,4.88,9.12Z"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://github.com/joshuakery" target="_blank">
                    <div className={`${styles.sociallink} ${styles.github} ${small && styles.small}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.53 98.05">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_2-2" data-name="Layer 2">
                            <path d="M50.26,0A50.27,50.27,0,0,0,34.38,98c2.51.46,3.43-1.09,3.43-2.42s-.05-4.36-.07-8.55c-14,3-16.93-6.74-16.93-6.74-2.29-5.8-5.58-7.35-5.58-7.35-4.57-3.12.34-3.06.34-3.06,5.05.36,7.7,5.18,7.7,5.18C27.76,82.71,35,80.49,37.9,79.2a10.74,10.74,0,0,1,3.19-6.72C29.93,71.21,18.2,66.9,18.2,47.64a19.4,19.4,0,0,1,5.17-13.49c-.52-1.27-2.24-6.38.49-13.3,0,0,4.22-1.35,13.82,5.15a47.7,47.7,0,0,1,25.17,0c9.6-6.5,13.81-5.15,13.81-5.15,2.74,6.92,1,12,.5,13.3a19.4,19.4,0,0,1,5.17,13.49c0,19.31-11.75,23.56-22.95,24.8,1.8,1.55,3.41,4.62,3.41,9.31,0,6.72-.06,12.14-.06,13.79,0,1.34.9,2.91,3.46,2.42A50.28,50.28,0,0,0,50.26,0Z"/>
                            </g>
                        </g>
                    </svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="mailto:joshuakery1@gmail.com" target="_blank">
                    <div className={`${styles.sociallink} ${styles.mail} ${small && styles.small}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_2-2" data-name="Layer 2">
                            <path d="M51,0a51,51,0,1,0,51,51A51,51,0,0,0,51,0ZM20.65,28.79h60.7a5.41,5.41,0,0,1,2,.39L52.76,55.79a2.46,2.46,0,0,1-3.46,0L18.67,29.18A5.41,5.41,0,0,1,20.65,28.79ZM15.3,69.85V34.15a6.33,6.33,0,0,1,0-.76h0L36.91,52.11,15.71,71.92A5.5,5.5,0,0,1,15.3,69.85Zm66.05,5.36H20.65a5.25,5.25,0,0,1-.56,0L41,55.65l4.79,4.16a8,8,0,0,0,10.49,0l4.8-4.18h0L81.88,75.18A4.71,4.71,0,0,1,81.35,75.21Zm5.35-5.36a5.37,5.37,0,0,1-.41,2.09L65.14,52.11,86.65,33.39h0a6.33,6.33,0,0,1,0,.76Z"/>
                            </g>
                        </g>
                    </svg>
                    </div>
                </a>
            </li>
        </ul>
    );
}

export default SocialBar;