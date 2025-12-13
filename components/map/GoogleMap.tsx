'use client';

interface GoogleMapProps {
  location?: string;
  className?: string;
}

export default function GoogleMap({ location, className = '' }: GoogleMapProps) {
  // Hardcoded embed URL for working example
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.1387372432!2d-79.3692959!3d43.7359565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd37d0b648b1%3A0xe84c4903372f7f2f!2sThe%20Bridle%20Path%2C%20North%20York%2C%20ON%2C%20Canada!5e1!3m2!1sen!2snp!4v1765637602567!5m2!1sen!2snp";

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
      className={className}
    ></iframe>
  );
}

