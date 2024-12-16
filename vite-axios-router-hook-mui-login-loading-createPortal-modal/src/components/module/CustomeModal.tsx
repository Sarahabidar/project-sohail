import { Dialog, DialogTitle } from "@mui/material";
import { ReactNode } from "react";
import styles from "./CustomeModal.module.css";

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  open: boolean;
}

const CustomeModal = ({ children, onSubmit, onCancel, open }: Props) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <div className={styles.modalContent}>
          <div>{children}</div>

          <div className={styles.modalButtons}>
            <button onClick={onSubmit}>Submit</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomeModal;
