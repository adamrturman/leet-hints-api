#!/bin/bash

API="http://localhost:4741"
URL_PATH="/challenges"

curl "${API}${URL_PATH}/${ID}/comments/${COMMENTID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
