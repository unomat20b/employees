import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const expanded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        app: "",
        "expand-on-hover": "",
        rail: "",
        class: { "hovered-style": _ctx.drawer },
        style: { "background-color": "#C7C7C7" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, {
              density: "compact",
              nav: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    "prepend-icon": "mdi-book",
                    title: "Журнал",
                    value: "myfiles"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
                          link: "",
                          "prepend-icon": "mdi-account-group",
                          title: "Сотрудники",
                          value: "myfiles"
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, mergeProps(props, {
                            link: "",
                            "prepend-icon": "mdi-account-group",
                            title: "Сотрудники",
                            value: "myfiles"
                          }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Управление`);
                                  } else {
                                    return [
                                      createTextVNode("Управление")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Управление")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Должности`);
                                  } else {
                                    return [
                                      createTextVNode("Должности")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Должности")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Расписание`);
                                  } else {
                                    return [
                                      createTextVNode("Расписание")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Расписание")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, { link: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Управление")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { link: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Должности")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { link: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Расписание")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    "prepend-icon": "mdi-shield-account",
                    title: "Админ",
                    value: "starred"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, {
                      "prepend-icon": "mdi-book",
                      title: "Журнал",
                      value: "myfiles"
                    }),
                    createVNode(_component_v_list_group, {
                      modelValue: expanded.value,
                      "onUpdate:modelValue": ($event) => expanded.value = $event
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_list_item, mergeProps(props, {
                          link: "",
                          "prepend-icon": "mdi-account-group",
                          title: "Сотрудники",
                          value: "myfiles"
                        }), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, { link: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("Управление")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, { link: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("Должности")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, { link: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("Расписание")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_list_item, {
                      "prepend-icon": "mdi-shield-account",
                      title: "Админ",
                      value: "starred"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list, {
                density: "compact",
                nav: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    "prepend-icon": "mdi-book",
                    title: "Журнал",
                    value: "myfiles"
                  }),
                  createVNode(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_list_item, mergeProps(props, {
                        link: "",
                        "prepend-icon": "mdi-account-group",
                        title: "Сотрудники",
                        value: "myfiles"
                      }), null, 16)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, { link: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Управление")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, { link: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Должности")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, { link: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Расписание")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_list_item, {
                    "prepend-icon": "mdi-shield-account",
                    title: "Админ",
                    value: "starred"
                  })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cf7eed71"]]);
const _sfc_main$1 = {
  data: () => ({
    items: [
      { title: "Зубенко М. П." },
      { title: "Настройки", to: "/Settings" },
      { title: "Тема" },
      { title: "Выход" }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_menu = resolveComponent("v-menu");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
    activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, mergeProps({ color: "white" }, props), {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, { size: "30" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`mdi-account-circle`);
                  } else {
                    return [
                      createTextVNode("mdi-account-circle")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, { size: "30" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-account-circle")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, mergeProps({ color: "white" }, props), {
            default: withCtx(() => [
              createVNode(_component_v_icon, { size: "30" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-account-circle")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1040)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_list, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_v_list_item, {
                  key: index,
                  to: item.to,
                  link: ""
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(item.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_v_list_item, {
                    key: index,
                    to: item.to,
                    link: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_list, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  key: index,
                  to: item.to,
                  link: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header_button_avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header_button_avatar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    toggleDrawer: Function,
    drawer: Boolean,
    title: String
  },
  emits: ["toggle-hover"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        elevation: 1,
        app: "",
        style: { "top": "0", "width": "100%", "left": "0px", "background-color": "#42D392" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, {
              onClick: __props.toggleDrawer,
              style: { "color": "white" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_toolbar_title, { style: { "color": "white" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(Header_button_avatar, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar_nav_icon, {
                onClick: __props.toggleDrawer,
                style: { "color": "white" }
              }, null, 8, ["onClick"]),
              createVNode(_component_v_toolbar_title, { style: { "color": "white" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ]),
                _: 1
              }),
              createVNode(Header_button_avatar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Sidebar as S,
  _sfc_main as _
};
//# sourceMappingURL=Header-DOO5my5U.js.map
