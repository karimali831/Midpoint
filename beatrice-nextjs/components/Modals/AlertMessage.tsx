import { Alert, AlertColor, AlertTitle, Modal } from '@mui/material';
import * as React from 'react';

interface IProps {
    title: string;
    type: AlertColor;
    desc?: string;
}

export default function AlertMessage(props: IProps) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Alert severity={props.type}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.desc}
            </Alert>
        </Modal>
    );
}
