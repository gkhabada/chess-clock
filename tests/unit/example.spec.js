import { assert } from 'chai'
// import { shallowMount } from '@vue/test-utils'
//import TheTimer from '@/components/TheTimer.vue'
import checkLessThan from '@/utils/checkLessThan'


describe("checkLessThan", function() {

  it("Прибавляет спереди нули", function() {
    assert.equal(checkLessThan(2, 3), '002');
    assert.equal(checkLessThan(2), '02');
    assert.equal(checkLessThan(10, 3), '010');
    assert.equal(checkLessThan(102), '102');
    assert.equal(checkLessThan('2'), '02');
    assert.equal(checkLessThan('2d'), '00');
    assert.equal(checkLessThan('fsdd'), '00');
    assert.equal(checkLessThan('1', 5), '00001');
    assert.equal(checkLessThan(-100, 2), -100);
    assert.equal(checkLessThan('-5'), '-05');
    assert.equal(checkLessThan(undefined), '00');
    assert.equal(checkLessThan(null), '00');
    assert.equal(checkLessThan(100, 'fsd'), '100');
    assert.equal(checkLessThan(5, -100), '05');
  });

});
