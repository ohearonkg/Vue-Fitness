import { shallow } from '@vue/test-utils';
import Modal from '@/components/Modal';

describe('Modal Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(Modal);
  });

  it('Should have a title prop representing the title that is to be dispalyed', () => {
    expect(wrapper.props()).toHaveProperty('title');
  });

  it('Should display its the text passed to its title prop', () => {
    wrapper.setProps({ title: 'Hello World' });
    expect(wrapper.html()).toMatch('Hello World');
  });

  it('Should have a data completed prop representing the day this workout was completed', () => {
    expect(wrapper.props()).toHaveProperty('dateCompleted');
  });

  it('Should display its the text passed to its title prop', () => {
    wrapper.setProps({ dateCompleted: 'Hello World' });
    expect(wrapper.html()).toMatch('Hello World');
  });
});
