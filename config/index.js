//checking that we are not in dev mode
const dev = process.env.NODE_ENV !== 'production'

//you have to give an absolute url, you would change this to be whatever the site you're hosting from is
// export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'


//for now because my hosting site is the local server, but you can't export the static site and host at the same time. The api will not be up when you try to export and the fetch request will fail. Your api must be hosted somewhere else. 
export const server = dev ? 'http://localhost:3000' : 'http://localhost:3000'