import { assert } from 'chai';
// import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import TheTimer from '@/components/TheTimer.vue';

describe('Start timer event', () => {
  it('Проверка работы таймера', () => {
    const wrapper = mount(TheTimer);
    assert(wrapper.vm.timestamp).to.be(0);
    wrapper.setProps({ run: true });
    setTimeout(() => {
      assert(wrapper.vm.timestamp).to.be(100);
    }, 1000);

    // wrapper.find('button.start-btn').trigger('click');
    // assert(wrapper.vm.stop).to.be(true);
  })
})
