export default (url) => {
  window.location.assign(url);
  const version = navigator.userAgent.split(' ')[0];
  return `${version} ${url}`;
};