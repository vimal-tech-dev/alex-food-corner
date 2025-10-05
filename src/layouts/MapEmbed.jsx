// src/components/MapEmbed.jsx
export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28236.310188781557!2d72.88693271091611!3d20.61141409007305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c29fa551a4cf%3A0xde6400db0d73874d!2sAlex%20Food%20Corner!5e1!3m2!1sen!2sin!4v1759587766821!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
