export default async function handler(req, res) {
  // 允许跨域（关键）
  res.setHeader("Access-Control-Allow-Origin", "*");

  const ua = req.headers['user-agent'] || 'Unknown';
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const referer = req.headers['referer'] || 'Unknown';
  const url = req.query.url || 'Unknown';
  const time = new Date().toISOString();

  console.log("VISIT_LOG", {
    time,
    ip,
    ua,
    referer,
    url
  });

  res.status(200).json({
    ok: true,
    time,
    ip,
    ua,
    referer,
    url
  });
}
