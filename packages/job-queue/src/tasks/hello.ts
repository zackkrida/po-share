// tasks/hello.ts
export default async (payload: any, helpers: any) => {
  const { name } = payload
  helpers.logger.info(`Hello, ${name}`)
}
