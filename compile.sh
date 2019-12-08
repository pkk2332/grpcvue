#!/bin/sh
 
protoc  --go_out=plugins=grpc:. --js_out=import_style=commonjs,binary:vueclient  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:vueclient api/*.proto
go build *.go
