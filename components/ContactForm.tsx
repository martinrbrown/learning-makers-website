'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [submittedName, setSubmittedName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(data: FormData) {
    const errs: Record<string, string> = {}
    if (!data.get('name')?.toString().trim()) {
      errs.name = 'Name is required.'
    }
    const email = data.get('email')?.toString().trim()
    if (!email) {
      errs.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!data.get('message')?.toString().trim()) {
      errs.message = 'Message is required.'
    }
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const firstErrorId = Object.keys(errs)[0]
      document.getElementById(firstErrorId)?.focus()
      return
    }

    setErrors({})
    setFormState('submitting')
    setSubmittedName(data.get('name')?.toString() ?? '')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          organisation: data.get('organisation'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className={styles.successMessage} role="alert">
        <p>Thanks, {submittedName}. We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      {formState === 'error' && (
        <div className={styles.errorBanner} role="alert">
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:info@learningmakers.com">info@learningmakers.com</a>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.fieldError} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={styles.fieldError} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="organisation" className={styles.label}>
          Organisation{' '}
          <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.fieldError} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className={styles.submitButton}
      >
        {formState === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
