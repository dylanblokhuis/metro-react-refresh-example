if (__DEV__) {
  const ReactRefreshRuntime = require("react-refresh/runtime");
  ReactRefreshRuntime.injectIntoGlobalHook(global);
  const Refresh = {
    performFullRefresh(reason) {
      console.log("Refresh or???");
      //   DevSettings.reload(reason);
    },

    createSignatureFunctionForTransform:
      ReactRefreshRuntime.createSignatureFunctionForTransform,

    isLikelyComponentType: ReactRefreshRuntime.isLikelyComponentType,

    getFamilyByType: ReactRefreshRuntime.getFamilyByType,

    register: ReactRefreshRuntime.register,

    performReactRefresh() {
      ReactRefreshRuntime.performReactRefresh();
      //   DevSettings.onFastRefresh();
    },
  };

  // The metro require polyfill can not have dependencies (applies for all polyfills).
  // Expose `Refresh` by assigning it to global to make it available in the polyfill.
  global[(global.__METRO_GLOBAL_PREFIX__ || "") + "__ReactRefresh"] = Refresh;

  const websocket = new WebSocket("ws://localhost:8081/hot");
  websocket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.type === "update") {
      data.body.modified.forEach(({ module }) => eval(module[1]));
      data.body.added.forEach(({ module }) => eval(module[1]));
    }
  };
  websocket.onopen = () => {
    websocket.send(
      JSON.stringify({
        type: "register-entrypoints",
        entryPoints: ["src/index.js"],
      })
    );
  };
}
