---
name: optimize-images
description: Download images from URLs, resize, and convert to WebP format for local caching
disable-model-invocation: false
allowed-tools: Bash(node *), Bash(npm *), Read, Edit, Write
---

# Optimize Images Skill

This skill downloads all project images from their remote URLs, resizes them, converts to WebP, and updates the codebase to use local paths.

## Steps

1. Read `lib/images.ts` to extract all current image entries (name, URL, category).

2. Ensure `sharp` is installed:

   ```
   npm install sharp
   ```

3. Run the processing script, passing the image config as JSON via stdin:

   ```
   node .claude/skills/optimize-images/scripts/process-images.mjs
   ```

   The script reads `lib/images.ts` itself to build the image list with these target widths:
   - Hero main: 1200px
   - Hero secondary / services / about / differentiators / features: 800px
   - Team: 600px
   - Testimonials: 200px

   It downloads each image, resizes to the target width (maintaining aspect ratio), converts to WebP (quality 80), and saves to `public/images/<name>.webp`.

4. After the script completes, update `lib/images.ts`:
   - Change every `src` value from a Pexels URL to the corresponding local path `/images/<name>.webp`
   - Keep all `alt` text unchanged

5. Update `next.config.ts`:
   - Remove the `remotePatterns` array for `images.pexels.com` since images are now local
   - The `images` config can be removed entirely or left as an empty object

6. Verify:
   - Confirm all `.webp` files exist in `public/images/`
   - Confirm `lib/images.ts` has no remaining Pexels URLs
   - Confirm `next.config.ts` no longer references Pexels
