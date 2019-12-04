package main

import (
	"gprc/api"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:4040", grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	client := api.NewAddServiceClient(conn)

	g := gin.Default()

	g.GET("/add/:a/:b", func(ctx *gin.Context) {
		a, err := strconv.ParseUint(ctx.Param("a"), 10, 64)
		if err != nil {
			log.Fatal(err)
		}
		b, err := strconv.ParseUint(ctx.Param("b"), 10, 64)
		req := &api.Request{A: int64(a), B: int64(b)}
		response, err := client.Add(ctx, req)
		if err == nil {
			ctx.JSON(
				http.StatusOK,
				gin.H{
					"result": response.Result,
				},
			)
		}
	})
	g.GET("/multi/:a/:b", func(ctx *gin.Context) {
		a, err := strconv.ParseUint(ctx.Param("a"), 10, 64)
		if err != nil {
			log.Fatal(err)
		}
		b, err := strconv.ParseUint(ctx.Param("b"), 10, 64)
		req := &api.Request{A: int64(a), B: int64(b)}
		response, err := client.Multi(ctx, req)
		if err == nil {
			ctx.JSON(
				http.StatusOK,
				gin.H{
					"result": response.Result,
				},
			)
		}
	})
	g.Run()
}
