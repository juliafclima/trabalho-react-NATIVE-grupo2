import { AuthProvider } from "./src/context/AuthProvider";
import { Rotas } from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

/* TAG: 4.32.1 */

// Pressione Ctrl + Shift + P para abrir a paleta de comandos.
// Digite 'Git: Push Tags' e pressione Enter.
