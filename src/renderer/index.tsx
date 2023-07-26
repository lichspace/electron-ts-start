import { Alert } from "antd";
import { Home } from "./home";

export function App() {
  return (
    <>
      <Home/>
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
    </>
  );
}
