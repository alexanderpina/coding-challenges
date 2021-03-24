import { BreakDesk, ExoticTitle, Template } from '../styles'
import Head from 'next/head'
import Header from '../src/components/Header'

const Home = () =>
    <Template>
      <Head>
        <title>Coding Challenges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <article>
            <ExoticTitle>
              Já pensou em trabalhar para o <strong>Google</strong>,

              <BreakDesk>
                <strong> Amazon</strong>, <strong>Facebook</strong>, <strong>Spotify</strong> ou <strong>Microsoft</strong>?
              </BreakDesk>
            </ExoticTitle>
          </article>

          <article>
            <h3>Prepare-se para a vaga dos seus sonhos!</h3>
            <p>Nossos desafios são baseados nos mesmos utilizados por essas empresas, vamos te ajudar a se preparar para conseguir a sua vaga dos sonhos!</p>

            <form>
              <div>
                <label>
                  <span>Seu nome</span>
                  <input type="text"/>
                </label>
              </div>

              <div>
                <label>
                  <span>Seu e-mail</span>
                  <input type="email"/>
                </label>
              </div>

              <div>
                <button>Começar agora!</button>
                <p>Um desafio novo a cada 3 dias.</p>
              </div>
            </form>
          </article>

          <article>
            <h3>O que você tem a ganhar?</h3>


          </article>
        </section>
      </main>
    </Template>


export default Home;
