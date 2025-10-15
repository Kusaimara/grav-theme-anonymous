# Contributing to Anonymous Theme

Thank you for your interest in contributing to the Anonymous theme! This document provides guidelines for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details**:
  - Grav version
  - PHP version
  - Browser and version
  - Operating system

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

- **Clear description** of the enhancement
- **Use case** explaining why this would be useful
- **Possible implementation** if you have ideas
- **Examples** from other themes/projects if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes**:
   - Follow the existing code style
   - Add comments for complex logic
   - Test thoroughly
3. **Update documentation** if needed
4. **Write clear commit messages**:
   ```
   feat: Add dark mode toggle
   fix: Resolve mobile navigation issue
   docs: Update installation instructions
   style: Fix CSS formatting
   ```
5. **Submit the pull request**:
   - Reference any related issues
   - Describe your changes clearly
   - Include screenshots for UI changes

## Development Setup

### Prerequisites

- Grav CMS installed locally
- Basic knowledge of:
  - HTML/CSS
  - Twig templating
  - JavaScript (optional)
  - YAML configuration

### Local Development

1. Clone your fork:
   ```bash
   cd user/themes/
   git clone https://github.com/YOUR-USERNAME/grav-theme-anonymous.git anonymous
   ```

2. Install the theme:
   ```bash
   cd /path/to/grav
   bin/grav clear-cache
   ```

3. Activate in `user/config/system.yaml`:
   ```yaml
   pages:
     theme: anonymous
   ```

4. Make your changes and test

### Testing

Before submitting a pull request:

- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test responsive design (desktop, tablet, mobile)
- [ ] Check console for JavaScript errors
- [ ] Validate HTML/CSS
- [ ] Clear cache and test clean installation
- [ ] Verify forms work correctly
- [ ] Check all templates render properly

## Code Style Guidelines

### CSS

- Use CSS variables for colors
- Follow BEM naming convention when appropriate
- Add comments for complex selectors
- Keep specificity low
- Organize by component

```css
/* Good */
.section {
    background: var(--bg-panel);
}

/* Avoid */
div.container .section#main {
    background: #1a1a1a;
}
```

### Twig Templates

- Use proper indentation (4 spaces)
- Add comments for complex logic
- Use Twig filters appropriately
- Keep templates modular

```twig
{# Good #}
{% if config.themes.anonymous.matrix_effect %}
    <div class="matrix-bg"></div>
{% endif %}

{# Avoid deeply nested logic #}
```

### JavaScript

- Use modern ES6+ syntax
- Add JSDoc comments
- Handle errors gracefully
- Minimize DOM manipulation

```javascript
// Good
const submitForm = async (formData) => {
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error('Form submission failed:', error);
    }
};
```

### YAML Configuration

- Use consistent indentation (2 spaces)
- Add comments explaining options
- Group related settings
- Provide sensible defaults

```yaml
# Good
theme:
  # Enable matrix rain background effect
  matrix_effect: true
```

## File Structure

```
anonymous/
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── images/                 # Theme images
├── templates/              # Twig templates
│   ├── partials/          # Reusable components
│   └── forms/             # Form templates
├── blueprints.yaml        # Theme admin config
├── anonymous.yaml         # Default settings
└── README.md             # Documentation
```

## Documentation

When adding features:

1. Update README.md with usage instructions
2. Add examples where appropriate
3. Update CHANGELOG.md
4. Consider adding inline code comments

## Version Control

### Commit Messages

Follow conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Branching

- `main` - Stable releases
- `develop` - Development branch
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes

## Release Process

Releases are managed by maintainers:

1. Update version in `blueprints.yaml`
2. Update `CHANGELOG.md`
3. Create git tag: `v1.x.x`
4. Create GitHub release

## Questions?

If you have questions:

- Open a [GitHub Discussion](https://github.com/Kusaimara/grav-theme-anonymous/discussions)
- Check existing [Issues](https://github.com/Kusaimara/grav-theme-anonymous/issues)
- Contact: marakusai@protonmail.com

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🚀
