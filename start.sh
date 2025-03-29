#!/bin/bash

# Define Keycloak details
KEYCLOAK_URL="http://localhost:8080"
REALM="nest-auth"
CLIENT_ID="nest-client"
ADMIN_USERNAME="admin"  # Replace with your Keycloak admin username
ADMIN_PASSWORD="admin"  # Replace with your Keycloak admin password
MAX_RETRIES=30  # Number of retries before failing
RETRY_INTERVAL=5  # Time to wait between retries in seconds

# Function to check if Keycloak is up
check_keycloak() {
  echo "Checking if Keycloak is up..."
  curl -s -o /dev/null -w "%{http_code}" "$KEYCLOAK_URL"
}

# Wait for Keycloak to be up and running
RETRY_COUNT=0
while [ $(check_keycloak) -ne 200 ] && [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  echo "Keycloak not available yet. Retrying... ($RETRY_COUNT/$MAX_RETRIES)"
  RETRY_COUNT=$((RETRY_COUNT+1))
  sleep $RETRY_INTERVAL
done

# If Keycloak isn't up after the retries, exit the script
if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
  echo "Error: Keycloak is still not available after $MAX_RETRIES retries. Exiting..."
  exit 1
fi

# Fetch access token from Keycloak
echo "Fetching access token from Keycloak..."
ACCESS_TOKEN=$(curl -X POST \
  "$KEYCLOAK_URL/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=admin-cli" \
  -d "username=$ADMIN_USERNAME" \
  -d "password=$ADMIN_PASSWORD" \
  -d "grant_type=password" | jq -r '.access_token')

# Check if the access token was successfully retrieved
if [ -z "$ACCESS_TOKEN" ]; then
  echo "Error: Unable to fetch access token."
  exit 1
fi

# Fetch the client secret from Keycloak
echo "Fetching client secret for client '$CLIENT_ID'..."
CLIENT_SECRET=$(curl -X GET \
  "$KEYCLOAK_URL/admin/realms/$REALM/clients/$(curl -s -X GET \
    "$KEYCLOAK_URL/admin/realms/$REALM/clients?clientId=$CLIENT_ID" \
    -H "Authorization: Bearer $ACCESS_TOKEN" | jq -r '.[0].id')/client-secret" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq -r '.value')

# Check if the client secret was successfully retrieved
if [ -z "$CLIENT_SECRET" ]; then
  echo "Error: Unable to fetch client secret."
  exit 1
fi

# Write client secret to .env file
echo "Writing client secret to .env file..."

# Check if KEYCLOAK_CLIENT_SECRET already exists in the .env file
if grep -q "KEYCLOAK_CLIENT_SECRET=" .env; then
  # If found, overwrite it
  sed -i '' "s/^KEYCLOAK_CLIENT_SECRET=.*/KEYCLOAK_CLIENT_SECRET=$CLIENT_SECRET/" .env
else
  # If not found, append it
  echo "KEYCLOAK_CLIENT_SECRET=$CLIENT_SECRET" >> .env
fi

# Start your backend service
echo "Starting backend service..."
docker-compose up --build -d
docker ps
