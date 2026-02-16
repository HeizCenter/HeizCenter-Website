#!/bin/bash

# HEIZcenter Image Optimization Script
# Converts critical PNG/JPEG images to WebP format
# Run from project root: bash scripts/optimize-images.sh

set -e

echo "=========================================="
echo "HEIZcenter Image Optimization"
echo "=========================================="
echo ""

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo "Installing sharp-cli globally..."
    npm install -g sharp-cli
fi

# Define paths
IMG_DIR="public/images"
BACKUP_DIR="public/images/backup-originals"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "Step 1: Backing up original images..."
echo "--------------------------------------"

# Backup critical images
cp "$IMG_DIR/team.png" "$BACKUP_DIR/" 2>/dev/null || echo "team.png already backed up or not found"
cp "$IMG_DIR/notdienst.png" "$BACKUP_DIR/" 2>/dev/null || echo "notdienst.png already backed up or not found"
cp "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.png" "$BACKUP_DIR/" 2>/dev/null || echo "HeizCenter_Sanitär_Werkzeug.png already backed up or not found"
cp "$IMG_DIR/Waermepumpe.jpeg" "$BACKUP_DIR/" 2>/dev/null || echo "Waermepumpe.jpeg already backed up or not found"
cp "$IMG_DIR/klima.jpeg" "$BACKUP_DIR/" 2>/dev/null || echo "klima.jpeg already backed up or not found"
cp "$IMG_DIR/überuns.jpeg" "$BACKUP_DIR/" 2>/dev/null || echo "überuns.jpeg already backed up or not found"

echo "✓ Backups created in $BACKUP_DIR"
echo ""

echo "Step 2: Converting images to WebP..."
echo "--------------------------------------"

# Convert PNG files
if [ -f "$IMG_DIR/team.png" ]; then
    echo "Converting team.png (1.8 MB)..."
    sharp -i "$IMG_DIR/team.png" -o "$IMG_DIR/team.webp" --webp '{"quality": 85}'
    echo "✓ Created team.webp"
fi

if [ -f "$IMG_DIR/notdienst.png" ]; then
    echo "Converting notdienst.png (1.8 MB)..."
    sharp -i "$IMG_DIR/notdienst.png" -o "$IMG_DIR/notdienst.webp" --webp '{"quality": 85}'
    echo "✓ Created notdienst.webp"
fi

if [ -f "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.png" ]; then
    echo "Converting HeizCenter_Sanitär_Werkzeug.png (2.0 MB)..."
    sharp -i "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.png" -o "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.webp" --webp '{"quality": 85}'
    echo "✓ Created HeizCenter_Sanitär_Werkzeug.webp"
fi

# Convert JPEG files
if [ -f "$IMG_DIR/Waermepumpe.jpeg" ]; then
    echo "Converting Waermepumpe.jpeg (254 KB)..."
    sharp -i "$IMG_DIR/Waermepumpe.jpeg" -o "$IMG_DIR/Waermepumpe.webp" --webp '{"quality": 85}'
    echo "✓ Created Waermepumpe.webp"
fi

if [ -f "$IMG_DIR/klima.jpeg" ]; then
    echo "Converting klima.jpeg (118 KB)..."
    sharp -i "$IMG_DIR/klima.jpeg" -o "$IMG_DIR/klima.webp" --webp '{"quality": 85}'
    echo "✓ Created klima.webp"
fi

if [ -f "$IMG_DIR/überuns.jpeg" ]; then
    echo "Converting überuns.jpeg (11 KB)..."
    sharp -i "$IMG_DIR/überuns.jpeg" -o "$IMG_DIR/überuns.webp" --webp '{"quality": 85}'
    echo "✓ Created überuns.webp"
fi

echo ""
echo "Step 3: File size comparison"
echo "--------------------------------------"

# Function to get file size
get_size() {
    if [ -f "$1" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            stat -f%z "$1"
        else
            # Linux
            stat -c%s "$1"
        fi
    else
        echo "0"
    fi
}

# Function to format bytes
format_bytes() {
    local bytes=$1
    if [ $bytes -ge 1048576 ]; then
        echo "scale=1; $bytes / 1048576" | bc | awk '{printf "%.1f MB", $1}'
    elif [ $bytes -ge 1024 ]; then
        echo "scale=0; $bytes / 1024" | bc | awk '{printf "%d KB", $1}'
    else
        echo "${bytes} B"
    fi
}

# Compare sizes
compare_images() {
    local original="$1"
    local webp="$2"

    if [ -f "$original" ] && [ -f "$webp" ]; then
        local orig_size=$(get_size "$original")
        local webp_size=$(get_size "$webp")
        local savings=$((orig_size - webp_size))
        local percent=$((savings * 100 / orig_size))

        echo "$(basename "$original"): $(format_bytes $orig_size) → $(format_bytes $webp_size) (saved $percent%)"
    fi
}

compare_images "$IMG_DIR/team.png" "$IMG_DIR/team.webp"
compare_images "$IMG_DIR/notdienst.png" "$IMG_DIR/notdienst.webp"
compare_images "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.png" "$IMG_DIR/HeizCenter_Sanitär_Werkzeug.webp"
compare_images "$IMG_DIR/Waermepumpe.jpeg" "$IMG_DIR/Waermepumpe.webp"
compare_images "$IMG_DIR/klima.jpeg" "$IMG_DIR/klima.webp"
compare_images "$IMG_DIR/überuns.jpeg" "$IMG_DIR/überuns.webp"

echo ""
echo "Step 4: Next steps"
echo "--------------------------------------"
echo "1. Update image references in code:"
echo "   - src/app/kontakt/page.tsx: team.png → team.webp"
echo "   - src/app/ueber-uns/page.tsx: team.png → team.webp"
echo "   - src/app/notdienst/page.tsx: notdienst.png → notdienst.webp"
echo "   - src/app/page.tsx: Waermepumpe.jpeg → Waermepumpe.webp"
echo ""
echo "2. Test locally:"
echo "   npm run dev"
echo ""
echo "3. Verify images load correctly"
echo ""
echo "4. Delete old images after verification:"
echo "   rm public/images/team.png"
echo "   rm public/images/notdienst.png"
echo "   rm public/images/HeizCenter_Sanitär_Werkzeug.png"
echo "   rm public/images/Waermepumpe.jpeg"
echo ""
echo "Original files backed up in: $BACKUP_DIR"
echo ""
echo "=========================================="
echo "Optimization Complete!"
echo "=========================================="
