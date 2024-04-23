import React from 'react'
import styled from 'styled-components'

const ToastContainer = styled.div`
    width: 26rem;
    border-radius: 10px;
    padding: 10px 25px;
    margin: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    background-color: ${props => {
        switch (props.type) {
            case 'success':
                return '#d4edda'
            case 'error':
                return '#f8d7da'
            case 'warning':
                return '#fff3cd'
            case 'info':
                return '#d1ecf1'
            default:
                return '#fff'
        }
    }};
    border-left: 10px solid;
    border-color: ${props => {
        switch (props.type) {
            case 'success':
                return '#c3e6cb'
            case 'error':
                return '#f5c6cb'
            case 'warning':
                return '#ffeeba'
            case 'info':
                return '#bee5eb'
            default:
                return '#fff'
        }
    }};
`
export default function Toast({ type, title, message }) {
  return (
    <ToastContainer type={type}>
      <h3>{title}</h3>
      <p>{message}</p>
    </ToastContainer>
  )
}
