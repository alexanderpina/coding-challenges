import styled, { css } from 'styled-components'
import BG from '../public/assets/background.jpg'

const Template = styled.div`
  align-items: center;
  background: url(${BG}) fixed repeat-y center top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type ArticleProps = {
  center?: boolean;
}

const Article = styled.article<ArticleProps>`
  ${({ center }) => center && css`
    text-align: center;
  `}
  padding: 10% 0;
`;

const MainTitle = styled.h2`
  font-size: 27px;
  font-weight: 200;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 540px;
`

const BreakDesk = styled.span`
  display: block;
`

export {
  Article,
  BreakDesk,
  MainTitle,
  Template
}
