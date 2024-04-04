set -e

web_client_version=`awk -F'"' '/"version": ".+"/{ print $4; exit; }' web-client/package.json`
commit_sha=`git rev-parse --short HEAD`

web_client_image="game_together_online/web_client:$web_client_version-$commit_sha"

docker build -f web-client/deploy/Dockerfile -t $web_client_image web-client

kubectl set image deployment/web-client-deployment web-client=$web_client_image

kubectl rollout restart deployment web-client-deployment