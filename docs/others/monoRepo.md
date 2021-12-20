# Monorepo

Monorepo 其实就是将多个项目整合到一个 git 项目中进行管理的一种方式。应该大家都有用过或者见过这种代码管理方式，可能不清晰这个名词。很多知名开源项目都采用这种方式，比如 babel、vue3 等等。

![babel](../images/babel.png)

与 Monorepo 相对应的就是将多个项目分开在不同的代码仓库中进行管理，即 multi repo。两者的关系可以见下图。

![monorepo](../images/monorepo.png)

## Monorepo 的优势

### 方便管理

在新人入职公司之后，第一天应该都是在开通各种 Git 仓库的权限吧，然后需要在每个项目安装依赖，最后才能将代码跑起来。

如果采用 Monorepo 的管理方式的话，这个过程将会变得简单不少。因为代码全部都集中在一个仓库中进行管理，所以我们只需要 clone 一个 Git 仓库，很便捷的就可以将依赖安装好，并启动项目。

### 代码复用

身为一个有操守的程序员，大家肯定都有在遵循着 **DRY** (Don’t Repeat Yourself) 原则，即尽量的去实现代码复用。在单个项目中实现代码复用非常的简单，可以将需要复用的代码存放在单独的文件夹中，需要时从这里取即可。

如果是在不同的项目之间需要进行代码复用呢，当然我们也有办法，比如将复用逻辑提取为 npm 包，在需要的项目中引入这个包也能实现代码复用。

这个方式也有一些问题，比如在 npm 开发时，我们需要使用 `npm link` 或者 `yarn link`的方式来开发

// TODO: 写点 link 存在的一些问题

在项目上线之后，如果有需求或者 bug 需要对 npm 包(称作 moduleA 吧)中的代码进行改动，你可能需要执行以下几步

1. moduleA 基于 master 迁出新的分支，进行开发
2. 在项目中用 link 的方式安装 moduleA
3. moduleA 开发完成并本地自测完成后，push 到测试分支
4. 项目也需要基于 master 迁出新的分支，更改 moduleA 的版本号，或者进行这个需求的其他代码开发，发布到测试分支，可能你会基于 tag 的方式在项目中使用 moduleA
5. 测试环境测试没问题后，需要先合并 moduleA 到 release，再合并项目分支

这一系列操作下来还是比较繁琐的，对公有 npm 包的管理也需要一定的成本。然而，如果你选用了 Monorepo，上面的问题都可以较好的解决。

在 Monorepo 中进行代码复用就跟在单个项目中一样的简单，同样将复用代码提取在单独的文件夹。在迭代开始时，可以基于一个 commit 提交本次更新的内容，也便于代码 review

### 工程化统一

在 multi repo 的项目中，由于每个项目都是割裂的，所以每个项目都需要单独的 eslint、prettier 以及其他一些基础建设，这样的工作都是重复且简单的，如果要在每个项目中都保持规则、代码风格的统一，那么就需要在每个项目中 CV 这部分逻辑，这就与我们的 DRY 原则冲突了。

## Monorepo 缺点

当然，Monorepo 也并非银弹，它也带了一些新的问题

- 如果项目太大，git 操作、安装依赖等会变得很慢
- Monorepo 将多个项目整合在了一起，所有项目都是对全体员工开放的，没有办法使用 Git 对项目做文件夹级别的权限控制。从另一方面来说，因为代码都是开放的，员工可能因此更加注重代码质量。

## workspaces

workspaces(工作区) 最早是 yarn 提出，用于简化 Monorepo 模式下本地依赖包的管理。在 workspaces 推出之前，我们需要手动 link ，当本地依赖太多时，这个过程就稍显繁琐了。在 npm7 之后，npm 也提供了对 worKspaces 的支持。以 npm workspaces 为例简单讲讲 workspaces 的使用

### npm workspaces

定义一个 workspaces 通常的做法是在 `package.json` 中添加 `workspaces` 字段，并加上 `private` 防止误发布到 npm 上，毕竟项目文件夹下的其他项目才是我们真正的 npm 包，那么此时我们的 `package.json` 就像这样

```json
{
  "name": "npm-spaces",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["packages/*"]
}
```

