import { Layout } from '../components/Layout'
import Hero from '../components/Hero'
import { Searchbar } from '../components/Searchbar'
import { Box } from '../components/Box'
import { requireUnauth } from '../lib/requireUnauth'
import { withApollo } from '../lib/apollo'
import { Stack } from '../components/Stack'
import { Button } from '../components/Button'

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

      <Box theme="accent" spaceY="xlarge">
        <h2>explore the newest uploads for your pocket operators</h2>
        <ul>
          <li>Woah</li>
        </ul>
      </Box>

      <Box align="right" spaceY="xlarge">
        <Stack space="small">
          <h2>here's another one of these damn banners</h2>
          <p>This one is centered—pretty great, eh?</p>
          <Button>I thought you'd like it.</Button>
        </Stack>
      </Box>

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

HomePage.getInitialProps = requireUnauth('/dashboard')

export default withApollo(HomePage)
