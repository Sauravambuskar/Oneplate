export default function sitemap() {
  const baseUrl = 'https://www.platehope.in';
  
  return [
    { url: baseUrl },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/our-work` },
    { url: `${baseUrl}/get-involved` },
    { url: `${baseUrl}/contact` },
  ];
}
