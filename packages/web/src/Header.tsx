import Link from 'next/link'

export default () => (
  <>
    <header>
      <Link href="/">
        <a>po-share</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/test">
              <a>test</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <style jsx>{`
      header {
        padding: 10px;
        background-color: sandybrown;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      nav ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
      }
    `}</style>
  </>
)
