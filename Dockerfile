# 第一阶段：依赖安装阶段
FROM node:20-alpine AS deps
# 检查 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 以了解为什么可能需要 libc6-compat。
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制依赖定义文件
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# 根据存在的锁文件，选择对应的包管理器安装依赖
# 使用 --frozen-lockfile 确保依赖完全锁定
RUN \
  npm install -g pnpm@8.15.4 && pnpm i --frozen-lockfile;

# 第二阶段：构建阶段
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 设置构建环境变量
ENV NEXT_TELEMETRY_DISABLED=1
# 构建应用
RUN \
  npm install -g pnpm@8.15.4 && pnpm run build;

# 第三阶段：运行阶段
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 创建一个非root用户运行应用（增强安全性）
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 从构建阶段复制必要文件
# 1. 从builder阶段复制Next.js的构建产物
COPY --from=builder /app/public ./public
# 2. 设置缓存文件夹权限，然后复制.next缓存
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 切换到非root用户
USER nextjs

# 暴露端口 (Next.js默认3000)
EXPOSE 8888

# 设置容器主机名
ENV HOSTNAME="0.0.0.0"
# 启动应用
CMD ["node", "server.js"]