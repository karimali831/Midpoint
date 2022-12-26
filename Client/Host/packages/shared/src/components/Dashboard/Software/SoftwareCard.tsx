import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import images from "../../../assets/images/index.web";
import { MidPointStep } from "../../../enum/DashboardSection";
import { SetMidPointStep, SetSoftwareAction } from "../../../state/contexts/app/Actions";
import { getAppState } from "../../../state/contexts/app/Selectors";
import { SoftwareType } from "./SoftwareSelect";

interface IOwnProps {
    software: SoftwareType
    highlightSelectedOff?: boolean
    set?: boolean
}

export const SoftwareCard: React.FC<IOwnProps> = (props) => {

    React.useEffect(() => {}, [])
    const dispatch = useDispatch()

    const { selectedSoftware } = useSelector(getAppState)
    
    let imageSrc: string;
    switch (props.software) {
        case SoftwareType.VirtualDj:
            imageSrc = images.virtualDjLogo;
            break;
        case SoftwareType.ReckordBox:
            imageSrc = images.recordboxLogo;
            break;
        case SoftwareType.TraktorPro3:
            imageSrc = images.traktorPro3Logo;
            break;
        case SoftwareType.TraktorLe3:
            imageSrc = images.traktorLe3Logo;
            break;
        case SoftwareType.SeratoDjLite:
            imageSrc = images.seratoDjLiteLogo;
            break;
        case SoftwareType.SeratoDjPro:
            imageSrc = images.seratoDjProLogo;
            break;
        case SoftwareType.Mixx:
            imageSrc = images.mixxLogo;
            break;
        // brands
        case SoftwareType.PioneerDj:
            imageSrc = images.pioneerDjLogo;
            break;
        case SoftwareType.Hercules:
            imageSrc = images.herculesLogo;
            break;
        case SoftwareType.Denon:
            imageSrc = images.denonLogo;
            break;
        case SoftwareType.Numark:
            imageSrc = images.numarkLogo;
            break;
        case SoftwareType.Reloop:
            imageSrc = images.reloopLogo;
            break;
        case SoftwareType.NativeInstruments:
            imageSrc = images.nativeInsturmentsLogo;
            break;
        case SoftwareType.TheNextBeat:
            imageSrc = images.theNextBeatLogo;
            break;
        default:
            imageSrc = '';
    }

    const onSelectedSoftware = () => {
        if (props.set) {
            dispatch(SetSoftwareAction(props.software))
            dispatch(SetMidPointStep(MidPointStep.SoftwareInstall))
        }
    }

    return (
        <div
            onClick={onSelectedSoftware}
            style={{
                width: 240,
                height: 90,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${!props.highlightSelectedOff && selectedSoftware == props.software ? "#fff" : "rgba(255, 255, 255, 0.25)"}`,
                cursor: props.set ? 'pointer' : 'auto',
            }}
        >
            <img
                src={imageSrc}
                style={{
                    maxWidth: 160,
                    maxHeight: 40,
                }}
            />
        </div>
    );

}