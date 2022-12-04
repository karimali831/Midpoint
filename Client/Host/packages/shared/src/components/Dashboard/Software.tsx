import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { Button } from 'native-base';
import React, { useState } from 'react';
import images from '../../assets/images';

export enum SoftwareType {
    VirtualDj,
    ReckordBox,
    TraktorPro3,
    TraktorLe3,
    SeratoDjLite,
    SeratoDjPro,
    Mixx,
}

interface IOwnProps {
    goToStream: () => void;
}

export const Software: React.FC<IOwnProps> = (props) => {
    const [selectedSoftware, setSelectedSoftware] =
        useState<SoftwareType | null>(null);

    React.useEffect(() => {}, []);

    const softwareCard = (type: SoftwareType) => {
        let imageSrc: string;
        switch (type) {
            case SoftwareType.VirtualDj:
                imageSrc = images.virtualDjLogo;
                break;
            case SoftwareType.ReckordBox:
                imageSrc = images.recordboxLogo;
                break;
            case SoftwareType.TraktorPro3:
                imageSrc = images.traktorLogo;
                break;
            case SoftwareType.TraktorLe3:
                imageSrc = images.traktorLogo;
                break;
            case SoftwareType.SeratoDjLite:
                imageSrc = images.seratoLogo;
                break;
            case SoftwareType.SeratoDjPro:
                imageSrc = images.seratoLogo;
                break;
            case SoftwareType.Mixx:
                imageSrc = images.mixxLogo;
                break;
            default:
                imageSrc = '';
        }

        return (
            <div
                onClick={() => setSelectedSoftware(type)}
                style={{
                    width: 240,
                    height: 90,
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={imageSrc}
                    style={{
                        width: 120,
                        height: 25,
                    }}
                />
            </div>
        );
    };

    if (!!selectedSoftware) {
        return (
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 600 }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                style={{
                    margin: '0 auto',
                    width: 600,
                    marginTop: 140,
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <span
                        style={{
                            fontSize: 32,
                            margin: 15,
                        }}
                    >
                        Install the corresponding software
                    </span>
                    {softwareCard(selectedSoftware)}

                    <div
                        style={{
                            margin: '30px 0',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            onClick={() => setSelectedSoftware(null)}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                cursor: 'pointer',
                                marginRight: 30,
                            }}
                        >
                            <ArrowBackIcon />
                            <span style={{ marginLeft: 10 }}>Go back</span>
                        </div>
                        <Button
                            onPress={props.goToStream}
                            style={{
                                borderRadius: 25,
                                backgroundColor: '#195DC4',
                                height: 30,
                            }}
                            colorScheme="cyan"
                            startIcon={<ArrowForwardIcon />}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div
                style={{
                    marginTop: 50,
                    display: 'grid',
                    width: '100%',
                    gridGap: 20,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 0fr))',
                    justifyContent: 'center',
                }}
            >
                {softwareCard(SoftwareType.VirtualDj)}
                {softwareCard(SoftwareType.ReckordBox)}
                {softwareCard(SoftwareType.TraktorPro3)}
                {softwareCard(SoftwareType.TraktorLe3)}
                {softwareCard(SoftwareType.SeratoDjLite)}
                {softwareCard(SoftwareType.SeratoDjPro)}
                {softwareCard(SoftwareType.Mixx)}
            </div>
        </motion.div>
    );
};
