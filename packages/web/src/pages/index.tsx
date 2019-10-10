import { Person } from '@po-share/queries'
import { Layout } from '../components/Layout'
import requireAuth from '../components/requireAuth'
import UserTracks from '../components/UserTracks'
import Hero from '../components/Hero'

const HomePage = ({ loggedInUser }: { loggedInUser: Person }) => {
  console.log({ loggedInUser })
  return (
    <Layout user={loggedInUser}>
      <Hero>
        <section className="left">
          <h1>Discover patches, tracks, and samples for pocket operators.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            saepe excepturi error ullam, id vitae quas? Ipsum animi totam
            architecto.
          </p>
        </section>
        <img src="/img/po-24.jpg" alt="Pocket Operator" />
      </Hero>
      <div className="Searchbar">
        <input
          type="text"
          placeholder="Search for anything, like 'techno beats, or sample'"
        />
        <svg
          x="0px"
          y="0px"
          width="40"
          viewBox="0 0 56.966 56.966"
          contentStyleType="enableBackground: new 0 0 56.966 56.966"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
	s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
	c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
	s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </div>
      <div className="Banner">
        <h2>Explore the newest uploads for your pocket operators</h2>
        <ul>
          <li>Woah</li>
        </ul>
      </div>

      <div className="Banner Banner--light">
        <h2>Explore the newest uploads for your pocket operators</h2>
        <ul>
          <li>Woah</li>
        </ul>
      </div>

      {/* <h2>User tracks:</h2>
      <UserTracks id={loggedInUser.id} /> */}

      <style jsx>{`
        h1 {
          line-height: 1.4;
          font-size: 2.3em;
        }

        .left p {
          color: #c1c1c1;
          line-height: 1.6;
        }

        .left {
          width: 360px;
          max-width: 100%;
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

        .Searchbar {
          width: 980px;
          max-width: 100%;
          margin: 0 auto;
          display: block;
          padding: 1em;
          background-color: #fff;
          position: absolute;
          top: 420px;
          left: 0;
          right: 0;
          border-radius: 8px;
          box-shadow: 0 11px 24px 0 rgba(7, 7, 7, 0.25);
          transition: 0.1s all ease-in-out;
        }

        .Searchbar svg {
          position: absolute;
          right: 1em;
          top: 50%;
          transform: translateY(-50%);
        }

        .Searchbar svg:hover {
          cursor: pointer;
          fill: blue;
        }

        .Searchbar:hover,
        .Searchbar:focus-within {
          transform: scale(0.97) translatey(4px);
          box-shadow: 0 6px 20px 0 rgba(7, 7, 7, 0.35);
          border: 4px solid blue;
        }

        .Searchbar input {
          padding: 1em;
          width: 100%;
          border-radius: 8px;
          appearance: none;
          border: none;
          font-size: 1.4em;
        }

        .Searchbar input::placeholder {
          color: #3c62f8;
          opacity: 1;
          appearance: none;
        }

        .Banner {
          color: #141618;
          font-size: 1.2em;
          padding: 6em 1.5em 4em;
          background: linear-gradient(#3c62f8, #1142db);
        }

        .Banner.Banner--light {
          color: #141618;
          background: #f8f8f8;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
