/**
 * We need this to proxy requests from the frontend to the backend while in dev-mode.
 *
 * However, if we ever use SSR, or standup a NextJS server, this hard-coded localhost path
 * might be detrimental. It assumes that the NextJS webserver and the Creatorfy Backend are
 * on the same machine, or at least has an attacked network interface to another docker container.
 */
async function rewrites() {
  return [
    {
      source: '/query/:path*',
      destination: 'http://127.0.0.1:8080/query/:path*/',
    },
  ];
}

module.exports = {
  trailingSlash: true, // "/query/graphql" => "/query/graphql/"
  reactStrictMode: true,
  rewrites,
};
