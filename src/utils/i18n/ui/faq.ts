import { routes } from "../../../routes";

export const faq = {
  es: {
    "faq.title": "Preguntas frecuentes",
    "faq.description":
      "Respondiendo a Preguntas Frecuentes sobre nuestros servicios de animación y diseño",
    "faq.header.title": "Respondiendo",
    "faq.header.subtitle": "A preguntas frecuentes",
    "faq.question1": "¿Cuánto cuesta un vídeo?",
    "faq.question2": "¿Qué tipo de vídeos puedes crear?",
    "faq.question3": "¿Dónde te encuentras ubicada?",
    "faq.question4":
      "¿Ofreces descuentos para organizaciones sin ánimo de lucro?",
    "faq.answer1": `Depende de la complejidad, la cantidad de videos a realizar, la duración y el plazo de entrega. Estos son algunos de los factores que influyen en el precio. Cuéntame cuál es tu <a href="${routes.contact(
      { locale: "es" }
    )}">proyecto/presupuesto</a> y te ayudaré a encontrar una solución que se ajuste a tus objetivos.`,
    "faq.answer2":
      "Puedo ayudarte con una amplia variedad de videos, por ejemplo: <ul> <li>Animaciones de logotipos: Dale vida y personalidad a tu marca.</li> <li>Contenido para redes sociales: Destaca en las plataformas con videos llamativos.</li> <li>Videos explicativos y de presentación: Comunica tus ideas con dinamismo y profesionalismo.</li> <li>Animaciones personalizadas para sitios web: Capta la atención de los visitantes con animaciones únicas.</li> <li>Animación en 2D: Dale personalidad a tus personajes y crea historias que enganchen a tu público.</li> <li>Videos para tu estrategia de marketing: Transforma tus ventas y atrae a tu audiencia.</li> </ul>",
    "faq.answer3": `Para dar inicio a nuestra colaboración podemos encontrarnos en persona en la Ciudad de México o si lo prefieres, podemos comunicarnos a través de una llamada telefónica, videollamada o <a href="${routes.contact(
      { locale: "es" }
    )}">correo electrónico</a>. La elección es tuya, lo que sea más conveniente para ti. ¡Espero tener la oportunidad de trabajar contigo pronto!`,
    "faq.answer4": `¡Por supuesto! No dudes en <a href="${routes.contact({
      locale: "es",
    })}">contactarme</a> y trabajaremos juntos para hacer del mundo un lugar mejor.`,
  },
  en: {
    "faq.title": "Frequently asked questions",
    "faq.description":
      "Answering Frequently Asked Questions about our animation and design services",
    "faq.header.title": "Answering",
    "faq.header.subtitle": "Frequently Asked Questions",
    "faq.question1": "How much does a video cost?",
    "faq.question2": "What types of videos can you create?",
    "faq.question3": "Where are you located?",
    "faq.question4": "Do you offer discounts for non-profit organizations?",
    "faq.answer1": `It depends on the complexity, the number of videos to be produced, the duration and the delivery timeline. These are some of the factors that influence the price. Let me know your <a href="${routes.contact(
      { locale: "en" }
    )}">project/budget</a> and I will help you find a solution that fits your goals.`,
    "faq.answer2":
      "I can assist you with a wide variety of videos, including: <ul> <li>Logo animations: Bring life and personality to your brand.</li> <li>Social media content: Stand out on platforms with eye-catching videos.</li> <li>Explainer and presentation videos: Communicate your ideas dynamically and professionally.</li> <li>Custom animations for websites: Capture visitors' attention with unique animations.</li> <li>2D animation: Give personality to your characters and create engaging stories for your audience.</li> <li>Videos for your marketing strategy: Transform your sales and attract your audience.</li> </ul>",
    "faq.answer3": `To begin our collaboration, we can meet in person in Mexico City or if you prefer, we can communicate through a phone call, video call or <a href="${routes.contact(
      { locale: "en" }
    )}">email.</a> The choice is yours, whatever is most convenient for you. I look forward to the opportunity to work with you soon!`,
    "faq.answer4": `Absolutely! Feel free <a href="${routes.contact({
      locale: "en",
    })}">to contact me</a> and we will work together to make the world a better place.`,
  },
};
