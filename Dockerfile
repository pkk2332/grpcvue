FROM envoyproxy/envoy:latest
RUN apt-get update
COPY envoy.yaml /etc/envoy/envoy.yaml
# CMD /usr/local/bin/envoy -c /etc/envoy.yaml
    