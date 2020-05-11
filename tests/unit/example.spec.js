import { assert } from 'chai'
// import { shallowMount } from '@vue/test-utils'
//import TheTimer from '@/components/TheTimer.vue'
import checkLessThan from '@/utils/checkLessThan'


describe("checkLessThan", function() {

  it("Прибавляет спереди нули", function() {
    assert.equal(checkLessThan(2, 3), '002');
    assert.equal(checkLessThan(2), '02');
    assert.equal(checkLessThan(10, 3), '010');
    assert.equal(checkLessThan(98), '98');
    assert.equal(checkLessThan(102), '102');
    assert.equal(checkLessThan('2'), '02');
    assert.equal(checkLessThan('2d'), '00');
    assert.equal(checkLessThan('fsdd'), '00');
  });

});
