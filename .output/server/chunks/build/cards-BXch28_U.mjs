import { _ as __nuxt_component_0 } from './Sidebar-CxNKdF4O.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  data: () => ({
    dialog: false,
    selectedItem: {},
    items: [
      { id: 1, title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 1", description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 1", details: "\u0414\u0435\u0442\u0430\u043B\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 1" }
      // Добавьте другие карточки
    ]
  }),
  methods: {
    showDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_dialog = resolveComponent("v-dialog");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.items, (item) => {
                            _push5(ssrRenderComponent(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: item.id
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_card, null, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_card_title, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(item.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_card_text, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(item.description)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.description), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_v_card_actions, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_v_btn, {
                                                color: "primary",
                                                onClick: ($event) => $options.showDialog(item)
                                              }, {
                                                default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
                                                  } else {
                                                    return [
                                                      createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  onClick: ($event) => $options.showDialog(item)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.description), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                onClick: ($event) => $options.showDialog(item)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              onClick: ($event) => $options.showDialog(item)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                              return openBlock(), createBlock(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "4",
                                key: item.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            onClick: ($event) => $options.showDialog(item)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_dialog, {
                      modelValue: _ctx.dialog,
                      "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
                      persistent: "",
                      "max-width": "600px"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card_title, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`${ssrInterpolate(_ctx.selectedItem.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_card_text, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`${ssrInterpolate(_ctx.selectedItem.details)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_btn, {
                                        color: "green",
                                        text: "",
                                        onClick: ($event) => _ctx.dialog = false
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`\u0417\u0430\u043A\u0440\u044B\u0442\u044C`);
                                          } else {
                                            return [
                                              createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_btn, {
                                          color: "green",
                                          text: "",
                                          onClick: ($event) => _ctx.dialog = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "green",
                                        text: "",
                                        onClick: ($event) => _ctx.dialog = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "green",
                                      text: "",
                                      onClick: ($event) => _ctx.dialog = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: item.id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          onClick: ($event) => $options.showDialog(item)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_dialog, {
                        modelValue: _ctx.dialog,
                        "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
                        persistent: "",
                        "max-width": "600px"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: "green",
                                    text: "",
                                    onClick: ($event) => _ctx.dialog = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                          return openBlock(), createBlock(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        onClick: ($event) => $options.showDialog(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_dialog, {
                      modelValue: _ctx.dialog,
                      "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
                      persistent: "",
                      "max-width": "600px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "green",
                                  text: "",
                                  onClick: ($event) => _ctx.dialog = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
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
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                        return openBlock(), createBlock(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          md: "4",
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.description), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      onClick: ($event) => $options.showDialog(item)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_dialog, {
                    modelValue: _ctx.dialog,
                    "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
                    persistent: "",
                    "max-width": "600px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.selectedItem.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.selectedItem.details), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "green",
                                text: "",
                                onClick: ($event) => _ctx.dialog = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")
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
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Sidebar: __nuxt_component_0,
    Cards: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_Sidebar = __nuxt_component_0;
  const _component_Cards = __nuxt_component_1;
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Sidebar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Cards, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Sidebar),
          createVNode(_component_Cards)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cards = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cards as default };
//# sourceMappingURL=cards-BXch28_U.mjs.map
