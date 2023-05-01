import React from 'react';
import { ClipLoader } from 'react-spinners';
import './styles.css'

export interface IOwnProps {
    size?: number
    style?: React.CSSProperties;
}

export const Loader: React.FC<IOwnProps> = (props) => {
    return (
        <div className='loading_messages' style={props.style}>
            <ClipLoader size={props.size ?? 15} color="#00A884" />
        </div>
    );
};

