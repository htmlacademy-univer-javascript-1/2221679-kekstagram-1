import {loadPictures} from './pictures.js';
import { loadErrored } from './messages.js';
import { sendRequest } from './server-data.js';
import './full-picture.js';
import './upload-form.js';
import './hashtags-validator.js';
import './effects.js';
import './filters.js';

sendRequest(loadPictures, loadErrored, 'GET')();

