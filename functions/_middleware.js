export async function onRequest(context) {
  const cookie = context.request.headers.get("Cookie") || "";
  const r = await fetch("https://auth.szdblc.cn/session", {
    headers: { Cookie: cookie }
  });
  if (r.ok) return context.next();
  return Response.redirect("https://szdblc.cn", 302);
}
