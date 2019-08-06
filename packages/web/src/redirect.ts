import Router from 'next/router'

export default (context: any, target: string) => {
  if (context.res) {
    // On the server send a 303: "See other" redirect
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}
