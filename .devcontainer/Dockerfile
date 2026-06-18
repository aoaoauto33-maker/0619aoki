FROM node:lts-slim
# Node.jsが入ってる別のOS、基本slimが入ってる

RUN apt-get update && \
    apt-get install -y git
    # これを書いてrebuildすればok
    # コマンドを打ってインストールすることも可

WORKDIR /workspace
# コンテナ内の作業ディレクトリを/workspaceに設定します
# なぜ作業ディレクトリを作る必要があるのか？基準を決めたいから