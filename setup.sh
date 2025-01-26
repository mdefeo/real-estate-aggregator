#!/bin/bash

# Define the backend directory
BACKEND_DIR="backend"

# Define the .env files and their content
declare -A ENV_FILES=(
  [".env.development"]="DB_USER=dev_user\nDB_PASSWORD=dev_password\nDB_HOST=localhost\nDB_NAME=dev_db"
  [".env.production"]="DB_USER=prod_user\nDB_PASSWORD=prod_password\nDB_HOST=localhost\nDB_NAME=prod_db"
  [".env.test"]="DB_USER=test_user\nDB_PASSWORD=test_password\nDB_HOST=localhost\nDB_NAME=test_db"
)

# Create the backend directory if it doesn't exist
if [ ! -d "$BACKEND_DIR" ]; then
  mkdir -p "$BACKEND_DIR"
  echo "Created directory: $BACKEND_DIR"
fi

# Create the .env files
for FILE in "${!ENV_FILES[@]}"; do
  FILE_PATH="$BACKEND_DIR/$FILE"
  echo -e "${ENV_FILES[$FILE]}" > "$FILE_PATH"
  if [ -f "$FILE_PATH" ]; then
    echo "Created $FILE_PATH"
  else
    echo "Failed to create $FILE_PATH"
  fi
done

echo "All .env files have been created."