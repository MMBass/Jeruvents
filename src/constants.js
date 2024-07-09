import utils from './utils';

const appTitle = 'Jeruvents';

// Data links
const prodServerUri = 'https://eventim-backend.vercel.app';
const devServerUri = utils.isLocalhost() ? 'http://localhost:5000' : 'https://eventim-backend.vercel.app'; // if running on a cloud server - use the prod url anyway (for case of wrong deploying);
const jerusIcon = 'https://i.etsystatic.com/5559581/r/il/6d56de/1543598097/il_570xN.1543598097_sevf.jpg';

export default {
  appTitle,
  prodServerUri,
  devServerUri,
  jerusIcon
};