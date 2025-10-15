# Anonymous - Cyberpunk Theme for Grav CMS

![](./screenshot.png)

![](./screenshot2.png)

![License](https://img.shields.io/badge/license-MIT-green)
![Grav](https://img.shields.io/badge/Grav-1.7+-blue)

A cyberpunk-style theme for Grav CMS with matrix rain effects, terminal aesthetics, and hacker-inspired design.

[日本語版README](README_ja.md)

## Features

- 🌐 **Cyberpunk Aesthetic**: Matrix rain effects, glitch animations, and terminal-style design
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Lightweight**: Minimal dependencies, fast loading
- 🎨 **Customizable**: Easy theme configuration via YAML
- 🔒 **Privacy-Focused**: No tracking, no external dependencies (except optional Twemoji)
- 💚 **Green Terminal Theme**: Classic hacker aesthetic with neon green accents

## Installation

### Method 1: ZIP Installation (Recommended)

1. Download the latest release as a ZIP file
2. In Grav admin panel, go to `Themes` → `Add`
3. Upload the ZIP file
4. Activate the theme

### Method 2: Manual Installation

1. Download or clone this repository
2. Extract the files to your Grav `user/themes/` folder
3. Rename the folder to `anonymous`
4. Activate the theme in Grav admin panel

## Configuration

Edit `user/config/themes/anonymous.yaml`:

```yaml
enabled: true

site:
  name: 'Your Site Name'
  tagline: 'Your Tagline'
  url: 'https://yoursite.com'
  
social:
  twitter: '@YourTwitterHandle'

theme:
  matrix_effect: true
  glitch_effect: true
```

## Customization

### CSS Variables

Edit `css/style.css` to customize colors:

```css
:root {
    --primary-green: #00ff41;
    --bg-black: #0a0a0a;
    /* ... more variables */
}
```

## Requirements

- Grav CMS 1.7+
- PHP 7.4+

## Credits

**Author**: Kusai Mara  
**GitHub**: [@Kusaimara](https://github.com/Kusaimara)
**X(Twitter)**: [@Kusai_Mara](https://x.com/Kusai_Mara)

## License

MIT License - see [LICENSE](LICENSE) file for details

Made with 💚 and terminal love
# grav-theme-anonymous
