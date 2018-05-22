import { shallow } from '@vue/test-utils';
import Modal from '@/components/LogScreen';

describe('Modal Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(LogScreen);
  });

  it('Should have state value of isEditing representing if the user is entering sets information', () => {
    expect(wrapper.state()).toHaveProperty('isEditing');
  });
});
