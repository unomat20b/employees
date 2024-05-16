import { _ as __nuxt_component_0 } from "./Sidebar-CxNKdF4O.js";
import { resolveComponent, withCtx, createTextVNode, mergeProps, toHandlers, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  components: {
    Sidebar: __nuxt_component_0
  },
  methods: {
    toggleDrawer() {
    },
    goToSettings() {
      this.$router.push("/cards");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_menu = resolveComponent("v-menu");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_sidebar = __nuxt_component_0;
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_app_bar, { app: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, { onClick: $options.toggleDrawer }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Название сайта`);
                  } else {
                    return [
                      createTextVNode("Название сайта")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_menu, { "offset-y": "" }, {
                activator: withCtx(({ on, attrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, attrs, toHandlers(on)), {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, null, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-dots-vertical`);
                              } else {
                                return [
                                  createTextVNode("mdi-dots-vertical")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-dots-vertical")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps({ icon: "" }, attrs, toHandlers(on)), {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-dots-vertical")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1040)
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, { onClick: $options.goToSettings }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Настройки`);
                                    } else {
                                      return [
                                        createTextVNode("Настройки")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Настройки")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, { onClick: $options.goToSettings }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Настройки")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, { onClick: $options.goToSettings }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Настройки")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_app_bar_nav_icon, { onClick: $options.toggleDrawer }, null, 8, ["onClick"]),
                createVNode(_component_v_toolbar_title, null, {
                  default: withCtx(() => [
                    createTextVNode("Название сайта")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_spacer),
                createVNode(_component_v_menu, { "offset-y": "" }, {
                  activator: withCtx(({ on, attrs }) => [
                    createVNode(_component_v_btn, mergeProps({ icon: "" }, attrs, toHandlers(on)), {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-dots-vertical")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, { onClick: $options.goToSettings }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("Настройки")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_sidebar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Добро пожаловать на главную страницу! `);
                  } else {
                    return [
                      createTextVNode(" Добро пожаловать на главную страницу! ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createTextVNode(" Добро пожаловать на главную страницу! ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_app_bar, { app: "" }, {
            default: withCtx(() => [
              createVNode(_component_v_app_bar_nav_icon, { onClick: $options.toggleDrawer }, null, 8, ["onClick"]),
              createVNode(_component_v_toolbar_title, null, {
                default: withCtx(() => [
                  createTextVNode("Название сайта")
                ]),
                _: 1
              }),
              createVNode(_component_v_spacer),
              createVNode(_component_v_menu, { "offset-y": "" }, {
                activator: withCtx(({ on, attrs }) => [
                  createVNode(_component_v_btn, mergeProps({ icon: "" }, attrs, toHandlers(on)), {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-dots-vertical")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, { onClick: $options.goToSettings }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Настройки")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_sidebar),
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createTextVNode(" Добро пожаловать на главную страницу! ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-9U4UHOik.js.map
