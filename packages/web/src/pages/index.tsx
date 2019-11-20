import { Person, useCurrentPersonQuery } from '@po-share/queries'
import { Layout } from '../components/Layout'
import Hero from '../components/Hero'
import { Searchbar } from '../components/Searchbar'
import { Banner } from '../components/Banner'

const HomePage = () => {
  return (
    <Layout>
      <Hero>
        <section className="left">
          <h1>discover patches, tracks, and samples for pocket operators.</h1>
          <p>
            lorem ipsum dolor sit, amet consectetur adipisicing elit. obcaecati
            saepe excepturi error ullam, id vitae quas? ipsum animi totam
            architecto.
          </p>
        </section>
        <img src="/img/po-24.jpg" alt="Pocket Operator" />
      </Hero>
      <Searchbar />

      <Banner theme="accent">
        <h2>explore the newest uploads for your pocket operators</h2>
        <ul>
          <li>Woah</li>
        </ul>
      </Banner>

      <Banner>
        <h2>explore the newest uploads for your pocket operators</h2>
        <ul>
          <li>Woah</li>
        </ul>
      </Banner>

      {/* <h2>User tracks:</h2>
      <UserTracks id={loggedInUser.id} /> */}

      <style jsx>{`
        h1 {
          line-height: 1.4;
          font-size: 2.3em;
        }

        img {
          width: 600px;
          mix-blend-mode: exclusion;
          filter: invert(1);
          object-fit: cover;
          object-position: top center;
          position: absolute;
          right: -2em;
          bottom: -14em;
        }

        .left p {
          color: #c1c1c1;
          line-height: 1.6;
        }

        .left {
          width: 360px;
          max-width: 100%;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
