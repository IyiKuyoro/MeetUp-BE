/* eslint-disable no-console */
import winston from 'winston';
import ApiError from '@respondex/apierror';

import config from '../configs';

export default class Logger {
  static info(msg) {
    if (config.NODE_ENV === 'production') {
      console.log(msg);
      winston.log('info', msg);
    } else if (config.NODE_ENV === 'development') {
      console.log(msg);
    }
  }

  static error(error) {
    if (config.NODE_ENV === 'production') {
      console.log(error);
      winston.log('error', error.message, error);
    } else if (config.NODE_ENV === 'development' && !(error instanceof ApiError)) {
      console.log(error);
    }
  }
}
