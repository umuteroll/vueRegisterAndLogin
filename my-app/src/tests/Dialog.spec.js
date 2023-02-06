import { shallowMount } from '@vue/test-utils';
import Dialog from '../components/Dialog.vue';
describe('Dialog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Dialog, {
      propsData: {
        showDialog: true,
        message: 'Merhaba Dünya!',
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it('renders dialog with correct message', () => {
    const messageElement = wrapper.find('p');
    expect(messageElement.text()).toBe('bunu yazz');
  });
  it('emits when close button clicked', () => {
    const closeButton = wrapper.find('button');
    closeButton.trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
