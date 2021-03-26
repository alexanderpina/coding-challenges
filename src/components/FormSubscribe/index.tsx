import React from 'react'
import { Styles } from './styles'

const FormSubscribe = () => {
  return (
    <form>
      <Styles.Field>
        <Styles.GradientBorder>
          <span>Seu nome</span>
          <Styles.Input type="text"/>
        </Styles.GradientBorder>
      </Styles.Field>

      <Styles.Field>
        <Styles.GradientBorder>
          <span>Seu e-mail</span>
          <Styles.Input type="email"/>
        </Styles.GradientBorder>
      </Styles.Field>

      <Styles.Field>
        <Styles.ButtonSend type="button" value="Começar agora!" />
        <Styles.Small>Um desafio novo a cada 3 dias.</Styles.Small>
      </Styles.Field>
    </form>
  )
};

export default FormSubscribe;
