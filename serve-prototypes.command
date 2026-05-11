#!/bin/bash
# Double-click (Mac) or run: bash serve-prototypes.command
cd "$(dirname "$0")"
PORT="${PORT:-8765}"
URL="http://127.0.0.1:${PORT}/index.html"
echo "Serving NAM prototypes at ${URL}"
echo "Press Ctrl+C to stop."
(sleep 0.4 && open "$URL") 2>/dev/null || true
exec python3 -m http.server "$PORT" --bind 127.0.0.1
