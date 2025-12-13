# Quiz Bias Fixing Tools

These scripts help identify and fix length bias in multiple choice questions where longer options tend to be correct answers.

## 🔍 Step 1: Detect Bias

```bash
# Run bias detection
node scripts/detect-bias.js

# Or specify a different questions file
node scripts/detect-bias.js path/to/questions.json
```

This will:
- Analyze all questions for length bias
- Show top 10 most biased questions
- Generate a detailed report in `reports/bias-report.json`
- Categorize bias as EXTREME (50+ chars), SEVERE (25-49), or MODERATE (10-24)

## 🔧 Step 2: Preview Fixes

```bash
# Preview fixes (dry run - doesn't modify files)
node scripts/fix-bias.js

# Preview with different strategy
node scripts/fix-bias.js --balanced     # Default: balance correct and incorrect lengths
node scripts/fix-bias.js --shorten     # Only shorten correct answers
node scripts/fix-bias.js --expand      # Only expand incorrect answers

# Set maximum allowed length difference
node scripts/fix-bias.js --max=10      # Allow max 10 character difference
```

## ⚡ Step 3: Apply Fixes

```bash
# Apply fixes (creates backup automatically)
node scripts/fix-bias.js --apply

# Apply with custom settings
node scripts/fix-bias.js --apply --balanced --max=12
```

## 🛡️ Safety Features

- **Automatic backups**: Original file saved as `questions_backup.json`
- **Dry run by default**: Must use `--apply` to make changes
- **Smart truncation**: Preserves meaning when shortening text
- **Validation**: Maintains question accuracy

## 📊 Strategies Explained

### `--balanced` (Recommended)
- Slightly shortens very long correct answers
- Expands very short incorrect answers
- Aims for ~15 character max difference

### `--shorten`
- Only modifies correct answers
- Truncates at sentence/phrase boundaries
- Preserves core meaning

### `--expand`
- Only modifies incorrect answers
- Adds contextual information
- Maintains incorrectness

## 🎯 Quick Fix Workflow

1. **Analyze current bias:**
   ```bash
   node scripts/detect-bias.js
   ```

2. **Preview balanced fixes:**
   ```bash
   node scripts/fix-bias.js --balanced --max=15
   ```

3. **Apply if satisfied:**
   ```bash
   node scripts/fix-bias.js --apply --balanced --max=15
   ```

4. **Verify results:**
   ```bash
   node scripts/detect-bias.js
   ```

## 📈 Expected Results

After running the fix script:
- Length bias should drop from ~57% to ~30% (closer to random 25%)
- Average length difference should be ≤15 characters
- Questions maintain educational value and accuracy

## ⚠️ Manual Review Recommended

Some questions may need manual review, especially:
- Technical definitions that require specific wording
- Questions with complex explanations
- Cases where shortening changes meaning

The scripts are designed to be conservative and maintain educational integrity.