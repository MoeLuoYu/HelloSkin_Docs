---
outline: [2, 3]
---

# HelloSkin API <Badge type="tip" text="原创" />

<!--@include: ./for-experts.template.md-->

::: warning 注意
当前 Blessing Skin API 和我们的部分 API 正处于试验阶段，API 不稳定并随时可能发生破坏性变更，敬请留意。
:::

HelloSkin 使用 Blessing Skin 最新开发版本，支持通过 Blessing Skin API 使用 HelloSkin 的各种功能，包括但不限于获取角色信息、更改角色材质等。

除此之外，HelloSkin 有一些原版 Blessing Skin API 不具备的定制 API。

通常来说，此页面列出的大多数 无需鉴权 即可使用，需要鉴权的 API 会被特别标出。

---

[[toc]]

## Blessing Skin API 文档

按理来说，HelloSkin 的 Blessing Skin API 与原版 Blessing Skin API 完全一致，你可以直接参考 Blessing Skin API 的文档：[Blessing Skin 用户手册 - Web API](https://blessing.netlify.app/api/)。

除此之外，这里还有一些 Blessing Skin API 的文档中没有提到的，请求部分 API 时可能需要请求用户授予的权限：

| 权限节点                           | 解释                          |
| ---------------------------------- | ----------------------------- |
| `User.Read`                        | 读取用户基本信息              |
| `Player.Read` / `Player.ReadWrite` | 读取 / 读写用户的角色和对应材质 |
| `Closet.Read` / `Closet.ReadWrite` | 读取 / 读写用户的衣柜收藏       |
| `Notification.Read`                | 读取用户的站内通知            |


### IP属地 IpLocation <Badge type="info" text="🔓 无需鉴权" />

```http
GET https://helloskin.cn/api/iploc/ HTTP/1.1
Accept: application/json | application/javascript | application/array | application/text
```

返回查询IP或本机IP的属地信息（为保护隐私，仅展示省份）


请求参数
| 参数名称  |     参数说明    | 请求类型 | 必须 |   类型  |
| -------- | --------------- | ------- | -----| -------|
| `ip`     | 指定查询IP地址   | Params  | false | String |
| `code`   | 指定接口输出格式 | Params  | false | String |

支持的输出代码格式有：<Badge type="info" text="Json[默认留空]" /><Badge type="info" text="JavaScript" /><Badge type="info" text="Array" /><Badge type="info" text="Text" />
::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "code": 200,
    "ip": "0.0.0.0",
    "ip_loc": "示例省份"
}
```

| 值          | 简要解释                              |
| ----------- | -------------------------------------|
| `code`      | 响应代码 200为正常                    |
| `ip`        | 您当前网络的公网地址，也可为您查询的地址 |
| `ip_loc`    | IP属地信息                            |

:::
---
### 灯笼标语 Denglong <Badge type="info" text="🔓 无需鉴权" /> 

```http
GET https://helloskin.cn/api/denglong/ HTTP/1.1
Accept: application/javascript
```

在网页上展示四个带字的灯笼


请求参数
| 参数名称  |     参数说明    | 请求类型 | 必须 |   类型  |
| -------- | --------------- | ------- | -----| -------|
| `text`     | 设置灯笼上的字（4个）   | Params  | false | String |

text参数留空则显示默认文字“新年快乐”
::: details 响应说明

以下只是对 OpenAPI 文档的额外补充说明。

```http
HTTP/1.1 200 OK
Content-Type: application/javascript

code = 200;
// 创建并添加元素
function createDengContainer() {
    const container = document.createElement('div');
    container.className = 'deng-container';
    ...
```

| 值          | 简要解释                              |
| ----------- | -------------------------------------|
| `code`      | 响应代码 200为正常                    |
| `...`        | 如响应代码为200，那么code值下方应该会有相应的js代码 |
