---
title: Contact Form
form:
    name: contact
    template: form-messages
    refresh_prevention: true

    fields:
        name:
            label: 'Your Name'
            placeholder: '> Enter your name...'
            type: text
            validate:
                required: true
            classes: 'hacker-input'

        email:
            label: 'Email Address'
            placeholder: '> your.email@domain.com'
            type: email
            validate:
                required: true
                message: 'Valid email required'
            classes: 'hacker-input'

        message:
            label: 'Message'
            placeholder: '> Type your message here...'
            type: textarea
            rows: 10
            validate:
                required: true
            classes: 'hacker-textarea-large'

        g-recaptcha-response:
            label: 'Security Check'
            type: captcha
            recaptcha_site_key: YOUR_SITE_KEY_HERE
            recaptcha_not_validated: 'Captcha verification failed!'

    buttons:
        submit:
            type: submit
            value: 'SEND MESSAGE'
            classes: 'hacker-submit-button'
        reset:
            type: reset
            value: 'RESET'
            classes: 'hacker-reset-button'

    process:
        captcha: true
        save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        message: 'Thank you for your message! We will respond within 24-48 hours.'
        reset: true
---

# Contact form

Some sample page content