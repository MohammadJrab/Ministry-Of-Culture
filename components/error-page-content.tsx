import * as m from "motion/react-m";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {Link, useRouter} from "@/i18n/routing";
import {startTransition, useEffect, useState} from "react";
import {IconRotateClockwise} from "@tabler/icons-react";
import LogoLink from "@/components/logo-link";

export default function ErrorPageContent({href, error, reset})
{
    const t = useTranslations('errorPage');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    let errorMessage;
    if (error.message.includes('fetch failed'))
        errorMessage = t('connectionError');
    else if (error.message.includes(`Unexpected token '<', "<?xml vers"... is not valid JSON`))
        errorMessage = t('serverUpdating');
    else if (process.env.NODE_ENV == "development")
        errorMessage = error.message;

    useEffect(() =>
    {
        document.title = `${t('wrong')} | Syrian Ministry of Culture`
    }, []);

    function handleReset()
    {
        setLoading(true);

        startTransition(() =>
        {
            reset();
            router.refresh();
        });
    }

    return (
        <>
            <LogoLink href={href} size={'5xl'} className='animate-appear mb-10'/>

            <m.h1
                className="text-lg"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                {t('wrong')}
            </m.h1>
            {errorMessage && <m.p
                className="text-2xl mt-2 text-destructive font-medium"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2, duration: 0.5}}
            >
                {errorMessage}
            </m.p>}
            <m.div
                className="mt-6"
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.4, duration: 0.3}}
            >
                <Button variant={'secondary'} size={'lg'} disabled={loading} onClick={handleReset}>
                    {loading ? <IconRotateClockwise className="animate-spin"/> : <>{t("tryAgain")}
                        <IconRotateClockwise className={'rotate-180'}/></>}
                </Button>
            </m.div>
        </>
    );
}