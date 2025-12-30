#!/bin/bash

# AllStack Docker 部署脚本

set -e  # 遇到错误时退出

echo "🚀 开始部署 AllStack 应用..."

# 检查是否安装了 Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装，请先安装 Docker"
    exit 1
fi

# 检查是否安装了 docker-compose
if ! command -v docker-compose &> /dev/null; then
    echo "⚠️  docker-compose 未安装，尝试使用 docker compose (Docker Desktop 集成版本)"
    DOCKER_COMPOSE_CMD="docker compose"
else
    DOCKER_COMPOSE_CMD="docker-compose"
fi

# 检查 Docker 是否正在运行
if ! $DOCKER_COMPOSE_CMD version &> /dev/null; then
    echo "❌ Docker 未运行，请启动 Docker 后再执行此脚本"
    exit 1
fi

echo "✅ Docker 环境检查通过"

# 构建应用
echo "🏗️  开始构建应用..."
npm run build
echo "✅ 应用构建完成"

# 构建 Docker 镜像
echo "🐳 开始构建 Docker 镜像..."
npm run docker:build
echo "✅ Docker 镜像构建完成"

# 停止现有容器（如果存在）
echo "⏹️  停止现有容器..."
$DOCKER_COMPOSE_CMD down 2>/dev/null || true

# 启动新容器
echo "▶️  启动应用..."
$DOCKER_COMPOSE_CMD up -d

# 等待应用启动
echo "⏳ 等待应用启动..."
sleep 10

# 检查容器状态
if $DOCKER_COMPOSE_CMD ps | grep -q "Up"; then
    echo "✅ AllStack 应用已成功部署并运行在 http://localhost:3000"
    echo ""
    echo "📋 部署信息:"
    $DOCKER_COMPOSE_CMD ps
    echo ""
    echo "📖 查看日志: $DOCKER_COMPOSE_CMD logs -f"
    echo "🛑 停止服务: $DOCKER_COMPOSE_CMD down"
else
    echo "❌ 部署失败，请检查日志:"
    $DOCKER_COMPOSE_CMD logs
    exit 1
fi