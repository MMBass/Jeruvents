/** Get if app currently running on localHost @returns {boolean} */
const isLocalhost = () => (location.hostname === "localhost" || location.hostname === "127.0.0.1");

export default { isLocalhost }