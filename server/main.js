import { Meteor } from 'meteor/meteor';
import { ApiLogs } from '../imports/api/api_logs.js';

Meteor.startup(() => {
  // code to run on server at startup
  // seed the db
  // todo find a better place for this
  ApiLogs.remove({});

  const endPoints = [
    'api/client',
    'api/client/address',
    'api/account',
    'api/login',
  ];

  const startDate = new Date();

  for (let i = 0; i < 1000; i += 1) {
    const log = {
      timeStamp: new Date(startDate.getTime() - (Math.random() * 365 * 60 * 60 * 24 * 1000)),
      clientName: `client${Math.floor(Math.random() * 200) + 1}`,
      endPoint: endPoints[(Math.floor(Math.random() * endPoints.length))],
    };
    ApiLogs.insert(log);
  }
});
