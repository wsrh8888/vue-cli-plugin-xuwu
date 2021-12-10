let test: string

if (process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test') {
  test = '222'
} else if (process.env.API_ENV === 'pre') {
  test = '222'
} else if (process.env.API_ENV === 'prod') {
  test = '222'
}
export { test }
