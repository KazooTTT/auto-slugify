# @kzttools/auto-slugify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## demo

![automatically-generate-slugs](https://pictures.kazoottt.top/2024/02/20240219-b3a3e01f62cec2058120ea89e56da726.png)

demo's site:

<https://slugify.kazoottt.top/>

demo's source code:

<https://github.com/KazooTTT/auto-slugify-webapp>

## 方法: getSlugResult

**描述：** 这个函数用于生成字符串的 slug。

**输入参数：**

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| str | 字符串 | 要生成 slug 的字符串。 |

**返回值：**

| 类型 | 描述 |
| --- | --- |
| 字符串 | 生成的 slug。 |

**示例用法：**

```javascript
const slug = await getSlugResult("Hello, World!");
console.log(slug); // 输出: hello-world
```

```javascript
const slug = await getSlugResult("自动生成slug");
console.log(slug); // 输出: automatically-generate-slugs
```

**注意：** 如果输入的字符串包含中文，函数会先将其翻译为英文，然后再生成 slug。

## Thanks

[bing-translate-api](https://github.com/plainheart/bing-translate-api)

[slugify](https://github.com/simov/slugify)

## License

[MIT](./LICENSE) License © 2024-PRESENT [kazoottt](https://github.com/kazoottt)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kzttools/auto-slugify?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@kzttools/auto-slugify
[npm-downloads-src]: https://img.shields.io/npm/dm/@kzttools/auto-slugify?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@kzttools/auto-slugify
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@kzttools/auto-slugify?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@kzttools/auto-slugify
[license-src]: https://img.shields.io/github/license/kzttools/auto-slugify.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/kzttools/auto-slugify/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@kzttools/auto-slugify
