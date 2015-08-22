Youtubeurls = new Mongo.Collection('videourls');

Youtubeurls.allow({
  'insert': function (userId, doc) {
    return true;
  }
});
  