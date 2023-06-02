import {css} from "styled-components"


export const mobile = (props) =>{
    return css`                                 // คือส่ง css แบบ styled-component ไปเรียกใช้โดยฟังก์ชั่น
        @media only screen and (max-width: 380px){
            ${props}                            // รับprops มาแสดงจาก พารามิเตอร์
        }`;
}