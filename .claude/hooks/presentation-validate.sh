#!/bin/bash

# Presentation Validation Hook
# Runs after Write operations to validate presentation files

# Read the tool input from stdin
INPUT=$(cat)

# Extract file path from JSON input
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Exit early if no file path or not a presentation file
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Only validate presentation data files
if [[ "$FILE_PATH" != *"src/data/presentations"* ]]; then
  exit 0
fi

# Skip non-TypeScript files (like markdown speaker notes)
if [[ "$FILE_PATH" != *.ts ]]; then
  exit 0
fi

echo "Validating presentation file: $FILE_PATH"

# Check 1: File exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Warning: File does not exist yet (will be created)" >&2
  exit 0
fi

# Check 2: TypeScript syntax (if tsc is available)
if command -v npx &> /dev/null; then
  TSC_OUTPUT=$(npx tsc --noEmit "$FILE_PATH" 2>&1)
  TSC_EXIT=$?

  if [ $TSC_EXIT -ne 0 ]; then
    echo "TypeScript validation errors:" >&2
    echo "$TSC_OUTPUT" >&2
    # Don't block, just warn
  fi
fi

# Check 3: Bilingual content completeness
# Look for empty localized text patterns
EMPTY_NL=$(grep -c "nl: ''" "$FILE_PATH" 2>/dev/null || echo "0")
EMPTY_EN=$(grep -c "en: ''" "$FILE_PATH" 2>/dev/null || echo "0")

if [ "$EMPTY_NL" -gt 0 ] || [ "$EMPTY_EN" -gt 0 ]; then
  echo "Warning: Found empty localized text fields" >&2
  echo "  - Empty 'nl' fields: $EMPTY_NL" >&2
  echo "  - Empty 'en' fields: $EMPTY_EN" >&2
fi

# Check 4: Required exports
if ! grep -q "export const.*Presentation" "$FILE_PATH"; then
  echo "Warning: No exported presentation constant found" >&2
fi

# Check 5: Has chapters
if ! grep -q "chapters:" "$FILE_PATH"; then
  echo "Warning: No chapters array found in presentation" >&2
fi

# Check 6: Code slides have language specified
CODE_SLIDES=$(grep -c "type: 'code'" "$FILE_PATH" 2>/dev/null || echo "0")
LANG_SPECIFIED=$(grep -c "language:" "$FILE_PATH" 2>/dev/null || echo "0")

if [ "$CODE_SLIDES" -gt 0 ] && [ "$LANG_SPECIFIED" -lt "$CODE_SLIDES" ]; then
  echo "Warning: Some code slides may be missing 'language' field" >&2
fi

# Output success JSON for hook system
echo '{"status": "validated"}'
exit 0
