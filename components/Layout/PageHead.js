import { basePath } from '@/services/utils';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

export default function PageHead({ title, description, og_image }) {
    const router = useRouter()

    const sub_desciption = description != null ? description.replace(/(<([^>]+)>)/gi, "").substring(0, 200) + '...' : '';
    const full_title = 'christmas-challenge - ' + title;
    return (
        <NextSeo
            title={full_title}
            description={sub_desciption}
            canonical={`${basePath}${router.asPath}`}
            openGraph={{
                url: `${basePath}${router.asPath}`,
                title: full_title,
                description: sub_desciption,
                images: [
                    { url: og_image },
                ],
                siteName: 'christmas-challenge',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
            robotsProps={{
                notranslate: true,
            }}
        />
    )
}
