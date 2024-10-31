import sitemap from "./sitemap";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashboard'
        },
        sitemap: 'http://localhost:3000/sitemap'
    }

}
