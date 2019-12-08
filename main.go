package main

import (
	"context"
	"fmt"
	"grpcvue/api"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type server struct{}

func main() {

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
