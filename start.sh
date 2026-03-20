#!/bin/bash
export HOSTNAME="0.0.0.0"
export PORT="${PORT:-8080}"
node .next/standalone/server.js
