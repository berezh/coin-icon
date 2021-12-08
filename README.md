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

-   [EmbedIcon](#EmbedIcon)
-   [CoinIcon](#CoinIcon)
-   [Add new icon](#add-new-icon)

## EmbedIcon

The most easy way to use. All you need to do, is to import `EmbedIcon` component.

```tsx
import { EmbedIcon } from 'coin-icon/embed';

<EmbedIcon name="btc" />;
```

But it has one disadvantage, all icons are embed into code. So if you use `EmbedIcon` it will expand the bundle of your code with all possible icons even you don't use them. This problem is solved in [CoinIcon](#CoinIcon)

**Details**

Contains all properties declared in `SVGAttributes` interface from `@types/react` package and custom properties described below:

| Property | Type           | Description                          |
| -------- | -------------- | ------------------------------------ |
| `name`   | `CoinIconName` | TypeScript literal type of icon name |

## CoinIcon

Optimazed way to use icons, since the icon is loading through URL.

**Gettting started**

1. Fist of all you need to define the path for storing icons files. For example - `images/svg/crypto`;
2. Copy all svg icons from `src/svg` (github repo) to your public folder `images/svg/crypto`;
3. Set up `CoinIconProvider` with public folder path:

```tsx
<CoinIconProvider folderPath="images/svg/crypto">
    <App />
</CoinIconProvider>
```

4. Set up the color of the icons with CSS custom property `--coinIconColor`.

```scss
:root {
    --coinIconColor: black;
}
```

5. Import `CoinIcon` to your code:

```tsx
import { CoinIcon } from 'coin-icon/embed';

<CoinIcon name="btc" />;
```

**Details**

Contains all properties declared in `HTMLAttributes<HTMLDivElement>` interface from `@types/react` package and custom properties described below:

| Property | Type           | Description                          |
| -------- | -------------- | ------------------------------------ |
| `name`   | `CoinIconName` | TypeScript literal type of icon name |

## Add new icon

1. Add new svg file into `src/svg` folder

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

3. Add to `src/embed/index.ts` file:

```tsx

/* start */
import newIcon from '../svg/new-icon.svg';
/* end */

const icons: Record<string, React.FC> = {
    ...
    /* start */
    ['new-icon']: newIcon,
    /* end */
    ...
};
```

4. Create Pull Request
