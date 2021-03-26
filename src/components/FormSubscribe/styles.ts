import styled from 'styled-components'

const Field = styled.div`
  margin: 2em auto;
`;

const GradientBorder = styled.label`
  background: linear-gradient(to right, #0098ff, #00f1e6);
  border-radius: 10px;
  display: inline-block;
  padding: 1px;
  position: relative;

  span {
    bottom: 0;
    color: #00ffff;
    height: 22px;
    left: 17px;
    margin: auto;
    position: absolute;
    top: 0;
  }
`

const Input = styled.input`
  background: #350862;
  border: none;
  border-radius: 10px;
  color: #00ffff;
  padding: 15px 15px 20px;
  width: 360px;
`

const ButtonSend = styled.input`
  background: linear-gradient(to right, #45108a, #7c1dc9);
  border: none;
  border-radius: 10px;
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 1.5em;
  padding: 12px 15px 14px;
  width: 215px;
`

const Small = styled.small`
  display: block;
`

export const Styles = {
  ButtonSend,
  Field,
  Input,
  GradientBorder,
  Small
}
