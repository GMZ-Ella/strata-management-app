export default async function handler(req, res) {
    if (req.method === 'POST') {
      // 解析表单数据（urlencoded）
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = Buffer.concat(buffers).toString();
      const params = new URLSearchParams(data);
      const name = params.get("name");
      const message = params.get("message");
  
      console.log("✅ 表单收到：", { name, message });
  
      // 这里你可以把数据保存到数据库、发邮件等
  
      // 302 重定向到感谢页面
      res.writeHead(302, { Location: "/thanks" });
      res.end();
    } else {
      // 如果不是 POST 请求，返回 405 错误
      res.status(405).send("Method Not Allowed");
    }
  }
  