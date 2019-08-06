import requireAuth from '../src/requireAuth'

const HomePage = () => <div>Hellllo</div>

HomePage.getInitialProps = requireAuth

export default HomePage
