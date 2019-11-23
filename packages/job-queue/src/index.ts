import { run } from 'graphile-worker'

async function main() {
  const runner = await run({
    connectionString: 'postgresql://postgres@localhost:5432/po_share',
    concurrency: 5,
    pollInterval: 1000,
    taskDirectory: `${__dirname}/tasks`,
  })
}

module.exports = (req, res) => {
  main().catch(err => {
    console.error(err)
    process.exit(1)
  })
}
