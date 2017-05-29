import { Template } from 'meteor/templating';

import { Api_logs } from '../api/api_logs';

import './body.html';

Template.body.helpers({
  api_logs() {
      return Api_logs.find({});
  }
});