import { useSSRContext, ref, computed, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3, S as Sidebar } from './Header-DOO5my5U.mjs';
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

const _sfc_main$2 = {
  data() {
    return {
      dialog: false,
      dialogTitle: "",
      inputValue: ""
    };
  },
  methods: {
    open(title2, value = "") {
      this.dialogTitle = title2;
      this.inputValue = value;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    saveChanges() {
      this.$emit("update", { title: this.dialogTitle, value: this.inputValue });
      this.dialog = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_dialog, mergeProps({
    modelValue: $data.dialog,
    "onUpdate:modelValue": ($event) => $data.dialog = $event,
    "max-width": "600px"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.dialogTitle)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.dialogTitle), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
                      modelValue: $data.inputValue,
                      "onUpdate:modelValue": ($event) => $data.inputValue = $event,
                      outlined: ""
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_text_field, {
                        label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
                        modelValue: $data.inputValue,
                        "onUpdate:modelValue": ($event) => $data.inputValue = $event,
                        outlined: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_actions, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "blue darken-1",
                      text: "",
                      onClick: $options.close
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "blue darken-1",
                      text: "",
                      onClick: $options.saveChanges
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue darken-1",
                        text: "",
                        onClick: $options.close
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "blue darken-1",
                        text: "",
                        onClick: $options.saveChanges
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.dialogTitle), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_text_field, {
                      label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
                      modelValue: $data.inputValue,
                      "onUpdate:modelValue": ($event) => $data.inputValue = $event,
                      outlined: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_actions, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_spacer),
                    createVNode(_component_v_btn, {
                      color: "blue darken-1",
                      text: "",
                      onClick: $options.close
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_v_btn, {
                      color: "blue darken-1",
                      text: "",
                      onClick: $options.saveChanges
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, null, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($data.dialogTitle), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
                    modelValue: $data.inputValue,
                    "onUpdate:modelValue": ($event) => $data.inputValue = $event,
                    outlined: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_btn, {
                    color: "blue darken-1",
                    text: "",
                    onClick: $options.close
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_v_btn, {
                    color: "blue darken-1",
                    text: "",
                    onClick: $options.saveChanges
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  data() {
    return {
      fields: {
        "\u0424\u0418\u041E": "",
        "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435": "",
        "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F": "",
        "\u0410\u0434\u0440\u0435\u0441": "",
        "\u0424\u0438\u043B\u0438\u0430\u043B\u044B": "",
        "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F": ""
      }
    };
  },
  components: {
    EditDialog: __nuxt_component_0
  },
  methods: {
    openDialog(title2) {
      this.$refs.editDialog.open(title2, this.fields[title2]);
    },
    handleUpdate(data) {
      this.fields[data.title] = data.value;
    }
  }
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
  const _component_edit_dialog = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "6",
                sm: "10",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card, { outlined: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_icon, {
                                  left: "",
                                  style: { "margin-right": "20px" }
                                }, {
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
                                _push6(` \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C `);
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    left: "",
                                    style: { "margin-right": "20px" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-circle")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list, { style: { "padding-left": "50px" } }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  left: "",
                                  style: { "margin-right": "20px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-circle")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card, { outlined: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                left: "",
                                style: { "margin-right": "20px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-circle")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "6",
                sm: "10",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card, { outlined: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_icon, {
                                  left: "",
                                  style: { "margin-right": "20px" }
                                }, {
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
                                _push6(` \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F `);
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    left: "",
                                    style: { "margin-right": "20px" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-domain")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list, { style: { "padding-left": "50px" } }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`${ssrInterpolate($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_list_item, {
                                          onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_content, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  left: "",
                                  style: { "margin-right": "20px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-domain")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card, { outlined: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                left: "",
                                style: { "margin-right": "20px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-domain")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "6",
                  sm: "10",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { outlined: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              left: "",
                              style: { "margin-right": "20px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-circle")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "6",
                  sm: "10",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { outlined: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              left: "",
                              style: { "margin-right": "20px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-domain")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_list_item, {
                                  onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_edit_dialog, {
          ref: "editDialog",
          onUpdate: $options.handleUpdate
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "6",
                sm: "10",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { outlined: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            left: "",
                            style: { "margin-right": "20px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u0424\u0418\u041E")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u0424\u0418\u041E"] || "\u0424\u0418\u041E"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "6",
                sm: "10",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { outlined: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { style: { "padding-left": "25px" } }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            left: "",
                            style: { "margin-right": "20px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-domain")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list, { style: { "padding-left": "50px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u0410\u0434\u0440\u0435\u0441")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u0410\u0434\u0440\u0435\u0441"] || "\u0410\u0434\u0440\u0435\u0441"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u0424\u0438\u043B\u0438\u0430\u043B\u044B")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u0424\u0438\u043B\u0438\u0430\u043B\u044B"] || "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_list_item, {
                                onClick: ($event) => $options.openDialog("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.fields["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"] || "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), 1)
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
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_edit_dialog, {
            ref: "editDialog",
            onUpdate: $options.handleUpdate
          }, null, 8, ["onUpdate"])
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
const Cards = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-356d41ce"]]);
const title = "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438";
const _sfc_main = {
  __name: "Settings",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const contentMargin = computed(() => drawer.value ? "256px" : "56px");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_main = resolveComponent("v-main");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { title }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Sidebar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, {
              class: "content-area",
              style: [{ marginLeft: contentMargin.value }, { "background-color": "#DDDCDC" }]
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
              createVNode(_sfc_main$3, { title }),
              createVNode(Sidebar),
              createVNode(_component_v_main, {
                class: "content-area",
                style: [{ marginLeft: contentMargin.value }, { "background-color": "#DDDCDC" }]
              }, {
                default: withCtx(() => [
                  createVNode(Cards)
                ]),
                _: 1
              }, 8, ["style"])
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
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a139282a"]]);

export { Settings as default };
//# sourceMappingURL=Settings-R5b0B9_F.mjs.map
