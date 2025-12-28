import { useEffect, useState } from "react";
import '../styles/Pwa.css'

function PwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setVisible(false);
    });
  };

  if (!visible) return null;

  return (
    <button className="pwa-btn" onClick={handleInstall}>
      Install Mixzed Cakes App
    </button>
  );
}

export default PwaInstall;
