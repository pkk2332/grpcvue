/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./person_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.AddServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.AddServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.Request,
 *   !proto.api.Response>}
 */
const methodDescriptor_AddService_Add = new grpc.web.MethodDescriptor(
  '/api.AddService/Add',
  grpc.web.MethodType.UNARY,
  proto.api.Request,
  proto.api.Response,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.Request,
 *   !proto.api.Response>}
 */
const methodInfo_AddService_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.Response,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Response.deserializeBinary
);


/**
 * @param {!proto.api.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.AddServiceClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.AddService/Add',
      request,
      metadata || {},
      methodDescriptor_AddService_Add,
      callback);
};


/**
 * @param {!proto.api.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.Response>}
 *     A native promise that resolves to the response
 */
proto.api.AddServicePromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.AddService/Add',
      request,
      metadata || {},
      methodDescriptor_AddService_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.Request,
 *   !proto.api.Response>}
 */
const methodDescriptor_AddService_Multi = new grpc.web.MethodDescriptor(
  '/api.AddService/Multi',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.Request,
  proto.api.Response,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.Request,
 *   !proto.api.Response>}
 */
const methodInfo_AddService_Multi = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.Response,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Response.deserializeBinary
);


/**
 * @param {!proto.api.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Response>}
 *     The XHR Node Readable Stream
 */
proto.api.AddServiceClient.prototype.multi =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.AddService/Multi',
      request,
      metadata || {},
      methodDescriptor_AddService_Multi);
};


/**
 * @param {!proto.api.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Response>}
 *     The XHR Node Readable Stream
 */
proto.api.AddServicePromiseClient.prototype.multi =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.AddService/Multi',
      request,
      metadata || {},
      methodDescriptor_AddService_Multi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.Request,
 *   !proto.api.Info>}
 */
const methodDescriptor_AddService_test = new grpc.web.MethodDescriptor(
  '/api.AddService/test',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.Request,
  proto.api.Info,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Info.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.Request,
 *   !proto.api.Info>}
 */
const methodInfo_AddService_test = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.Info,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Info.deserializeBinary
);


/**
 * @param {!proto.api.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Info>}
 *     The XHR Node Readable Stream
 */
proto.api.AddServiceClient.prototype.test =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.AddService/test',
      request,
      metadata || {},
      methodDescriptor_AddService_test);
};


/**
 * @param {!proto.api.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Info>}
 *     The XHR Node Readable Stream
 */
proto.api.AddServicePromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.AddService/test',
      request,
      metadata || {},
      methodDescriptor_AddService_test);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.Request,
 *   !proto.api.InfoResponse>}
 */
const methodDescriptor_AddService_testdata = new grpc.web.MethodDescriptor(
  '/api.AddService/testdata',
  grpc.web.MethodType.UNARY,
  proto.api.Request,
  proto.api.InfoResponse,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.InfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.Request,
 *   !proto.api.InfoResponse>}
 */
const methodInfo_AddService_testdata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.InfoResponse,
  /**
   * @param {!proto.api.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.InfoResponse.deserializeBinary
);


/**
 * @param {!proto.api.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.InfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.InfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.AddServiceClient.prototype.testdata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.AddService/testdata',
      request,
      metadata || {},
      methodDescriptor_AddService_testdata,
      callback);
};


/**
 * @param {!proto.api.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.InfoResponse>}
 *     A native promise that resolves to the response
 */
proto.api.AddServicePromiseClient.prototype.testdata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.AddService/testdata',
      request,
      metadata || {},
      methodDescriptor_AddService_testdata);
};


module.exports = proto.api;

