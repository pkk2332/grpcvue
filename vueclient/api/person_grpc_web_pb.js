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


module.exports = proto.api;

