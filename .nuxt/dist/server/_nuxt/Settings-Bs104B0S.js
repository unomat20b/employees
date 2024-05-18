import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, ref } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2, S as Sidebar } from "./Header-f7osCEY8.js";
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
  name: "Cards"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card, { outlined: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`mdi-account-circle`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-account-circle")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(` Пользователь `);
                              } else {
                                return [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-circle")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Пользователь ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`ФИО`);
                                                } else {
                                                  return [
                                                    createTextVNode("ФИО")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("ФИО")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Контактные данные`);
                                                } else {
                                                  return [
                                                    createTextVNode("Контактные данные")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Контактные данные")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Личная информация`);
                                                } else {
                                                  return [
                                                    createTextVNode("Личная информация")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Личная информация")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("ФИО")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Контактные данные")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Личная информация")
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
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("ФИО")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Контактные данные")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Личная информация")
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { left: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-circle")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Пользователь ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("ФИО")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Контактные данные")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Личная информация")
                                          ]),
                                          _: 1
                                        })
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card, { outlined: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-circle")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Пользователь ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("ФИО")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Контактные данные")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Личная информация")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card, { outlined: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`mdi-domain`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-domain")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(` Компания `);
                              } else {
                                return [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-domain")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Компания ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Адрес`);
                                                } else {
                                                  return [
                                                    createTextVNode("Адрес")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Адрес")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Филиалы`);
                                                } else {
                                                  return [
                                                    createTextVNode("Филиалы")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Филиалы")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Контактная информация`);
                                                } else {
                                                  return [
                                                    createTextVNode("Контактная информация")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Контактная информация")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Адрес")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Филиалы")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Контактная информация")
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
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Адрес")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Филиалы")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Контактная информация")
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { left: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-domain")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Компания ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Адрес")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Филиалы")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Контактная информация")
                                          ]),
                                          _: 1
                                        })
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card, { outlined: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-domain")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Компания ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Адрес")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Филиалы")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Контактная информация")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { outlined: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-circle")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Пользователь ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("ФИО")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Контактные данные")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Личная информация")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { outlined: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-domain")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Компания ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Адрес")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Филиалы")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Контактная информация")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { outlined: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Пользователь ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("ФИО")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Контактные данные")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Личная информация")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { outlined: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-domain")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Компания ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Адрес")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Филиалы")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Контактная информация")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cards = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8a6a65af"]]);
const _sfc_main = {
  __name: "Settings",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };
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
                    title: "Сотрудники",
                    toggleDrawer
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      title: "Сотрудники",
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
                  _push3(ssrRenderComponent(Cards, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Cards)
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
                    title: "Сотрудники",
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
                  createVNode(Cards)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c58e3c29"]]);
export {
  Settings as default
};
//# sourceMappingURL=Settings-Bs104B0S.js.map