此时我们的 packages 文件夹就是一个工作区，我们在 packages 文件夹新建两个文件夹 package-a、package-b 即为三个独立的项目，每个文件夹下都建一个独立 package.json 文件，npm 也为我们提供了命令

```bash
npm init -w ./packages/package-c
```

该命令会自动会在 packages 文件夹下创建 package-c 文件夹，并生成 package.json

当我们需要在子项目中安装依赖时，可以使用

```bash
npm install lodash-es package-b -w package-a
```

上面的命令可以在 package-a 项目中安装 lodash-es 和 package-b，这个 package-b 仓库不会前往 npm 源上去查找，而是先寻找工作区内是否存在该项目，存在就直接安装工作区内的项目。

此时我们的项目应该是下面这个结构

```bash
├── node_modules
│    ├── lodash-es
│    ├── package-a
│    ├── package-b
│    └── package-c
│
├── packages
│    ├── package-a
│    │   └──  package.json
│    │
│    ├── package-b
│    │   └──  package.json
│    │
│    └── package-b
│        └── package.json
└── package.json
```

此时可以发现 node_modules 文件夹下三个 package 都是符号链接，即 node_modules 文件夹下都是对 packages 文件夹下子项目的引用。

// TODO: 拓展符号链接

### yarn workspaces

yarn workspaces 跟 npm 用法相似，假设我们已经有了 packages 文件夹，文件夹下有 `package-a`，`package-b`，`package-c`三个子文件夹，且都有自己的 `package.json`

我们使用 `yarn workspace` 命令来安装依赖

```shell
yarn workspace package-a add react package-b -S
```

即在 package-a 项目中，安装 react 和 package-b 包，点开 node_modules 一看，好家伙，package-b 安装的版本是 0.5，根本不是我们预想中的本地 package-b。

打开 npm 搜索 package-b，四年前就有人把 `package-b` 包上传到 npm 了，还有一个 `package-c` 也是他上传的 😂，合着别人四年前就开始实践 Monorepo 了。温馨提示，实践的时候可以搭建私有 npm 服务，将 demo 上传到公有仓库是不太优雅的。

![package-b](../images/package-b.png)

如果需要安装本地的包，则需要指定 version 来精确匹配，然后我把本地 package-b version 改为 0.5.0（为了看匹配的是本地还是 npm 源）

```shell
yarn workspace package-a add package-b@0.5 -S
```

嗯，这回没有去 npm 源下载

但是这样肯定不行，于是 yarn V2 推出了 **workspace** 协议，执行安装依赖命令后

```shell
yarn workspace package-a add package-b -D
```

package-a 下的 `package.json`可能看起来是这样

```json
{
  "name": "package-a",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "devDependencies": {
    "package-b": "workspace:^"
  }
}
```

workspaces 跟 semver 规则相匹配，假设你的 package.json 长下面这样，且你的所有工作区项目的版本都为 1.5.0

```json
{
  "dependencies": {
    "star": "workspace:*",
    "caret": "workspace:^",
    "tilde": "workspace:~",
    "range": "workspace:^1.2.3",
    "path": "workspace:path/to/baz"
  }
}
```

在你发布时，package.json 将会根据 semver 规则进行转换

```json
{
  "dependencies": {
    "star": "1.5.0",
    "caret": "^1.5.0",
    "tilde": "~1.5.0",
    "range": "^1.2.3",
    "path": "1.5.0"
  }
}
```

## lerna

