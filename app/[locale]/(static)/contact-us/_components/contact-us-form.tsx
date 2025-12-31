'use client'

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl';

export default function ContactUsForm() {
    const t = useTranslations('contactUs');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = encodeURIComponent(
            `${t('subjectLabel')}: ${subject}\n` +
            `${t('nameLabel')}: ${name}\n` +
            `${t('emailLabel')}: ${email}\n` +
            `${t('phoneLabel')}: ${phone}\n\n` +
            `${t('messageLabel')}:\n${message}`
        );

        window.location.href = `mailto:moc.syria@gmail.com?subject=${subject}&body=${body}`
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="block text-[#3E3E3F] text-sm font-medium mb-2">{t('nameLabel')}</label>
                <Input
                    id="name"
                    placeholder={t('writeHere')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-[#3E3E3F] text-sm font-medium mb-2">{t('emailLabel')}</label>
                <Input
                    id="email"
                    placeholder={t('writeHere')}
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-[#3E3E3F] text-sm font-medium mb-2">{t('phoneLabel')}</label>
                <Input
                    id="phone"
                    placeholder={t('writeHere')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-[#3E3E3F] text-sm font-medium mb-2">{t('subjectLabel')}</label>
                <Input
                    id="subject"
                    placeholder={t('writeHere')}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-[#3E3E3F] text-sm font-medium mb-2">{t('messageLabel')}</label>
                <Textarea
                    id="message"
                    placeholder={t('writeHere')}
                    className="min-h-[120px]"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <Button type="submit" className="font-semibold rounded-md bg-[#428177] py-6 mt-4">
                {t('sendButton')}
            </Button>
        </form>
    )
}