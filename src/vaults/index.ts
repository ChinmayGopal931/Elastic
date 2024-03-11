// App
import { ObjectCollection } from './types';

// Vaults
import { INDEX_VAULTS_OBJ } from './index/index';

import _ from 'lodash';

export const LIVE_VAULTS: ObjectCollection = _.merge(INDEX_VAULTS_OBJ);
