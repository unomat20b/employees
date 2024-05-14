import { ref, watch, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
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
const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    drawer: Boolean
  },
  setup(__props) {
    const props = __props;
    const drawer = ref(props.drawer);
    const mini = ref(true);
    const expanded = ref(false);
    watch(() => props.drawer, (val) => {
      drawer.value = val;
    });
    const expand = () => {
      mini.value = false;
    };
    const collapse = () => {
      mini.value = true;
    };
    const toggleExpanded = () => {
      expanded.value = !expanded.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_group = resolveComponent("v-list-group");
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        app: "",
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        "mini-variant": mini.value,
        permanent: "",
        onMouseenter: expand,
        onMouseleave: collapse,
        "mini-variant-width": "64",
        width: "256"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_icon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-book`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-book")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-book")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (!mini.value) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Журнал`);
                              } else {
                                return [
                                  createTextVNode("Журнал")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_v_list_item_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-book")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("Журнал")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event,
                    "prepend-icon": "mdi-account-group",
                    "append-icon": "mdi-chevron-down"
                  }, {
                    activator: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          link: "",
                          onClick: toggleExpanded
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-account-group`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-account-group")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-group")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (!mini.value) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Сотрудники`);
                                    } else {
                                      return [
                                        createTextVNode("Сотрудники")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_v_list_item_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account-group")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Сотрудники")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, {
                            link: "",
                            onClick: toggleExpanded
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-group")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode("Сотрудники")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
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
                  _push3(ssrRenderComponent(_component_v_list_item, { link: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_icon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-shield-account`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-shield-account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-shield-account")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (!mini.value) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Админ`);
                              } else {
                                return [
                                  createTextVNode("Админ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_v_list_item_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-shield-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("Админ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, { link: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-book")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("Журнал")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list_group, {
                      modelValue: expanded.value,
                      "onUpdate:modelValue": ($event) => expanded.value = $event,
                      "prepend-icon": "mdi-account-group",
                      "append-icon": "mdi-chevron-down"
                    }, {
                      activator: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          link: "",
                          onClick: toggleExpanded
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-group")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("Сотрудники")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
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
                    createVNode(_component_v_list_item, { link: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-shield-account")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("Админ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
                  createVNode(_component_v_list_item, { link: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-book")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("Журнал")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list_group, {
                    modelValue: expanded.value,
                    "onUpdate:modelValue": ($event) => expanded.value = $event,
                    "prepend-icon": "mdi-account-group",
                    "append-icon": "mdi-chevron-down"
                  }, {
                    activator: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        link: "",
                        onClick: toggleExpanded
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-group")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("Сотрудники")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
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
                  createVNode(_component_v_list_item, { link: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-shield-account")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      !mini.value ? (openBlock(), createBlock(_component_v_list_item_title, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("Админ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0e920164"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };
    const headers = [
      { text: "Имя", align: "start", value: "name" },
      { text: "id", value: "id" },
      { text: "email", value: "email" },
      { text: "телефон", value: "phone" }
    ];
    const employees = ref([
      { name: "Роман", id: "12344556", email: "soap@mail.ru", phone: "8-800-555-3535" },
      { name: "Олег", id: "21734586", email: "some-mail@gmail.ru", phone: "8-800-555-3535" },
      { name: "Константин", id: "77987985", email: "love@mail.ru", phone: "8-800-555-3535" },
      { name: "Евгений", id: "65229491", email: "one@yandex.ru", phone: "8-800-555-3535" }
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
                        _push4(`Сотрудники`);
                      } else {
                        return [
                          createTextVNode("Сотрудники")
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
                        createTextVNode("Сотрудники")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(Sidebar, { drawer: drawer.value }, null, _parent2, _scopeId));
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
                      createTextVNode("Сотрудники")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(Sidebar, { drawer: drawer.value }, null, 8, ["drawer"]),
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cep6cw7u.js.map
