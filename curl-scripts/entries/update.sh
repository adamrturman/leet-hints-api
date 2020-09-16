#!/bin/bash

API="http://localhost:4741"
URL_PATH="/entries"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "entry": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESC}"'",
      "difficulty": "'"${DIFF}"'",
      "link": "'"${LINK}"'",
      "hint": "'"${HINT}"'",
      "complexity": "'"${COMP}"'"
    }
  }'

echo
