---
title: 'ç¥v1ð Astroã¨ãããã¬ã¹CMSã§ä»ã©ããªãã­ã°ãã¤ãã'
layout: '@layouts/BlogLayout.astro'
date: '2022-08-10'
lastmod: '2022-08-11'
tags: ['Astro', 'TypeScript', 'Newt', 'React', 'Jamstack', 'SG']
excerpt: 'éçãµã¤ãã¸ã§ãã¬ã¼ã¿ã¼ã®é»è¹ãã¨Astroã§ãã­ã°ãã¤ãã£ã¦ã¿ã'
---

ä»åã¯ãåæ¥ã¤ãã«æ­£å¼ãªãªã¼ã¹ããã[Astro](https://astro.build/)ãç¨ãã¦ãããããªãã­ã°ãµã¤ããæ§ç¯ãã¾ãã

Astroã«ã¤ãã¦ã¯å¬å¼ãµã¤ãã«ããè¡¨ç¾ããã¦ãã¾ãã([åºå¸](https://docs.astro.build/en/concepts/why-astro/))

> Astro is an all-in-one web framework for building fast, content-focused websites.

websitesã¨ããè¨èããã½ã§ãã­ãå®éã«ãè¤éãªweb applicationãä½ããããªãNext.jsãä½¿ãã°ï¼ã¨å¬å¼ãè¿°ã¹ã¦ãã¾ãã

ããã¦ãããªãç¹å¾´ã¨ãã¦ãåºæ¬çã«ãµã¼ãã¼ãµã¤ãã¬ã³ããªã³ã°ã§ãããMulti Page Appï¼MPAï¼ã§ããã¨è¿°ã¹ããã¦ãã¾ããAstroãéè¦è¦ãã¦ãããã¨ã®ã²ã¨ã¤ã«**åæè¡¨ç¤ºã®é«éå**ããããããã¯ã¯ã©ã¤ã¢ã³ããµã¤ãã¬ã³ããªã³ã°ãããã¯SPAãæ±ããéå¤§ãªåé¡ã¨ãããã¾ããä¾ãã°ãCreate React Appã§ãµã¤ããä½æããã¨ä¸è¦çéãªããã«è¦ãã¦ãå®ã¯åæè¡¨ç¤ºãéããã¨ãããã¾ããç¹ã«ã¹ãã¼ããã©ã³ã ã¨ãã®ç¾è±¡ãé¡èãããã¦ãã®éå»¶ã®ç¯äººã¯ãSPAãæ§ç¯ããããã«éä¿¡ãããå¤§éã®JavaScriptã ã£ãããã¾ãã

Astroã¯ãã­ã³ãå´ã¸ã®JavaScriptã®éä¿¡ãæä½éã«ãã¦åæè¡¨ç¤ºãé«éã«ããããã«è¨­è¨ããã¦ãã¾ããã¨ãããããã©ã«ãã§ã¯ã¼ã­ãJavaScriptãå¿è¦ã§ããã°ç¹æ®ãªè¨æ³ã§æç¤ºããå¿è¦ãããããã§ãã

ããã¾ã§ã®è©±ã ãã§ããGatsbyãããã¯Next.jsã¨ãã£ãããã¾ã§ã®ãã¬ã¼ã ã¯ã¼ã¯ã¨ã¯ä¸ç·ãç»ãã¦ãããã¨ããããã¾ãã­ã

---

è©³ç´°ã«å¥ãåã«ã¡ãªããã»ãã¡ãªãããåæãã¦ããã¾ãã

## ã¡ãªããð¤©

- ããã©ã«ãã§ã¨ã«ããè¡¨ç¤ºãé«é

- ãã£ã¬ã¯ããªæ§é ãã·ã³ãã«ã§ã¨ã£ã¤ãããã

- ã³ã³ãã¼ãã³ãåä½ã§éçºãå¯è½

- æ§ããªUIã©ã¤ãã©ãªãä½¿ãããããã¦æ··ãããããã¤ã¾ãReactã¨Svelteãåæã«ä½¿ç¨ããã¨ãããã¨ãå¯è½ãå±éºãªæ°ããã¦ãªãã¾ãããã

- ðTypeScriptãstrictã¢ã¼ãã«ããã¨åãã§ãã¯ãå¹ãã¦ãã¡ããã¨å±ã£ã¦ããããããã¯v1ã«ãªã£ã¦æ¹åãã¾ããã

## ãã¡ãªããð¤®

- å¾®å¦ãªéçºä½é¨ãã¨ã©ã¼ã§ãµã¼ãã¼ãåæ­¢ãããã¨ãå¤ãããã®åº¦ã«ç«ã¡ä¸ãç´ãå¿è¦ããããããã¯Viteã®åé¡ãªã®ã§ãããã...ã

- è£å®ãå¹ãã¥ãããèªåã¤ã³ãã¼ããå¹ãã¥ãããAstroãã¡ã¤ã«ã®èªåã¤ã³ãã³ããå¹ããªããã¨å¤ãããããã¯å°å³ã«ã¹ãã¬ã¹ããã¾ãã®ã§ä»å¾ã®æ¹åã«æå¾ï¼

---

ä»åä½æãããã­ã°ã®ãµã³ãã«ã¯[ãã¡ã](https://astro-blog-demo.pages.dev/)ãå®ã¯ã»ã¼ãã®ãã­ã°ãµã¤ã...ã

ã³ã¼ãã¯[ãã¡ã](https://github.com/KYOYA-OGA/astro-blog-demo)ãããèªç±ã«ãç¢ºèªããå©ç¨ãã ããã

---

# ã»ããã¢ãã(CSS)

CSS ã«ã¯ãé¦´æã¿tailwindcssãä½¿ç¨ãã¾ããä»åã¯[ãã¡ã](https://github.com/withastro/astro/tree/latest/examples/with-tailwindcss?on=github)ããã¹ã¿ã¼ã¿ã¼ãã¼ããå©ç¨ããã¦ãããã¾ããã

ã²ã¨ã¤æ³¨æç¹ã¨ãã¦ãããã©ã«ãã§ã¯cssãã¡ã¤ã«ãè¦å½ããã¾ããã

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

ã®åºæ¬è¨­å®ããããããå ´åã¯å¥éè¨­å®ãå¿è¦ã«ãªãã¾ãã

## React ã®ã»ããã¢ãã

Astro ã¯ç¹å®ã®ã©ã¤ãã©ãªããã¬ã¼ã ã¯ã¼ã¯ã«ä¾å­ãã¦ããªããããReactã ã£ããSvelteã ã£ããVueã ã£ãããèªç±ã«å©ç¨ãããã¨ãã§ãã¾ãã

ããä»åã¯åäººçãªå¥½ã¿ã«ããReactãæ¡ç¨ãã¾ãã

æåãªã©ã¤ãã©ãªã§ããã°ã¤ã³ãã°ã¬ã¼ã·ã§ã³ãç¨æããã¦ãããããã»ããã¢ããã¯å®¹æã§ãããã®æ©è½ã¯ããªãä¾¿å©ã

```
npx astro add react
```

---

# ã¬ã¤ã¢ã¦ãã¨ã³ã³ãã¼ãã³ãä½æ

Astro ã®æ§æã¯éå¸¸ã«ã·ã³ãã«ã§ãcomponentsãã£ã¬ã¯ããªã§åã³ã³ãã¼ãã³ããç®¡çãlayoutsãã£ã¬ã¯ããªã§åå©ç¨å¯è½ãªã¬ã¤ã¢ã¦ããç®¡çãpagesãã£ã¬ã¯ããªã§åãã¼ã¸ãç®¡çããã ãã§ãã

ãã¡ã¤ã«ãã¼ã¹ã«ã¼ãã£ã³ã°ã¯ä»ã®ãã¬ã¼ã ã¯ã¼ã¯ã§ããã°ãã°æ¡ç¨ããã¦ãã¾ãããç´æçã§è¯ãã§ãã­ã

ã¾ãã¯ã¡ã¤ã³ã¨ãªãã¬ã¤ã¢ã¦ããç¨æãã¾ãã

#### layouts/MainLayout.astro

```astro
---
import Header from '@components/Header'
import Footer from '@components/Footer'
---

<html>
  <head>
    <meta charset="utf-8">
    <title>ã¿ã¤ãã«ã§ã</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body class="dark:bg-primary bg-slate-200 dark:text-gray-100">
    <!-- ã¡ã¤ã³ã®è¦ç´ ãè¶³ããªãã¨ãã«ããã¿ã¼ä¸é¨ã«ééãã§ããã®ãé²ã -->
    <div class="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[100%]">
      <Header />
      <main class="flex-1">
        <slot /> <!-- your content is injected here -->
      </main>
      <Footer/>
    </div>
  </body>
</html>
```

slotã®ç®æã«å­è¦ç´ ãåºåããã¾ãã

ãããã¼ã¨ããã¿ã¼ã¯é©å½ã§ãããããªæãã§ã

#### components/Header.tsx

```tsx
import Container from './Container';

export default function Header() {
  return (
    <header className="py-5 md:py-5 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <a href="/">ã¿ã¤ãã«ã§ã</a>
          </h2>
          <div className="flex items-center space-x-5">
            <a href="/contact" className="">
              ãåãåãã
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
```

#### components/Footer.tsx

```tsx
import Container from './Container';

export default function Footer() {
  return (
    <footer className="dark:bg-secondary bg-slate-300 dark:text-gray-100">
      <Container>
        <p className="text-center py-3">ããã¿ã¼ã§ã</p>
      </Container>
    </footer>
  );
}
```

ãã®ããã«ããã£ã¨jsx(tsx)ãæ··ããããã®ãAstroã®ç¹å¾´ã§ãã

<div class="custom-block info">
  <div class="custom-block-body">
    <p>ãããã¼ã«ã¡ãã¥ã¼ãã¿ã³ãè¿½å ããç­ãJSãå¿è¦ãªå ´åã¯client:loadç­ã®ãã£ã¬ã¯ãã£ããå¿è¦ã«ãªãã¾ãããä»åã¯å²æãã¾ãããã®ãããã®æ©è½ã¯ã¾ãæ¹ãã¦ç´¹ä»ãã¾ãã</p>
  </div>
</div>

---

# Newtããã³ã³ãã³ãåå¾

ãã£ãããªã®ã§ãã¼ã¿ãå¤é¨ã®ãããã¬ã¹CMSããå¼ã£å¼µã£ã¦ãã¾ããããä»åã¯[Newt](https://www.newt.so/) ããã«ãä¸è©±ã«ãªãã¾ãã[microCMS](https://microcms.io/)ããã¨ãããæ¥æ¬èªã§ã®ãããã¬ã¹CMSç°å¢ã®é¸æè¢ãå¢ãã¦ããã®ã¯å¤§å¤åã°ãããã¨ã§ãã

Newtã®ç»é²ãè¨­å®æ¹æ³ã¯çãã¾ãã...ðââï¸ãã¿ã¤ãã«ã»ã¹ã©ãã°ã»ãµã ãã¤ã«ã»æ¬æãå¥åã»åºåã§ããããã«ãã¦ããã¾ããã

å¬å¼ã®[JavaScript SDK](https://github.com/Newt-Inc/newt-client-js)ãç¨ãã¦ãNewtããå¨æç¨¿ãåå¾ããé¢æ°ãç¨æãã¾ãã

#### utils/api.ts

```ts
import { createClient } from 'newt-client-js';
const client = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
});

export const getAllPosts = async () => {
  const allPosts = client
    .getContents({
      appUid: import.meta.env.NEWT_APP_UID,
      modelUid: import.meta.env.NEWT_MODEL_UID,
    })
    .then((content) => content)
    .catch((err) => {
      console.log(err);
      return err;
    });
  return allPosts;
};
```

èªè¨¼æå ±ã¯envãã¡ã¤ã«ã¸ã

#### .env

```
NEWT_SPACE_UID=
NEWT_CDN_API_TOKEN=
NEWT_APP_UID=
NEWT_MODEL_UID=
```

---

# ä¸è¦§ãã¼ã¸ä½æ

ã§ã¯ããããã¼ã¸ã«æç¨¿ä¸è¦§ãã¼ã¸ãã¤ããã¾ãããã

#### pages/index.astro

```astro
---
import { getAllPosts } from 'src/utils/api';
import MainLayout from "@layouts/MainLayout.astro";
import Container from "@components/Container";
import Data from '../utils/data.json';

type Post = typeof Data;

const data = await getAllPosts();
const posts: Post[] = data?.items;

---

<MainLayout>
  <Container className="py-5 md:py-10">
    <!-- ããã«æç¨¿ãè¡¨ç¤º -->
  </Container>
</MainLayout>
```

Astroãã¡ã¤ã«ã§ã¯ãã¤ã³ãã¼ãæãé¢æ°ç­ã¯ä¸é¨ã®ç¹ç·åã«è¨è¼ãã¾ãããã¼ã¯ãã¦ã³ã£ã½ãã

æç¨¿ãè¡¨ç¤ºãããããã®ã³ã³ãã¼ãã³ããããã£ã¨ä½æãã¾ãã

#### components/PostGrid.tsx

```tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PostGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-x-8 lg:gap-10 mb-10 lg:mb-32">
      {children}
    </div>
  );
}
```

#### components/PostCard.astro

```astro

---
// import { Image } from '@astrojs/image/components';
import LinkButton from '@components/LinkButton';

const {id, title, image} = Astro.props;
const imageUrl = image?.src;

---

<article class="shadow-lg flex flex-col h-full rounded-md overflow-hidden dark:bg-slate-700">
  <img src={imageUrl} width={350} alt={title} class="aspect-video object-cover mx-auto">
  <!-- <Image src={imageUrl} width={350} aspectRatio={4/3} alt={title} class="object-cover mx-auto" /> -->
  <div class="px-2 py-3 md:px-5 md:pb-5 space-y-3">
    <h1 class="md:text-2xl">{title}</h1>
    <LinkButton href={`/post/${id}`}>èª­ã</LinkButton>
  </div>
</article>
```

PostCardæ¬ä½ã¯ç»åæé©åã¤ã³ãã°ã¬ã¼ã·ã§ã³ã§ãã@astrojs/imageãä½¿ç¨ããããããastroãã¡ã¤ã«ã§ä½æ...ããã®ã§ãããNewtããéä¿¡ãããç»åãã¹ã¨ã®ç¸æ§ãæªããã«ãã§ããããããæ³£ãæ³£ãéå¸¸ã®imgã¿ã°ãæ¡ç¨ãã¦ãã¾ããããã¯ã©ãã«ãããã...ð­

ãªã³ã¯ã¯ä½¿ãã¾ãããããªã®ã§å¥éã³ã³ãã¼ãã³ããä½æãã¾ãã

#### components/LinkButton.tsx

```tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}

export default function LinkButton({
  children,
  href,
  className = '',
  disabled = false,
}: Props) {
  return (
    <a
      href={href}
      className={`block text-center bg-blue-500 text-white py-2 px-5 rounded-lg  transition ${
        disabled ? 'brightness-50' : 'hover:brightness-110 focus:brightness-110'
      } ${className}`}
    >
      {children}
    </a>
  );
}
```

ããã¾ã§ä½æããã³ã³ãã¼ãã³ããããããã¼ã¸ã«ã¶ã£ãã¿ã¾ãã

#### pages/index.astro

```astro
---
import { getAllPosts } from 'src/utils/api';
import LinkButton from '@components/LinkButton';
import PostGrid from "@components/PostGrid";
import MainLayout from "@layouts/MainLayout.astro";
import Container from "@components/Container";
import PostCard from "@components/PostCard.astro";
import Data from '../utils/data.json';

type Post = typeof Data;

const data = await getAllPosts();
const posts: Post[] = data?.items;

---

<MainLayout>
  <Container className="py-5 md:py-10">
    <PostGrid>
      {posts.map(post=>{
        return <PostCard image={post.thumbnail} id={post._id} title={post.title} />
      })}
    </PostGrid>
    <LinkButton href="/posts/1" className="w-11/12 mx-auto max-w-sm">è¨äºããã£ã¨æ¢ã</LinkButton>
  </Container>
</MainLayout>
```

ããã§[æç¨¿ä¸è¦§](https://astro-blog-demo.pages.dev/)ãè¡¨ç¤ºã§ãã¾ããï¼

---

# è©³ç´°ãã¼ã¸ä½æ

è©³ç´°ãã¼ã¸ãã¤ããããã«ã¯ãã©ã®ãã¼ã¸ãçæãããã¹ãããAstroã«ãããããæãã¦ãããå¿è¦ãããã¾ãããã®ããã«ã¯åãã®ãã¼ã¸ã®åºæã®IDãå¿è¦ã§ãä»åã¯Newtã«ããçºè¡ãããidãç¨ãã¾ããï¼æ¬å½ã¯ã¹ã©ãã°ã®ãããªæå³ã®ããç­ãã®æå­åãæ¨å¥¨ããã¦ãã¾ã...ð¤¡ï¼

~~ãã¾ãèª¬æãæãã¤ããªãããã~~ ã¾ãã¯çµæããè¦ã¦ã¿ã¾ããããå®ã¯ã¾ãã¾Next.jsã§ãã

#### pages/post/[id].astro

```astro
---
// import { Image } from '@astrojs/image/components';
import Container from "@components/Container";
import LinkButton from '@components/LinkButton';
import MainLayout from "@layouts/MainLayout.astro";
import Data from '@utils/data.json';
import { parse } from 'node-html-parser';
import { getAllPosts } from 'src/utils/api';
type Post = typeof Data;

// [id]ã¨ãã¦è¨­å®ããåçãªRouteã«æ¸¡ãå¤ãgetStaticPathsã§åå¾
export async function getStaticPaths(){
  const data = await getAllPosts();
  const posts: Post[] = data.items;

  // æç¨¿ã®ä¸­èº«ãåå¾ã§ãã
  return posts.map(post=>{
    return {
      params: {id: post._id},
      props: {post}
    }
  })
}

const {post} = Astro.props;
const imageUrl = post.thumbnail?.src;
// node-html-parserã§HTMLãã¼ã¿ãè§£æ
const content = parse(post.content);

---

<MainLayout>
  <Container className="py-5 max-w-5xl space-y-4 lg:space-y-8 lg:pb-20">
    <h1 class="text-3xl text-center">{post.title}</h1>
    <img src={imageUrl} alt={post.title} class="aspect-video object-cover">
    <!-- <Image src={imageUrl} width={1200} aspectRatio={16/9} /> -->
    <div class="px-5 prose max-w-none">
      {content}
    </div>
    <LinkButton href="/" className="w-11/12 mx-auto max-w-sm">ãã¼ã ã«æ»ã</LinkButton>
  </Container>
</MainLayout>
```

contentã®ã¹ã¿ã¤ã«ã¯[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)ã§å¦çãã¦ãã¾ããtailwindæé«ã

ã¨ããããããã§[è©³ç´°ãã¼ã¸](https://astro-blog-demo.pages.dev/post/62e512e82ef8b2bda967095f/)ãè¡¨ç¤ºã§ãã¾ããã

---

Astroã¯ã¾ã ã¾ã éçºéä¸ã®ããã§è¥å¹²ã®ä¸å®å®ããããã¾ãããã·ã³ãã«ãªè¨­è¨ã§ã¨ã£ã¤ããããã®ã¯ééããªãã§ãã

åäººçã«ã¯å¤§å¤æ°ã«å¥ã£ã¦ãããã¬ã¼ã ã¯ã¼ã¯ã§ãããåäººãã­ã°ãAstroã§ä½ãç´ãã¾ãããã«ãã´ãªã¼ãã¼ã¸ããã¼ã¯ã¢ã¼ããããã¦ã¿ãã®ã§ä»å¾ç´¹ä»ã§ããã°ã¨æãã¾ãã

ã§ã¯ã¾ãï¼
