package main

import (
	"context"
	"fmt"
	"grpcvue/api"
	"math/rand"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type server struct{}

var info []api.Info

func randomString(len int) string {
	bytes := make([]byte, len)
	for i := 0; i < len; i++ {
		bytes[i] = byte(randomInt(97, 122))
	}
	return string(bytes)
}
func randomInt(min, max int) int {
	return min + rand.Intn(max-min)
}
func main() {

	for index := 0; index < 50; index++ {
		new := api.Info{
			Title: randomString(10),
			Msg:   randomString(10),
		}
		fmt.Println(&new)
		info = append(info, new)
	}

	listen, err := net.Listen("tcp", ":4040")
	fmt.Println("server starting at ", &listen)
	if err != nil {
		panic(err)
	}
	srv := grpc.NewServer()
	api.RegisterAddServiceServer(srv, &server{})
	reflection.Register(srv)

	if e := srv.Serve(listen); e != nil {
		panic(err)
	}
}

func (s *server) Add(ctx context.Context, req *api.Request) (*api.Response, error) {
	fmt.Println("addition")
	// c := req.GetC()
	a, b := req.GetA(), req.GetB()
	result := a + b
	return &api.Response{Result: result}, nil
}

func (s *server) Multi(req *api.Request, c api.AddService_MultiServer) error {
	fmt.Println("multi")
	a, b := req.GetA(), req.GetB()
	result := a * b
	if err := c.Send(&api.Response{Result: result}); err != nil {
		return err
	}
	return nil
}
func (s *server) Test(req *api.Request, c api.AddService_TestServer) error {
	fmt.Println("Test")
	// a, b := req.GetA(), req.GetB()
	// result := a * b
	for _, aa := range info {
		if err := c.Send(&aa); err != nil {
			return err
		}
	}
	return nil
}
