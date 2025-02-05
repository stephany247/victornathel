const WhatsAppButton = ({ phone, message, text = "Get Access Now" }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      target="_blank"
      href={whatsappUrl}
      rel="noopener noreferrer"
      className="inline-flex justify-center items-center text-nowrap py-3 px-4 bg-blue hover:bg-blue/80 text-white rounded-lg font-bold text-center"
    >
      {text}
    </a>
  );
};

export default WhatsAppButton;
