import styled from 'styled-components'
import BG from '../public/assets/background.jpg'

const Template = styled.div`
  align-items: center;
  background-size: cover;
  background: url(${BG}) fixed repeat-y center top;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ExoticTitle = styled.h2`
  font-weight: 200;
  margin: 0 auto;
  max-width: 540px;
  text-align: center;

  strong {
    font-weight: 600;
  }
`

const BreakDesk = styled.span`
  display: block;
`

export {
  BreakDesk,
  ExoticTitle,
  Template
}
