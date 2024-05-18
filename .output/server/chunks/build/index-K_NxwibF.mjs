import { ref, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2, S as Sidebar } from './Header-f7osCEY8.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "EmployeeTable",
  __ssrInlineRender: true,
  props: {
    headers: Array,
    employees: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_data_table = resolveComponent("v-data-table");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers: __props.headers,
              items: __props.employees,
              class: "elevation-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_data_table, {
                headers: __props.headers,
                items: __props.employees,
                class: "elevation-1"
              }, null, 8, ["headers", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmployeeTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };
    const headers = [
      { text: "\u0418\u043C\u044F", align: "start", value: "name" },
      { text: "ID", value: "id" },
      { text: "Email", value: "email" },
      { text: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", value: "phone" }
    ];
    const employees = ref([
      { name: "\u0420\u043E\u043C\u0430\u043D", id: "12344556", email: "soap@mail.ru", phone: "8-800-555-3535" },
      { name: "\u041E\u043B\u0435\u0433", id: "21734586", email: "some-mail@gmail.ru", phone: "8-800-555-3535" },
      { name: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D", id: "77987985", email: "love@mail.ru", phone: "8-800-555-3535" },
      { name: "\u0415\u0432\u0433\u0435\u043D\u0438\u0439", id: "65229491", email: "one@yandex.ru", phone: "8-800-555-3535" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_main = resolveComponent("v-main");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
                    toggleDrawer
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      title: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
                      toggleDrawer
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_navigation_drawer, {
              app: "",
              "expand-on-hover": "",
              rail: "",
              class: { "drawer-expanded": drawer.value }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Sidebar, { drawer: drawer.value }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Sidebar, { drawer: drawer.value }, null, 8, ["drawer"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, {
              class: "d-flex align-center justify-center",
              style: { "min-height": "300px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    headers,
                    employees: employees.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      headers,
                      employees: employees.value
                    }, null, 8, ["employees"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, {
                    title: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
                    toggleDrawer
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_navigation_drawer, {
                app: "",
                "expand-on-hover": "",
                rail: "",
                class: { "drawer-expanded": drawer.value }
              }, {
                default: withCtx(() => [
                  createVNode(Sidebar, { drawer: drawer.value }, null, 8, ["drawer"])
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_main, {
                class: "d-flex align-center justify-center",
                style: { "min-height": "300px" }
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1, {
                    headers,
                    employees: employees.value
                  }, null, 8, ["employees"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d0d4532"]]);

export { index as default };
//# sourceMappingURL=index-K_NxwibF.mjs.map
