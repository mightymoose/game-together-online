set -e

api_version=`grep 'version:' api/mix.exs | awk -F\" '{print $2}'`
web_client_version=`awk -F'"' '/"version": ".+"/{ print $4; exit; }' web-client/package.json`
commit_sha=`git rev-parse --short HEAD`

web_client_image="game_together_online/web_client:$web_client_version-$commit_sha"
api_image="game_together_online/api:$api_version-$commit_sha"

docker build -f web-client/deploy/Dockerfile -t $web_client_image web-client
docker build -f api/deploy/Dockerfile -t $api_image api

kubectl set image deployment/web-client-deployment web-client=$web_client_image

kubectl apply -f deploy/web-client/service.yaml

kubectl apply -f deploy/api-database/secret.yaml
kubectl apply -f deploy/api-database/deployment.yaml
kubectl apply -f deploy/api-database/service.yaml

kubectl set image deployment/api-deployment api=$api_image
kubectl apply -f deploy/api/secret.yaml
kubectl apply -f deploy/api/configmap.yaml
kubectl apply -f deploy/api/service.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f deploy/ingress.yaml

kubectl rollout restart deployment web-client-deployment
kubectl rollout restart deployment api-deployment