import { ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, watchEffect, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    drawer: Boolean
  },
  setup(__props) {
    const props = __props;
    const drawer = ref(props.drawer);
    const expanded = ref(false);
    watchEffect(() => {
      drawer.value = props.drawer;
    });
    function expand() {
      drawer.value = true;
    }
    function collapse() {
      drawer.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_group = resolveComponent("v-list-group");
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        app: "",
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        onMouseenter: expand,
        onMouseleave: collapse
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0416\u0443\u0440\u043D\u0430\u043B`);
                            } else {
                              return [
                                createTextVNode("\u0416\u0443\u0440\u043D\u0430\u043B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0416\u0443\u0440\u043D\u0430\u043B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event,
                    "prepend-icon": "mdi-account-group"
                  }, {
                    activator: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438`);
                                  } else {
                                    return [
                                      createTextVNode("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
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
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
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
                  _push3(ssrRenderComponent(_component_v_list_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0410\u0434\u043C\u0438\u043D`);
                            } else {
                              return [
                                createTextVNode("\u0410\u0434\u043C\u0438\u043D")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0410\u0434\u043C\u0438\u043D")
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
                    createVNode(_component_v_list_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0416\u0443\u0440\u043D\u0430\u043B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list_group, {
                      modelValue: expanded.value,
                      "onUpdate:modelValue": ($event) => expanded.value = $event,
                      "prepend-icon": "mdi-account-group"
                    }, {
                      activator: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_list_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u0434\u043C\u0438\u043D")
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
          } else {
            return [
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0416\u0443\u0440\u043D\u0430\u043B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event,
                    "prepend-icon": "mdi-account-group"
                  }, {
                    activator: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_list_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0410\u0434\u043C\u0438\u043D")
                        ]),
                        _: 1
                      })
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
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
      { text: "id", value: "id" },
      { text: "email", value: "email" },
      { text: "\u0442\u0435\u043B\u0435\u0444\u043E\u043D", value: "phone" }
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
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_data_table = resolveComponent("v-data-table");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, { app: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, { onClick: toggleDrawer }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_app_bar_nav_icon, { onClick: toggleDrawer }),
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { drawer: drawer.value }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          headers,
                          items: employees.value,
                          class: "elevation-1"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            headers,
                            items: employees.value,
                            class: "elevation-1"
                          }, null, 8, ["items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          headers,
                          items: employees.value,
                          class: "elevation-1"
                        }, null, 8, ["items"])
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
                  createVNode(_component_v_app_bar_nav_icon, { onClick: toggleDrawer }),
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$1, { drawer: drawer.value }, null, 8, ["drawer"]),
              createVNode(_component_v_main, null, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        headers,
                        items: employees.value,
                        class: "elevation-1"
                      }, null, 8, ["items"])
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CogiV3jo.mjs.map