如果你了解过 monoRepo，那么你应该听过 lerna，用 [lerna](https://lerna.js.org/) 官网中的话来说的话就是

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

lerna 的核心指令是 `lerna bootstrap` 和 `lerna publish`，前者处理依赖问题，后者解决发布问题，这里简单的介绍一下 lerna 的使用。

让我们先用 `lerna init` 新建一个 lerna 项目，并在 packages 文件夹下使用 `lerna create` 创建 `package-a`, `package-b` 和 `package-c` 三个子项目，在三个项目中都安装上依赖。

```shell
lerna add axios --scope package-a
```

这时候查看我们的文件夹，应该是下面的结构

```shell
├── packages
│    ├── package-a
│    │   ├──  node_modules
│    │   │    └── axios
│    │   └──  package.json
│    │
│    ├── package-b
│    │   ├──  node_modules
│    │   │    └──  axios
│    │   └──  package.json
│    │
│    └── package-b
│    │   ├──  node_modules
│    │   │    └──  axios
│        └── package.json
├── lerna.json
└── package.json
```

可以看到 lerna 在三个项目中都安装了 axios，显然是没有必要的。lerna 也提供了方法去处理依赖问题。

先用 `lerna clean` 去清除掉所有 packages 下的 node_modules，然后用 `lerna bootstrap --hoist` 将所有依赖都提升至根目录。

如果你在安装 axios 的时候指定了 axios 的版本，那么就会发现 lerna 其实是将使用的多的 axios 版本进行提升，比如 package-a 中的 axios 版本为 ^0.23，package-b 中的 axios 版本为 ^0.24.0，package-c 中的 axios 版本为 ^0.24.1(举个例子，当前 axios 还没有这个版本)，lerna 会尽可能的将符合 semver 规则的版本进行提升。此时提升到根目录到是 axios@^0.24.1 版本，package-a 文件夹中则会保留 axios@^0.23 的版本。

这个依赖提升的规则其实是根 yarn workspaces 的依赖提升规则一致的，而且 yarn 提供的安装更友好，不会先安装到 packages 下，在 `learn bootstrap --hoist` 到根目录下，实现无感知的依赖提升。

所以一个较好的实践是使用 `yarn workspaces` 的方式来管理 lerna 下的依赖关系，在 `lerna.json` 中添加上下面字段且在 package.json 中添加 workspaces 字段即可使用 yarn 管理依赖

```json
{
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

上面有提到 lerna 的两条核心指令是 bootstrap 和 publish，bootstrap 我们可以使用 yarn workspace 来提升依赖，且比 lerna 做的更好。publish 可就只有是 lerna 擅长的地方了。

来看一下执行 `npm publish` 时做了哪些事

1. 找出上一个版本发布以来有变更的 package
2. 提示开发者确定版本号
3. 更新需要更新的 packages 的 version 字段
4. 创建新的 commit 提交到 git
5. 发布到 npm

也有一些 lerna 适用的生成 changelog 包，比如 [lerna-changelog](https://www.npmjs.com/package/lerna-changelog) 、[cz-lerna-changelog](https://www.npmjs.com/package/cz-lerna-changelog)等等。

## pnpm

尽管 lerna + yarn workspace 能够很好的解决 monoRepo 开发中的一系列问题，但是 learn 现在基本处于一个[无人维护](https://github.com/lerna/lerna/issues/2703)的状态。我们只能需找新的工具。

pnpm 相比于 npm 或者 yarn，它的用户量和知名都不是很高，但它也凭借着一些优势，比如快速、节省空间的依赖安装、严格的依赖管理，以及优秀的 monoRepo 支持，得到了一部分人的喜爱。

前段时间，vue 完成了从 `yarn workspaces` 到 `pnpm workspaces` 的[迁移](https://github.com/vuejs/vue-next/commits/master?after=44b95276f5c086e1d88fa3c686a5f39eb5bb7821+104&branch=master)，可能在不久之后，vue 生态的都会完成 pnpm 的迁移。

这篇主要从 workspace 的角度来看 pnpm 能为我们提供哪些便利。关于从 lerna 到 pnpm 的迁移可以参考这篇[Replacing Lerna + Yarn with PNPM Workspaces](https://www.raulmelo.dev/blog/replacing-lerna-and-yarn-with-pnpm-workspaces)

你需要新增一个 `pnpm-workspace.yaml` 文件，

```yaml
prefer-workspace-packages: true
packages:
  - "packages/*"
```

packages 字段跟 package.json 中的 workspaces 字段作用一致。

如果需要在特定的 package 下安装依赖，可以执行

```shell
pnpm add package-a axios --filter package-b
```

上面的命令即在 package-b 中安装 package-a 和 axios，上面的 --filter 类似 lerna 的 --scope，关于两者的比较可以查看[pnpm vs Lerna: filtering in a multi-package repository](https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a)

此时 package-a 中的 package.json 应该是下面的样子。

```json
{
  "name": "package-a",
  "version": "1.0.0",
  "dependencies": {
    "axios": "^0.24.0",
    "package-b": "workspace:^1.0.0"
  }
}
```

就支持了 yarn2 的 workspace 协议
