import Vue from 'vue';
import GettingStarted from '@/components/GettingStarted';

describe('GettingStarted.vue', () => {
  let wrapper;
  beforeEach(() => {
    const Constructor = Vue.extend(GettingStarted);
    wrapper = new Constructor().$mount();
  });

  it('Should prompt the user for a username', () => {
    expect(
      wrapper.$el.querySelectorAll('.sign-in-form__input')[0].placeholder,
    ).toMatch('Username');
  });

  it('Should prompt the user for a password', () => {
    expect(
      wrapper.$el.querySelectorAll('.sign-in-form__input')[1].placeholder,
    ).toMatch('Password');
  });
});
