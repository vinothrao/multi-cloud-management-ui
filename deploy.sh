#!/bin/bash

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "Azure CLI is not installed. Please install it first."
    exit 1
fi

# Check if required environment variables are set
if [ -z "$STORAGE_ACCOUNT_NAME" ]; then
    echo "Please set STORAGE_ACCOUNT_NAME environment variable"
    exit 1
fi

# Build the application
echo "Building the application..."
npm run build

# Enable static website hosting
echo "Enabling static website hosting..."
az storage blob service-properties update \
    --account-name $STORAGE_ACCOUNT_NAME \
    --static-website \
    --index-document index.html \
    --404-document 404.html

# Upload files
echo "Uploading files to Azure Storage..."
az storage blob upload-batch \
    --account-name $STORAGE_ACCOUNT_NAME \
    --source out \
    --destination '$web'

# Get the website URL
WEBSITE_URL=$(az storage account show \
    --name $STORAGE_ACCOUNT_NAME \
    --query "primaryEndpoints.web" \
    --output tsv)

echo "Deployment complete!"
echo "Your website is available at: $WEBSITE_URL"
