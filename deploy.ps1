# AllStack Docker 部署脚本 (PowerShell)

Write-Host "🚀 开始部署 AllStack 应用..." -ForegroundColor Green

# 检查是否安装了 Docker
if (!(Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Docker 未安装，请先安装 Docker" -ForegroundColor Red
    exit 1
}

# 检查 Docker 是否正在运行
try {
    docker version | Out-Null
} catch {
    Write-Host "❌ Docker 未运行，请启动 Docker 后再执行此脚本" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Docker 环境检查通过" -ForegroundColor Green

# 构建应用
Write-Host "🏗️  开始构建应用..." -ForegroundColor Yellow
npm run build
Write-Host "✅ 应用构建完成" -ForegroundColor Green

# 构建 Docker 镜像
Write-Host "🐳 开始构建 Docker 镜像..." -ForegroundColor Yellow
npm run docker:build
Write-Host "✅ Docker 镜像构建完成" -ForegroundColor Green

# 停止现有容器（如果存在）
Write-Host "⏹️  停止现有容器..." -ForegroundColor Yellow
docker-compose down 2>$null

# 启动新容器
Write-Host "▶️  启动应用..." -ForegroundColor Yellow
docker-compose up -d

# 等待应用启动
Write-Host "⏳ 等待应用启动..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# 检查容器状态
$containerStatus = docker-compose ps
if ($containerStatus -match "Up") {
    Write-Host "✅ AllStack 应用已成功部署并运行在 http://localhost:3000" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 部署信息:" -ForegroundColor Cyan
    docker-compose ps
    Write-Host ""
    Write-Host "📖 查看日志: docker-compose logs -f" -ForegroundColor Cyan
    Write-Host "🛑 停止服务: docker-compose down" -ForegroundColor Cyan
} else {
    Write-Host "❌ 部署失败，请检查日志:" -ForegroundColor Red
    docker-compose logs
    exit 1
}