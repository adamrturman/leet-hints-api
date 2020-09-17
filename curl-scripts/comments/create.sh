#!/bin/bash

API="http://localhost:4741"
URL_PATH="/challenges"

curl "${API}${URL_PATH}/${ID}/comments" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comment": {
      "text": "'"${TEXT}"'",
      "title": "'"${TITLE}"'"
    }
  }'

echo
