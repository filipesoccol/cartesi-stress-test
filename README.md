# Cartesi JavaScript Stress Test

This is a stress test template to force an error on Cartesi Machine.

This repo already have `.sunodo.env` and `testnet.env` files so you can deploy using them.

## Steps to deploy

1. Create a VPS (Only tested on Ubuntu 23). tested with 1Gb Mem + 2Gb Swap and also 4Gb mem.
2. Clone this repo there.
3. Install Docker
4. Install NPM + @sunodo/cli@0.10.4
5. Deploy the app to Sepolia using `https://github.com/lynoferraz/sunodo-deploy-wo` instructions.
6. Once app is running and Inspect is already returning 200-Success clone the repo on your personal machine and run:

```
node burst-request.js 10 http://<Verifier IP>:8080/inspect/products
```

This should be enough for the app got tainted and the output should be something like:

```
200 - OK
200 - OK
400 - Bad Request
400 - Bad Request
400 - Bad Request
400 - Bad Request
400 - Bad Request
```

While the validator output become:

```
WARN HTTP request: tracing_actix_web::middleware: Error encountered while processing the incoming HTTP request: "Failed to inspect state: session is tainted" http.method=GET http.route=/inspect/{payload:.*}
```
