import Axios from 'axios';
import config from 'config';

import { addErrorCatching } from './interceptors';

const steamClient = Axios.create({
  baseURL: `${config.steamApi}`,
});

export default addErrorCatching(steamClient);
