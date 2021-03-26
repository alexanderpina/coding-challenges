import { Styles } from '../styles'
import Head from 'next/head'
import Header from '../src/components/Header'
import FormSubscribe from 'src/components/FormSubscribe'

const Home = () =>
    <Styles.Template>
      <Head>
        <title>Coding Challenges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <Styles.Article center>
            <Styles.MainTitle>
              Já pensou em trabalhar para o <strong>Google</strong>,

              <Styles.BreakDesk>
                <strong> Amazon</strong>, <strong>Facebook</strong>, <strong>Spotify</strong> ou <strong>Microsoft</strong>?
              </Styles.BreakDesk>
            </Styles.MainTitle>
          </Styles.Article>

          <Styles.Article center>
            <h3>Prepare-se para a vaga dos seus sonhos!</h3>
            <Styles.Subtitle>Nossos desafios são baseados nos mesmos utilizados por essas empresas, vamos te ajudar a se preparar para conseguir a sua vaga dos sonhos!</Styles.Subtitle>

            <FormSubscribe />
          </Styles.Article>

          <Styles.Article center>
            <h3>O que você tem a ganhar?</h3>


          </Styles.Article>
        </section>
      </main>
    </Styles.Template>


export default Home;
