import { ReactElement } from 'react';

interface IOwnProps {
    text: string;
    icon: ReactElement;
    onClick: () => void;
}

export const SecondaryButton = (props: IOwnProps) => {
    const { text, icon, onClick } = props;

    return (
        <div onClick={onClick} className={`align-6 button-2`}>
            {icon && <span className="mr5 mt5 fs12">{icon}</span>}
            <span className="fs14">{text}</span>
        </div>
    );
};
