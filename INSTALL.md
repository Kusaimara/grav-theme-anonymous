# Installation Guide

This guide provides detailed instructions for installing the Anonymous theme for Grav CMS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Methods](#installation-methods)
  - [Method 1: GPM (Recommended)](#method-1-gpm-recommended)
  - [Method 2: Manual Download](#method-2-manual-download)
  - [Method 3: Git Clone](#method-3-git-clone)
- [Post-Installation](#post-installation)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before installing the Anonymous theme, ensure you have:

- **Grav CMS** version 1.7.0 or higher
- **PHP** version 7.4 or higher
- **Web server** (Apache/Nginx/Lighttpd)
- **Admin Plugin** (optional, but recommended for easy configuration)

## Installation Methods

### Method 1: GPM (Recommended)

The easiest way to install the theme is through the Grav Package Manager.

#### Using Command Line:

```bash
cd /path/to/grav
bin/gpm install anonymous
```

#### Using Admin Panel:

1. Log in to your Grav Admin Panel
2. Navigate to **Themes** section
3. Click the **Add** button
4. Search for "Anonymous"
5. Click **Install**

### Method 2: Manual Download

If you prefer to install manually:

1. **Download** the latest release:
   - Go to [Releases](https://github.com/Kusaimara/grav-theme-anonymous/releases)
   - Download the latest `anonymous.zip` file

2. **Extract** the archive:
   ```bash
   unzip anonymous.zip
   ```

3. **Move** to themes directory:
   ```bash
   mv anonymous /path/to/grav/user/themes/
   ```

4. **Verify** the structure:
   ```
   user/themes/anonymous/
   ├── blueprints.yaml
   ├── anonymous.yaml
   ├── templates/
   ├── css/
   ├── js/
   └── images/
   ```

### Method 3: Git Clone

For developers who want to contribute or track updates:

```bash
cd /path/to/grav/user/themes
git clone https://github.com/Kusaimara/grav-theme-anonymous.git anonymous
```

**Note**: Replace `/path/to/grav` with your actual Grav installation path.

## Post-Installation

After installation, follow these steps:

### 1. Activate the Theme

#### Using Admin Panel:

1. Go to **Configuration** → **Themes**
2. Select **Anonymous** from the dropdown
3. Click **Save**

#### Using Configuration File:

Edit `user/config/system.yaml`:

```yaml
pages:
  theme: anonymous
```

### 2. Clear Cache

```bash
bin/grav clear-cache
```

Or through Admin Panel: **Tools** → **Clear Cache**

### 3. Configure the Theme

Edit `user/config/themes/anonymous.yaml` or use the Admin Panel:

```yaml
enabled: true

site:
  name: 'Your Site Name'
  tagline: 'Your Tagline'
  url: 'https://yoursite.com'
  
social:
  twitter: '@YourHandle'
  
theme:
  matrix_effect: true
  glitch_effect: true
```

### 4. Customize Images

Replace default images in `user/themes/anonymous/images/`:

- `logo.png` - Your site logo
- `og_image.png` - Social media share image (1200x630px)
- `favicon.png` - Your favicon (32x32px or 16x16px)

### 5. Test Your Site

Visit your site to ensure the theme is working correctly:

```
https://yoursite.com
```

## Troubleshooting

### Theme Not Appearing

**Issue**: Theme doesn't show up in themes list

**Solutions**:
- Verify folder name is exactly `anonymous`
- Check folder permissions (755 recommended)
- Clear cache: `bin/grav clear-cache`
- Reload Admin Panel page

### Files Not Found

**Issue**: 404 errors for CSS/JS files

**Solutions**:
- Verify all theme files are in place
- Check file permissions
- Clear cache
- Check `.htaccess` configuration

### Styling Issues

**Issue**: Theme doesn't look correct

**Solutions**:
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Clear Grav cache
- Check for JavaScript errors in browser console
- Ensure no conflicting plugins

### Configuration Not Working

**Issue**: Changes in configuration don't take effect

**Solutions**:
- Clear Grav cache after configuration changes
- Check YAML syntax (use 2-space indentation)
- Verify configuration file location
- Check Admin Panel for error messages

### Permission Errors

**Issue**: Cannot write files or upload images

**Solutions**:
```bash
# Set correct permissions (from Grav root)
find user/themes/anonymous -type f -exec chmod 644 {} \;
find user/themes/anonymous -type d -exec chmod 755 {} \;
```

## Verification Checklist

After installation, verify:

- [ ] Theme appears in Grav Admin themes list
- [ ] Theme can be selected and activated
- [ ] Homepage displays correctly
- [ ] All CSS styles are loading
- [ ] JavaScript functionality works
- [ ] Images are displaying
- [ ] Forms are functioning
- [ ] Responsive design works on mobile
- [ ] No console errors in browser

## Need Help?

If you encounter issues:

1. **Check Documentation**: [README.md](README.md)
2. **Search Issues**: [GitHub Issues](https://github.com/Kusaimara/grav-theme-anonymous/issues)
3. **Ask Community**: [Grav Forum](https://getgrav.org/forum)
4. **Contact Support**: marakusai@protonmail.com

## Next Steps

After successful installation:

- Read the [Configuration Guide](README.md#configuration)
- Explore [Template Customization](README.md#templates)
- Check out [Usage Examples](README.md#usage-examples)
- Consider contributing to the project

---

**Congratulations!** You've successfully installed the Anonymous theme. Enjoy your cyberpunk-styled website! 🚀
