const PROXY_DESTINATION_HOSTNAME = "app.posthog.com";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    url.hostname = PROXY_DESTINATION_HOSTNAME;
    url.protocol = "https";
    const response = await fetch(url.toString(), request);
    return response;
  },
};
