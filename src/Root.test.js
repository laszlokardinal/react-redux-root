import Root from "./Root.js";

describe("Root", () => {
  it("subscribes forceUpdate to store updates", () => {
    const store = {
      subscribe: sinon.spy(),
      getState: () => null,
      dispatch: () => null
    };
    const component = () => null;

    const wrapper = shallow(<Root store={store} component={component} />);

    expect(store.subscribe.callCount).to.equal(1);

    const instance = wrapper.instance();

    sinon.spy(instance, "forceUpdate");

    store.subscribe.args[0][0]();

    expect(instance.forceUpdate.callCount).to.equal(1);
  });

  it("renders the prop Component with the store's state & dispatch", () => {
    const state = {};
    const store = {
      subscribe: () => null,
      getState: () => state,
      dispatch: () => null
    };
    const component = () => null;

    const wrapper = shallow(<Root store={store} component={component} />);

    expect(wrapper.type()).to.equal(component);
    expect(wrapper.prop("state")).to.equal(state);
    expect(wrapper.prop("dispatch")).to.equal(store.dispatch);
  });
});
