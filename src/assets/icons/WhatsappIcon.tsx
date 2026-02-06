import { useI18n } from "@i18n/I18nContext";


type Props = {
  size?: number,
  color?: string
}

const WhatsappIcon = ({ size = 70, color = "#25D366" }: Props) => {

  const phone = "34697601656"
  const {t} = useI18n()

  return (
    <a

      href={`https://wa.me/${phone}?text=${t("whatsappMessage")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat en WhatsApp"

    >
      <svg
        className="whatsapp-icon"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M16 2.9c-7.2 0-13 5.8-13 13 0 2.3.6 4.5 1.7 6.4L3 29l6.9-1.8c1.8 1 3.9 1.6 6.1 1.6 7.2 0 13-5.8 13-13s-5.8-13-13-13z"
        />
        <path
          fill="#fff"
          d="M12.4 9.8c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.5 4 6.2 5.4 3.1 1.2 3.7 1 4.4.9.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.8-2-1.1-2.7z"
        />
      </svg>
    </a>

  )
}
export default WhatsappIcon