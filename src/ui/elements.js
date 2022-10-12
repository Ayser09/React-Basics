import styled from 'styled-components'

export const Container = styled.div `
        padding: 25px 15%`

export const Image =styled.img`
        src:${props => props.src};
        height:${props => props.height};
        margin:${props => props.style?.margin};
        alt:${props => props.alt};  
  `
  
  export const Button = ({onClick, color, children}) => {
        return (
        <button className={`btn btn-${color}`} onClick={onClick}>{children}</button>
        )
      }
      export const Input = ({label, type, value, onChnage}) => {
        return (
            <div>
              <label>{label}</label>
              <input type={type} value={value} onChnage={onChnage}/>
            </div>
          )
      }
       // or can export it thiss way
       // export {Button, Input}