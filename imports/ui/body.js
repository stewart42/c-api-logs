import { Template } from 'meteor/templating';

import { Api_logs } from '../api/api_logs';

import './body.html';

Template.body.helpers({
  api_logs() {
    return Api_logs.find({}, {
      sort: {
        timeStamp: -1,
      }
    });
  }
});


Template.body.events({
  'submit .new-log'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const clientName = template.find('#clientName').value;
    const endPoint = template.find('#endPoint').value;

    // Insert a task into the collection
    Api_logs.insert({
      timeStamp: new Date(), // current time
      clientName,
      endPoint,
    });

    // Clear form
    target.text.value = '';
  },
});