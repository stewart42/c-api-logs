import { Template } from 'meteor/templating';

import { ApiLogs } from '../api/api_logs';

import './body.html';

Template.body.helpers({
  apilogs() {
    return ApiLogs.find({}, {
      sort: {
        timeStamp: -1,
      },
    });
  },
});


Template.body.events({
  'submit .new-log'(event, templateInstance) {
    // Prevent default browser form submit
    event.preventDefault();

    // todo is this correct?
    const clientName = templateInstance.find('#clientName').value;
    const endPoint = templateInstance.find('#endPoint').value;

    ApiLogs.insert({
      timeStamp: new Date(), // current time
      clientName,
      endPoint,
    });
  },
});
