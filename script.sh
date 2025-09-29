#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to print section headers
print_header() {
    echo ""
    print_message $CYAN "=================================="
    print_message $WHITE "$1"
    print_message $CYAN "=================================="
    echo ""
}

# Function to check command success
check_success() {
    if [ $? -eq 0 ]; then
        print_message $GREEN "✅ $1 completed successfully!"
    else
        print_message $RED "❌ $1 failed!"
        exit 1
    fi
}

# Start of script
print_header "🍄 Mushroom Journey Discord Bot - Build & Start"

# Build phase
print_header "📦 Building the project..."
print_message $YELLOW "Running: npm run build"
npm run build
check_success "Build"

# Start phase
print_header "🚀 Starting the Discord bot..."
print_message $YELLOW "Running: npm run start"
npm run start
check_success "Start"

print_message $GREEN "🎉 Discord bot is now running!"