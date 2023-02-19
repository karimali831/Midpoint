import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DashboardSection } from '../../enum/DashboardSection';
import { IStripePricePlan } from '../../models/IStripePricePlan';
import { SetDashboardSection } from '../../state/contexts/app/Actions';
import { SelectedPricePlanAction } from '../../state/contexts/checkout/Actions';
import { getCheckoutState } from '../../state/contexts/checkout/Selectors';

interface IOwnProps {
    pricePlan?: IStripePricePlan
}

export const TokenCard: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => { }, [])

    const dispatch = useDispatch()
    
    const { pricePlan } = props
    const { 
        selectedPricePlan
    } = useSelector(getCheckoutState)

    const buy = () => {
        if (!pricePlan)
            return

        dispatch(SelectedPricePlanAction(pricePlan))
        dispatch(SetDashboardSection(DashboardSection.Payment))
    }

    return (
        <div style={{
            width: 270,
            marginRight: 30,
            marginBottom: 20,
            borderRadius: '10px 10px 0px 0px'
        }}>

            {!pricePlan ?
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    background: 'rgba(25, 93, 196, 0.15)',
                    padding: 10,
                    height: 145,
                    borderRadius: 10
                }}>
                    <span style={{ fontSize: 20 }}>
                        Custom package?
                    </span>
                    <div style={{
                        background: '#195DC4',
                        borderRadius: 19.5,
                        padding: '10px 15px',
                        fontSize: 12,
                        fontWeight: 500
                    }}>
                        <span>Join the Discord</span>
                    </div>
                </div>
             :
                <>
                    <div style={{
                        display: 'flex',
                        background: '#195DC4',
                        height: 35,
                        padding: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span style={{ fontSize: 22 }}>{pricePlan.tokens}</span>
                            {pricePlan.percentageSaving != 0 && 
                                <div style={{ 
                                    borderRadius: 22, 
                                    padding: 10,
                                    border: '1px solid #fff' ,
                                    fontSize: 12,
                                    width: 65,
                                    height: 10,
                                    textAlign: 'center'
                                }}>
                                    <span>Save {pricePlan.percentageSaving}%</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div style={{
                        background: 'rgba(25, 93, 196, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '10px 15px',
                        height: 80,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <span style={{ fontSize: 14 }}>{pricePlan.desc}</span>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: 18 }}>{pricePlan.unitAmountStr}</span>
                            <div 
                                onClick={buy}
                                style={{
                                    background: '#fff',
                                    borderRadius: 19.5,
                                    padding: '8px 12px',
                                    fontSize: 12,
                                    color: '#000',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                }}
                            >
                                <span>Get tokens</span>
                            </div>
                        </div>
                    </div>
            </>
        }
        </div>
    )
}