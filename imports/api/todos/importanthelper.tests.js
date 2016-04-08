/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { Important } from './importanthelper.js';

if (Meteor.isServer) {
  describe('importanthelper', function () {
    describe('clean', function () {
      it('sets important to false and does not modify the text if no !', function () {
        const text = 'this is a random bit of text';
        const result = Important.clean(text);
        assert.equal(result.text, text);
        assert.equal(result.important, false);
      });

      it('sets important to true if text begins with !', function () {
        const text = '!this is a random bit of important text';
        const result = Important.clean(text);
        assert.equal(result.important, true);
      });

      it('removes the ! from the beginning of the text', function () {
        const text = '!this is a random bit of important text';
        const expectedCleanText = 'this is a random bit of important text';
        const result = Important.clean(text);
        assert.equal(result.text, expectedCleanText);
      });
    });
  });
}
