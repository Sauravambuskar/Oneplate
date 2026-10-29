# PlateHope Foundation Website

A responsive, SEO-optimized website for PlateHope Foundation built with Next.js, Express and GSAP.

## 🌟 Features

- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Image optimization (AVIF, WebP), compression, and security headers
- **Accessibility**: WCAG compliant with skip links and semantic HTML
- **PWA Ready**: Manifest and theme configuration for app-like experience
- **Animations**: Smooth scroll animations with GSAP
- **Responsive**: Mobile-first design that works on all devices

## 📄 Pages

- **Home** (`/`) - Hero section with mission and programs overview
- **About** (`/about`) - Foundation story, values, and MCA registration
- **Our Work** (`/our-work`) - Detailed program information
- **Get Involved** (`/get-involved`) - Volunteer and donation opportunities
- **Contact** (`/contact`) - Contact form and organization details

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

### Production

```bash
npm run build
npm start
```

Server runs on port 3000 (or PORT environment variable)

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Server**: Express 5
- **Animations**: GSAP 3.15
- **Styling**: CSS3 with custom properties
- **Node**: >=20.x required

## 📊 SEO Implementation

✅ **Complete SEO Setup** (October 2026)
- Meta tags with keywords on all pages
- Open Graph and Twitter Card metadata
- JSON-LD structured data (Organization schema)
- XML sitemap auto-generated at `/sitemap.xml`
- robots.txt for crawler guidance
- Canonical URLs on all pages
- PWA manifest for mobile

See `SEO-CHECKLIST.md` for detailed implementation guide.

## 🌐 API Endpoints

- `GET /api/health` - Health check endpoint

## 📱 WhatsApp Integration

Contact form and floating button open WhatsApp with prefilled message to:
**+91 97738 85463**

## 📂 Project Structure

```
├── app/
│   ├── layout.js              # Root layout with SEO metadata
│   ├── page.js                # Home page
│   ├── sitemap.js             # Auto-generated sitemap
│   ├── organization-schema.js # Structured data
│   ├── about/
│   ├── our-work/
│   ├── get-involved/
│   └── contact/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── HomeHero.js
│   ├── ContactForm.js
│   └── ...
├── public/
│   ├── robots.txt             # Search engine directives
│   ├── manifest.json          # PWA configuration
│   └── images/
├── server.js                  # Express server
└── next.config.mjs            # Next.js configuration
```

## 🔐 Security

Security headers implemented:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📈 Next Steps for SEO

1. **Google Search Console**: Verify ownership and submit sitemap
2. **Google Analytics**: Add GA4 tracking
3. **Google Business**: Create/claim business profile
4. **Social Media**: Verify and link all profiles
5. **Content**: Regular blog posts for better engagement

See `SEO-IMPLEMENTATION-SUMMARY.md` for detailed next steps.

## 🧪 Testing

```bash
# Build verification
npm run build

# Check for errors
npm run check
```

## 📞 Organization Contact

**PlateHope Foundation**
- **Phone**: +91 97738 85463
- **Email**: foundationplatehope@gmail.com
- **Instagram**: @officialplatehope_005
- **Address**: House No. 20, Gali No. 2, Block-D, Mohan Nagar, Bhondsi, Gurugram, Haryana 122102
- **CIN**: U88900HR2026NPL152073

## 📄 License

© 2026 PlateHope Foundation. All rights reserved.

---

**Repository**: https://github.com/Sauravambuskar/Oneplate  
**Last Updated**: October 30, 2026  
**Status**: ✅ Production Ready with Full SEO
