import { resolveComponent, withCtx, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2, S as Sidebar } from "./Header-DGqRIiKv.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "./vuetify-components-C7igCSDH.js";
const _sfc_main$1 = {
  props: {
    headers: Array,
    employees: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_data_table = resolveComponent("v-data-table");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_data_table, {
          headers: $props.headers,
          items: $props.employees,
          "items-per-page": 5,
          class: "elevation-1"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_data_table, {
            headers: $props.headers,
            items: $props.employees,
            "items-per-page": 5,
            class: "elevation-1"
          }, null, 8, ["headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmployeeTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmployeeTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const headers = [
  { text: "Имя", value: "name" },
  { text: "ID", value: "id" },
  { text: "Email", value: "email" },
  { text: "Телефон", value: "phone" }
];
const employees = [
  { name: "Роман", id: "12344556", email: "soap@mail.ru", phone: "8-800-555-3535" },
  { name: "Олег", id: "21734586", email: "some-mail@gmail.ru", phone: "8-800-555-3535" },
  { name: "Константин", id: "77987985", email: "love@mail.ru", phone: "8-800-555-3535" },
  { name: "Евгений", id: "65229491", email: "one@yandex.ru", phone: "8-800-555-3535" }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const employees$1 = ref(employees);
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Сотрудники" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Сотрудники" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_navigation_drawer, {
              app: "",
              "expand-on-hover": "",
              rail: "",
              class: { "drawer-expanded": drawer.value },
              style: { "background-color": "#C7C7C7" }
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
              style: { "min-height": "300px", "background-color": "#DDDCDC" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(EmployeeTable, {
                    headers: unref(headers),
                    employees: employees$1.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(EmployeeTable, {
                      headers: unref(headers),
                      employees: employees$1.value
                    }, null, 8, ["headers", "employees"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Сотрудники" })
                ]),
                _: 1
              }),
              createVNode(_component_v_navigation_drawer, {
                app: "",
                "expand-on-hover": "",
                rail: "",
                class: { "drawer-expanded": drawer.value },
                style: { "background-color": "#C7C7C7" }
              }, {
                default: withCtx(() => [
                  createVNode(Sidebar, { drawer: drawer.value }, null, 8, ["drawer"])
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_v_main, {
                class: "d-flex align-center justify-center",
                style: { "min-height": "300px", "background-color": "#DDDCDC" }
              }, {
                default: withCtx(() => [
                  createVNode(EmployeeTable, {
                    headers: unref(headers),
                    employees: employees$1.value
                  }, null, 8, ["headers", "employees"])
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f865b994"]]);
export {
  index as default
};
//# sourceMappingURL=index-BYc_r7dx.js.map
