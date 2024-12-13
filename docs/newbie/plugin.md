---
outline: [2, 3]
---

# 配置 HelloSkin 插件

若想要在 Minecraft 中显示你在 HelloSkin 设置的材质，你需要在 Minecraft 服务端中安装 HelloSkin 插件以及前置 SkinsRestorer
插件支持 BungeeCord/Waterfall/Spigot/Paper/Purpur/Velocity (当前插件版本不支持Java17以上及MC1.21)

[[toc]]

---

> [!INFO] 本文不会说明「如何安装服务端插件」
> 如果你确实不会，请将本文分享给你的朋友或其他愿意帮助你的人士，让他们指导你操作。

> [!IMPORTANT] 不建议同时使用多种皮肤同步方式
> 否则，轻则无法正常加载材质，重则导致游戏或服务器崩溃。  

> [!TIP] 其他加载材质的方式
> 你也可以选择 [Yggdrasil 外置登录](/yggdrasil/index.md) 加载材质。但是，除 SkinPort 外，请不要同时使用 Yggdrasil 外置登录和皮肤 Mod，否则可能无法正常加载材质。


[🗝️ 在寻找 CustomSkinLoader 嘛？](./csl)
<p><mark>CustomSkinLoader 是我们最推荐的皮肤 Mod</mark>，也被称为 <strong>CSL</strong> 或 <strong>万用皮肤补丁</strong>。</p>
它现如今被单独放在一篇文章中说明，前去查看具体信息 👉

## 获取 HelloSkin 插件

在用户中心的“快速配置”板块，点击“获取 HelloSkin 插件”和“获取 SkinsRestorer 插件”按钮，分别下载两个插件并安装至服务端
至此，插件安装工作完成，您无需配置任何配置文件，开箱即用。

### 插件原理
#### 传统加载 API
```http
# 皮肤查询 API
https://helloskin.cn/skin/{playername}.png
# 披风查询 API
https://helloskin.cn/cape/{playername}.png
```

你可以尝试自己使用这样的 API 来编写一个插件加载你的材质。

其中 `{playername}` 为角色名，请将其替换为对应的占位符。

你也可以分享出你的皮肤 Mod 或相关服务器插件的配置方法，非常欢迎你帮助我们完善这个页面。

## 其他服务器插件
### Citizens 2 <Badge type="info" text="服务器插件" />

> Citizens 是用于在 Minecraft 服务器中创建栩栩如生的 NPC 的一个插件。

Citizens 2 为提供了一个 [`/npc skin`](https://wiki.citizensnpcs.co/Skins) 指令来为你的 NPC 设置皮肤。

示例：将某 NPC 的皮肤设置为 HelloSkin 角色 `aabbccdd` 的皮肤：

```plain
/npc skin --url https://helloskin.cn/skin/aabbccdd.png
```

### SkinsRestorer <Badge type="info" text="服务器插件" />

> SkinsRestorer 是一个插件，可以恢复离线模式服务器和网络的皮肤，让玩家能够通过指令来更改他们的皮肤。

SkinsRestorer 提供了一个 [`/skin url`](https://skinsrestorer.net/docs/configuration/commands-permissions#player-commands:~:text=command.set.other-,/skin%20url%20%3Curl%3E,-Changes%20your%20skin) 指令来为游戏中的玩家设置皮肤。

示例：将自己的皮肤设置为 HelloSkin 角色 `aabbccdd` 的皮肤：

```plain
/skin url https://helloskin.cn/skin/aabbccdd.png
```
> [!IMPORTANT] 重要提示
> 如您安装了 HelloSkin 插件，请务必使用本站提供的 SkinsRestorer 版本，不正确的 SkinsRestorer 版本可能会导致 HelloSkin 插件无法运行。

> [!TIP] 关于配置
> 如您正确安装了 HelloSkin 插件 则不需要您手动配置 SkinsRestorer 或输入其他任何指令，我们的插件会自动帮您配置好相关的内容