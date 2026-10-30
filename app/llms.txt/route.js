const siteUrl = "https://www.platehope.in";

export function GET() {
  const content = `# PlateHope Foundation

> PlateHope Foundation is a Section 8 non-profit based in Gurugram, Haryana, India. We support education, food service and community-led opportunities for children and communities.

## Key pages

- [Home](${siteUrl}/): Overview of the foundation and its focus areas.
- [About us](${siteUrl}/about): Mission, values, registered-office details and CIN U88900HR2026NPL152073.
- [Our work](${siteUrl}/our-work): Education, food service and community-development focus areas.
- [Get involved](${siteUrl}/get-involved): Ways to support, volunteer or partner. The website does not collect online payments.
- [Contact](${siteUrl}/contact): Contact details for volunteering, partnership and support enquiries.

## Contact

- Email: foundationplatehope@gmail.com
- Phone: +91 97738 85463
- Location: Bhondsi, Gurugram, Haryana, India

## Discovery

- [Sitemap](${siteUrl}/sitemap.xml)
- [Robots.txt](${siteUrl}/robots.txt)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
