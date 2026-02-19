import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// V developmente stlmiť otravné výstupy do konzoly
if (import.meta.env.DEV) {
  const noop = () => {};
  const origLog = console.log;
  const origInfo = console.info;
  const origWarn = console.warn;
  const filter = (msg: unknown) => {
    const s = String(msg);
    return s.includes("[vite]") || s.includes("React DevTools") || s.includes("React Router") && s.includes("Future Flag");
  };
  console.log = (...args: unknown[]) => (filter(args[0]) ? noop() : origLog.apply(console, args));
  console.info = (...args: unknown[]) => (filter(args[0]) ? noop() : origInfo.apply(console, args));
  console.warn = (...args: unknown[]) => (filter(args[0]) ? noop() : origWarn.apply(console, args));
}

createRoot(document.getElementById("root")!).render(<App />);
