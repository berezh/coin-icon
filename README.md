# coin-icon

<a href="https://www.npmjs.com/package/coin-icon">
    <img src="https://nodei.co/npm/coin-icon.png?mini=true"/>
</a>

Cryptocurrency icons set

[DEMO](https://varp.com/coin-icons)

---

## install

```tsx
npm i coin-icon
```

## Glossary

-   [CoinIcon](#CoinIcon)
-   [Add new icon](#add-new-icon)


## CoinIcon

Optimazed way to use icons, since the icon is loading through URL.

**Gettting started**

1. Fist of all you need to define the path for storing icons files. For example - `images/svg`;
2. Copy all svg icons from `src/svg` (github repo) to your public folder `'images/svg`;
3. Set up `CoinIconProvider` with public folder path:

```tsx
<CoinIconProvider folderPath="'images/svg">
    <App />
</CoinIconProvider>
```

4. Import `CoinIcon` to your code:

```tsx
import { CoinIcon } from 'coin-icon';

<CoinIcon code="btc" />;
```

**Details**

Contains all properties declared in `HTMLAttributes<HTMLDivElement>` interface from `@types/react` package and custom properties described below:

| Property | Type           | Description                          |
| -------- | -------------- | ------------------------------------ |
| `code`   | `CoinIconCode` | TypeScript literal type of icon code |

## Add new icon

1. Add new svg file into `svg` folder

```tsx
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <title>new-coin</title>
    ...
</svg>
```

Make sure that `width` and `height` property are removed.

2. Add to `src/interfaces/index.ts` file:

```tsx
export const CoinIconNameList = [
    ...
    /* start */
    'new-icon',
    /* end */
    ...
];
```

4. Create Pull Request
