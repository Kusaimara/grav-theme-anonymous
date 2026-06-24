# Changelog

All notable changes to this project will be documented in this file.

## [1.0.5] - 2026-06-23

### Fixed
- Added the SEO / Social (Open Graph image) tab to the `blog` page template as well
  (it was previously only on `item` and `default`, so blog-type pages did not show it)

### Note
- Theme blueprint changes require a cache clear (`bin/grav clear-cache`) to appear in Admin
- New pages must be saved once before the media upload area becomes available (Grav default)

## [1.0.4] - 2026-06-23

### Added
- Per-page Open Graph image: og:image / twitter:image now resolve in priority order
  page-selected image > page featured image (first media) > site-wide theme default
- "SEO / Social" tab on page and post editors with an Open Graph image picker
  (`filepicker` from the page's own media) for choosing a dedicated share image

## [1.0.3] - 2026-06-23

### Added
- Blog listing template (`blog.html.twig`) with a responsive post-card grid and pagination
- Single post template (`item.html.twig`) with featured image, tags/date/author meta,
  previous/next navigation and back-to-blog link
- Blog list works out of the box from published child pages; a defined `content.items`
  collection in the page header is used automatically when present (enables pagination)

## [1.0.2] - 2026-06-23

### Fixed
- Fixed logo / Social Share Image / favicon upload in Theme settings showing a
  "Value theme://images/..." error and failing to upload
- Removed hard-coded file paths that were pre-seeding the `file` fields with
  unresolved values (root cause of the upload error)
- Made og:image, twitter:image and favicon resolution array-aware (file fields
  store the uploaded value as an array keyed by path) and skip the tags when unset
- Added the missing `images/` folder so the `theme://images` upload destination exists

## [1.0.1] - 2025-11-08

### Improved
- Enhanced text readability for blog posts and content pages
- Increased font size from 14px to 16px for better readability
- Improved text color from #888 to #bbbbbb for better contrast
- Enhanced line height from 1.6 to 1.9 for comfortable reading
- Added green color to list markers for better visual hierarchy
- Improved heading spacing and margins
- Enhanced link visibility with bold font weight
- Better code block and inline code styling
- Improved table hover effects
- Enhanced blockquote styling
- Better mobile responsiveness for text content

### Fixed
- Fixed H2 heading positioning with proper top margins
- Fixed list item indentation and positioning
- Corrected nested list spacing

## [1.0.0] - 2025-10-14

### Added
- Initial release of Anonymous theme
- Cyberpunk-style design with matrix rain effects
- Glitch text animations
- Terminal-inspired aesthetics
- Responsive design for all devices
- Custom form styling
- Theme configuration via YAML
- Support for Open Graph and Twitter Card meta tags
- Customizable color scheme via CSS variables

### Features
- Matrix rain background effect (toggleable)
- Glitch effect on headers (toggleable)
- Mobile-responsive navigation
- Optimized for performance
- No external tracking