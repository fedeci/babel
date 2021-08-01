import type { PluginObject } from "./validation/plugins";
import type { ParserOptions } from "@babel/parser";
import type { File } from "@babel/types";

export default class Plugin {
  key: string | undefined | null;
  manipulateOptions: ((options: unknown, parserOpts: unknown) => void) | void;
  post: Function | void;
  pre: Function | void;
  visitor: {};

  parserOverride: (
    code: string,
    parserOpts: ParserOptions,
    parse: Function,
  ) => File | void;
  generatorOverride: Function | void;

  options: {};

  constructor(plugin: PluginObject, options: {}, key?: string) {
    this.key = plugin.name || key;

    this.manipulateOptions = plugin.manipulateOptions;
    this.post = plugin.post;
    this.pre = plugin.pre;
    this.visitor = plugin.visitor || {};
    this.parserOverride = plugin.parserOverride;
    this.generatorOverride = plugin.generatorOverride;

    this.options = options;
  }
}
