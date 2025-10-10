import React, { useState } from 'react'
import s from '@styles/Contact.module.css'
import { useI18n } from '@i18n/I18nContext'

type Form = { name: string; email: string; phone: string; message: string }
const init: Form = { name:'', email:'', phone:'', message:'' }

export const Contact: React.FC = () => {
  const { t } = useI18n()
  const [form, setForm] = useState<Form>(init)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:info@verdviu.cat?subject=Contacte web - ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.name + ' · ' + form.email + ' · ' + form.phone)}`
    window.location.href = mailto
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className={`container ${s.wrap}`}>
        <div>
          <h2 id="contact-title">{t('contact.title')}</h2>
          <p style={{color:'var(--muted)'}}>{t('contact.subtitle')}</p>

          <form className={s.form} onSubmit={onSubmit}>
            <div className={s.control}>
              <label className={s.label} htmlFor="name">{t('contact.name')}</label>
              <input className={s.input} id="name" name="name" value={form.name} onChange={onChange} required />
            </div>
            <div className={s.control}>
              <label className={s.label} htmlFor="email">{t('contact.email')}</label>
              <input className={s.input} type="email" id="email" name="email" value={form.email} onChange={onChange} required />
            </div>
            <div className={s.control}>
              <label className={s.label} htmlFor="phone">{t('contact.phone')}</label>
              <input className={s.input} id="phone" name="phone" value={form.phone} onChange={onChange} />
            </div>
            <div className={s.control}>
              <label className={s.label} htmlFor="message">{t('contact.message')}</label>
              <textarea className={s.textarea} id="message" name="message" value={form.message} onChange={onChange} required />
            </div>
            <button className="btn" type="submit">{t('contact.send')}</button>
          </form>
        </div>

        <aside className={s.aside} aria-label="info">
          <h3>VerdViu</h3>
          <p>CIF: 00000000X</p>
          <p>Barcelona · Maresme</p>
          <p>+34 600 000 000</p>
          <p>info@verdviu.cat</p>
          <hr style={{borderColor:'#1f2524'}}/>
          <p>Horari: 8:00–18:00</p>
        </aside>
      </div>
    </section>
  )
}
