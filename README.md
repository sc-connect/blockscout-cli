[![NPM Version](https://img.shields.io/npm/v/blockscout-cli)](https://www.npmjs.com/package/blockscout-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/blockscout)](https://www.npmjs.com/package/blockscout-cli)
[![Minified Size](https://img.shields.io/bundlephobia/min/blockscout-cli)](https://www.npmjs.com/package/blockscout-cli)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli?ref=badge_shield)

# [BlockScout CLI](https://github.com/aaop3734/blockscout-cli)

A TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios) to make HTTP requests to the BlockScout API for any Front-end framework based on JavaScript.

## 📚 Install

```bash
npm install blockscout-cli
```

or

```bash
yarn add blockscout-cli
```

# 🚀 Front-end Examples

## ⚙️ Configuration

In file `blockscout-cli.service.ts`

```typescript
import { Configuration, DefaultApi } from 'blockscout-cli'

const config = new Configuration({
  basePath: 'https://eth.blockscout.com/api/v2/',
})

const BlockscoutService = new DefaultApi(config)
export default BlockscoutService
```

## 🔨 Usage

```tsx
import React from 'react'

import BlockscoutService from '@/services/blockscout-cli.service'

const blockScoutSearch = async (q: string | undefined) => {
  const result = await BlockscoutService.search(q)

  return result.data
}

function Home() {
  const onClick = async () => {
    const result = await blockScoutSearch('USDT')

    console.log(result)
  }

  return (
    <>
      <button onClick={onClick}>Search</button>
    </>
  )
}

export default Home
```

# 🚀 Back-end Examples (With NestJS)

## ⚙️ Configuration

In file `blockscout.service.ts`

```typescript
import { Injectable } from '@nestjs/common'
import { Configuration, DefaultApi } from 'blockscout-cli'

@Injectable()
export class BlockscoutService extends DefaultApi {
  constructor() {
    super(
      new Configuration({
        basePath: 'https://eth.blockscout.com/api/v2',
      }),
    )
  }
}
```

In file `app.module.ts`

```typescript
import { Global, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlockscoutService } from './blockscout.service'

@Global()
@Module({
  providers: [BlockscoutService],
  exports: [BlockscoutService],
})
export class GlobalModule {}

@Module({
  imports: [GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## 🔨 Usage

```typescript
import { Injectable } from '@nestjs/common'
import { BlockscoutService } from './blockscout.service'

@Injectable()
export class AppService {
  constructor(private blockscoutService: BlockscoutService) {}

  async getHomeStarts() {
    try {
      const { data } = await this.blockscoutService.getStats()

      console.log(data)
      return data
    } catch (e) {
      console.log(e)
    }
  }
}
```

## 🖲️ Roadmap

| Feature                          | Status |
| -------------------------------- | :----: |
| NextJS + Tanstack Query          |   ✅   |
| React + Tanstack Query           |   ✅   |
| NodeJS with ES Module + CommonJS |  ✅️   |
| Strict Types Response            |   ✅   |
| Strict Types Payload             |   ⚠️   |

!!! Note: Typescript Strict now is only with response.

- Types is base on [Blockscout front-end](https://github.com/blockscout/frontend/tree/main/types/api). I modified to adapt with api-docs
  > example: [eth blockscout scan](https://eth.blockscout.com/api-docs)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli?ref=badge_large)
