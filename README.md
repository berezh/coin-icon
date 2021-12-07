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

-   [Usage](#Usage)
-   [CoinIcon](#CoinIcon)
-   [Add new icon](#add-new-icon)

## Usage

```tsx
import { CoinIcon } from 'coin-icon';

<CoinIcon name="btc" />;
```

## CoinIcon

CoinIcon component contains all properties declared in `SVGAttributes` interface from `@types/react` package and custom properties described below:

| Property | Type           | Description |
| -------- | -------------- | ----------- |
| `name`   | `CoinIconName` | Icon name   |

## Add new icon

1. Add new svg file into `src/icon/svg` folder

```tsx
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <title>new-coin</title>
    ...
</svg>
```

Make sure that `width` and `height` property are removed.

2. Add to `src/icon/names.ts` file:

```tsx
export const CoinIconNameList = [
    ...
    /* start */
    'new-icon',
    /* end */
    ...
];
```

3. Add to `src/icon/component/index.ts` file:

```tsx

/* start */
import newIcon from './svg/new-icon.svg';
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
