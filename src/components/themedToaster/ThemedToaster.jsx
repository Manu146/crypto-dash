import { Toaster } from "react-hot-toast";
import { withTheme } from "styled-components";

function ThemedToaster({ theme, ...rest }) {
  let color =
    theme === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)";
  let bgcolor =
    theme === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)";
  return (
    <Toaster
      {...rest}
      toastOptions={{
        style: {
          color: color,
          background: bgcolor,
        },
      }}
    />
  );
}

export default withTheme(ThemedToaster);
