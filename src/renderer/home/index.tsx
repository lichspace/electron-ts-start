import { Button, Divider } from "antd";
import styles from "./style.css";

export const Home = () => {
  return (
    <div>
      <h4 className={styles.justifyBett}>
        <span>hello 你好</span> <Button>创建任务</Button>
      </h4>
      <Divider />
    </div>
  );
};
