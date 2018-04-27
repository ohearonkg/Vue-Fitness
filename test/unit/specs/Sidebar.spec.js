import { createLocalVue, shallow, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Sidebar from "@/components/Sidebar";

describe("Sidebar.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let store;
  let mutations;
  let wrapper;
  let mounted;

  beforeEach(() => {
    mutations = {
      toggleSidebar: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      mutations
    });

    wrapper = shallow(Sidebar, { store, localVue });
  });

  /** navItems Prop */
  it("Should have a navItems prop representing a list of navigation items to display", () => {
    expect(wrapper.props.navItems).not.toBeNull();
  });

  it("Should have a state value representing if the sidebar is open", () => {
    expect(wrapper.vm.sidebarOpen).not.toBeNull();
  });

  /** .sidebar--closed class  */
  it("Should apply a class of sidebar--closed when its sideBarOpen state value is false", () => {
    expect(wrapper.classes()).toContain("sidebar--closed");
  });

  it("Should NOT apply a class of sidebar--open when its sideBarOpen state value is false", () => {
    expect(wrapper.classes()).not.toContain("sidebar--open");
  });

  /** .sidebar--open class  */
  it.skip("Should apply a class of sidebar--open when its sideBarOpen state value is false", () => {
    store.state.sidebarOpen = true;
    expect(wrapper.classes()).toContain("sidebar--open");
  });

  it.skip("Should NOT apply a class of sidebar--closed when its sideBarOpen state value is false", () => {
    expect(wrapper.classes()).not.toContain("sidebar--closed");
  });
  it("Should call its toggleSidebar action when its hamburger icon is clicked", () => {
    const hamburgerWrapper = wrapper.find(".sidebar__close-icon-wrapper");
    hamburgerWrapper.trigger("click");
    expect(mutations.toggleSidebar).toHaveBeenCalled();
  });
});
