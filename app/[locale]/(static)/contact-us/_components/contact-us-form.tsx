'use client'

import React, {useState} from "react"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {useTranslations} from 'next-intl';

export default function ContactUsForm()
{
    const t = useTranslations('contactUs');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();

        const subject = encodeURIComponent(t('emailSubject'));
        const body = encodeURIComponent(
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
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('nameLabel')}</label>
                <Input
                    id="name"
                    placeholder={t('namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('emailLabel')}</label>
                <Input
                    id="email"
                    placeholder={t('emailPlaceholder')}
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">{t('phoneLabel')}</label>
                <Input
                    id="phone"
                    placeholder={t('phonePlaceholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('messageLabel')}</label>
                <Textarea
                    id="message"
                    placeholder={t('messagePlaceholder')}
                    className="min-h-[120px]"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <Button type="submit" className="font-semibold">
                {t('sendButton')}
            </Button>
        </form>
    )
}