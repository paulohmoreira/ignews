import { Header } from "./components/Header";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Gril coding" />
      </main>
    </>
  )
}
