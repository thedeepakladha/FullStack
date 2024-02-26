import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setup(app) {
  app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
}
