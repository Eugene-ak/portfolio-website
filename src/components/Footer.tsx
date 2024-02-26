import { faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full h-max px-40 flex flex-row items-center justify-between">
      <img src="/logo1.jpg" alt="logo" className="w-16 rounded-full" />
      <div>&copy; 2024</div>
      <div>
        <ul className="flex flex-row items-center justify-evenly gap-4">
          <li>
            <a href="https://linkedin.com/in/eugene-amedior-aa19b420a" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Eugene_aks">
              <FontAwesomeIcon icon={faX} />
            </a>
          </li>
          <li>
          <a href="/">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
          <a href="/">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
          <a href="mailto:amedioreugene@gmail.com">
              <FontAwesomeIcon icon={faSquareEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
