import { module, test } from 'qunit';
import { setupTest } from 'pop-pays-ember-interview/tests/helpers';

module('Unit | Controller | location', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:location');
    assert.ok(controller);
  });
});
