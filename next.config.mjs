import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'qmindtech-001-site8.jtempurl.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: new URL(process.env.NEXT_PUBLIC_API_URL).host,
                port: '',
            },
        ]
    },
    async redirects() {
        return [
            {
                source: "/:path*/app.js",
                has: [{ type: "host", value: "syrian-ministry-of-culture.com" }],
                destination: "/",
                permanent: true,
            },
        ];
    },
}

export default withNextIntl(nextConfig);