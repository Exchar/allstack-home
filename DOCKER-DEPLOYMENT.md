# Docker 部署指南

## 快速开始

### 使用 Docker Compose（推荐）

```bash
# 构建并启动服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

### 使用 npm 脚本

```bash
# 构建 Docker 镜像
npm run docker:build

# 运行容器
npm run docker:run
```

## 手动 Docker 部署

### 构建镜像

```bash
docker build -t allstack-home .
```

### 运行容器

```bash
docker run -d \
  --name allstack-home-container \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  allstack-home
```

## 生产环境部署

### 使用环境变量

您可以使用环境变量来配置应用：

- `NODE_ENV`: 环境模式 (production, development)
- `PORT`: 应用端口 (默认: 3000)
- `HOSTNAME`: 主机地址 (默认: 0.0.0.0)

### 反向代理配置（如 Nginx）

如果您使用 Nginx 作为反向代理，请确保配置如下：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Docker Compose 多环境配置

对于生产环境，您可以创建一个 `docker-compose.prod.yml` 文件：

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: allstack-home
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - HOSTNAME=0.0.0.0
    restart: unless-stopped
    networks:
      - web

networks:
  web:
    external: true
```

然后使用：

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 镜像推送至仓库

```bash
# 构建镜像
npm run docker:build

# 推送镜像到 Docker Hub
npm run docker:push
```

注意：推送前请先登录 Docker Hub：

```bash
docker login
```

## 故障排除

### 查看容器日志

```bash
docker logs allstack-home-container
```

### 进入容器调试

```bash
docker exec -it allstack-home-container /bin/sh
```

### 重新构建镜像

```bash
docker build --no-cache -t allstack-home .
```