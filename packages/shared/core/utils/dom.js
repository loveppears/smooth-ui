export const wrapEvent = (handler, cb) => event => {
  if (handler) {
    handler(event)
  }
  if (!event.defaultPrevented) {
    cb(event)
  }
}
