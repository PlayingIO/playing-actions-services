import assert from 'assert';
import makeDebug from 'debug';
import { Service, createService } from 'mostly-feathers-mongoose';
import fp from 'mostly-func';

import ActionModel from '../../models/action.model';
import defaultHooks from './action.hooks';

const debug = makeDebug('playing:actions-services:actions');

const defaultOptions = {
  name: 'actions'
};

export class ActionService extends Service {
  constructor (options) {
    options = fp.assign(defaultOptions, options);
    super(options);
  }

  setup (app) {
    super.setup(app);
    this.hooks(defaultHooks(this.options));
  }
}

export default function init (app, options, hooks) {
  options = fp.assign({ ModelName: 'action' }, options);
  return createService(app, ActionService, ActionModel, options);
}

init.Service = ActionService;
