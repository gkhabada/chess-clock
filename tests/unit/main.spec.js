import { assert } from 'chai';
// import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import TheTimer from '@/components/TheTimer.vue';

describe('Start timer event', () => {
  it('Проверка работы таймера', () => {
    const wrapper = mount(TheTimer, {
      propsData: {
        current: true,
      },
    });
    assert.equal(wrapper.vm.$data.timestamp, 0);
    wrapper.setProps({ run: true });
    setTimeout(() => {
      assert.equal(wrapper.vm.$data.timestamp, 100);
    }, 1000);

    // wrapper.find('button.start-btn').trigger('click');
    // assert.equal(wrapper.vm.$data.stop, true);
  })

});
