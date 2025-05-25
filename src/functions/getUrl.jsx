
function getUrl () {

  // const baseURL = process.env.REACT_APP_BASE_URL
  let baseURL;
  const localURL = import.meta.env.VITE_REACT_APP_BASE_URL_LOCAL
  const netURL = import.meta.env.VITE_REACT_APP_BASE_URL_NETWORK
  const deployedURL = import.meta.env.VITE_REACT_APP_BASE_URL_DEPLOY

  // console.log(`localURL: ${localURL}`)
  // console.log(`netURL: ${netURL}`)
  // console.log(`deployedURL: ${deployedURL}`)


  const  winLocalHref = window.location.href;

  // if(winLocalHref.includes('localhost')) {
  if(winLocalHref.includes('127.0.0.1')) {
    // console.log(`BASE URL LOCAL: ${winLocalHref}`);
    baseURL = localURL;
  } else if(winLocalHref.includes('/sandwiches')) {
    baseURL = deployedURL;
  } else {
    baseURL = netURL;
  }
  // console.log(`baseURL: ${baseURL}`)
	
	return baseURL;
}

export default getUrl;
