import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';

export default function CashAnalysis(){
    const [GOICurrent, setGOICurrent] = useState(0)
    const [GOIMonthly, setGOIMonthly] = useState(0)
    const [GSRICurrent, setGSRICurrent] = useState(0)
    const [LVLLCurrent, setLVLLCurrent] = useState(0)
    const [GSRIMonthly, setGSRIMonthly] = useState(0)
    const [LVLLMonthly, setLVLLMonthly] = useState(0)

    const calcGOICurrent = (value, field) =>{
        switch(field){
            case 'GSRICurrent':
                setGSRICurrent(value)
                setGOICurrent(parseInt(value)+parseInt(LVLLCurrent))
                break
            case 'LVLLCurrent':
                setLVLLCurrent(value)
                setGOICurrent(parseInt(value)+parseInt(GSRICurrent))
                break
            default:
                setGOICurrent(0)
        }
    }

    const calcGOIMonthly = (value, field) =>{
        switch(field){
            case 'GSRIMonthly':
                setGSRIMonthly(value)
                setGOIMonthly(parseInt(value)+parseInt(LVLLMonthly))
                break
            case 'LVLLMonthly':
                setLVLLMonthly(value)
                setGOIMonthly(parseInt(value)+parseInt(GSRIMonthly))
                break
            default:
                setGOIMonthly(0)
        }
    }
    


    //operative expenses
    const [TOECurrent, setTOECurrent] = useState(0)
    const [TOEMonthly, setTOEMonthly] = useState(0)
    const [COCurrent, setCOCurrent] = useState(0)
    const [COMonthly, setCOMonthly] = useState(0)
    const [ICurrent, setICurrent] = useState(0)
    const [IMonthly, setIMonthly] = useState(0)
    const [MCurrent, setMCurrent] = useState(0)
    const [MMonthly, setMMonthly] = useState(0)
    const [MFCurrent, setMFCurrent] = useState(0)
    const [MFMonthly, setMFMonthly] = useState(0)
    const [PTCurrent, setPTCurrent] = useState(0)
    const [PTMonthly, setPTMonthly] = useState(0)
    const [RECCurrent, setRECCurrent] = useState(0)
    const [RECMonthly, setRECMonthly] = useState(0)
    const [RRCurrent, setRRCurrent] = useState(0)
    const [RRMonthly, setRRMonthly] = useState(0)


    const calcTOECurrent = (value, field) =>{
        switch(field){
            case 'COCurrent':
                setCOCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(ICurrent)+parseInt(MCurrent)+parseInt(MFCurrent)+parseInt(PTCurrent)+parseInt(RECCurrent)+parseInt(RRCurrent))                
                break
            case 'ICurrent':
                setICurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(MCurrent)+parseInt(MFCurrent)+parseInt(PTCurrent)+parseInt(RECCurrent)+parseInt(RRCurrent))
                break
            case 'MCurrent':
                setMCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(ICurrent)+parseInt(MFCurrent)+parseInt(PTCurrent)+parseInt(RECCurrent)+parseInt(RRCurrent))
                break
            case 'MFCurrent':
                setMFCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(ICurrent)+parseInt(MCurrent)+parseInt(PTCurrent)+parseInt(RECCurrent)+parseInt(RRCurrent))
                break
            case 'PTCurrent':
                setPTCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(ICurrent)+parseInt(MCurrent)+parseInt(MFCurrent)+parseInt(RECCurrent)+parseInt(RRCurrent))
                break
            case 'RECCurrent':
                setRECCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(ICurrent)+parseInt(MCurrent)+parseInt(MFCurrent)+parseInt(PTCurrent)+parseInt(RRCurrent))
                break
            case 'RRCurrent':
                setRRCurrent(value)
                setTOECurrent(parseInt(value)+parseInt(COCurrent)+parseInt(ICurrent)+parseInt(MCurrent)+parseInt(MFCurrent)+parseInt(PTCurrent)+parseInt(RECCurrent))
                break
            default:
                setTOECurrent(0)
        }        
    }

    const calcTOEMonthly = (value, field) =>{
        switch(field){
            case 'COMonthly':
                setCOMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(IMonthly)+parseInt(MMonthly)+parseInt(MFMonthly)+parseInt(PTMonthly)+parseInt(RECMonthly)+parseInt(RRMonthly))
                break
            case 'IMonthly':
                setIMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(MMonthly)+parseInt(MFMonthly)+parseInt(PTMonthly)+parseInt(RECMonthly)+parseInt(RRMonthly))
                break
            case 'MMonthly':
                setMMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(IMonthly)+parseInt(MFMonthly)+parseInt(PTMonthly)+parseInt(RECMonthly)+parseInt(RRMonthly))
                break
            case 'MFMonthly':
                setMFMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(IMonthly)+parseInt(MMonthly)+parseInt(PTMonthly)+parseInt(RECMonthly)+parseInt(RRMonthly))
                break
            case 'PTMonthly':
                setPTMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(IMonthly)+parseInt(MMonthly)+parseInt(MFMonthly)+parseInt(RECMonthly)+parseInt(RRMonthly))
                break
            case 'RECMonthly':
                setRECMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(IMonthly)+parseInt(MMonthly)+parseInt(MFMonthly)+parseInt(PTMonthly)+parseInt(RRMonthly))
                break
            case 'RRMonthly':
                setRRMonthly(value)
                setTOEMonthly(parseInt(value)+parseInt(COMonthly)+parseInt(IMonthly)+parseInt(MMonthly)+parseInt(MFMonthly)+parseInt(PTMonthly)+parseInt(RECMonthly))
                break
            default:
                setTOEMonthly(0)
        }
    }

    //net operating income
    const [NOICurrent, setNOICurrent] = useState(0)
    const [NOIMonthly, setNOIMonthly] = useState(0)

    useEffect(()=>{
        setNOICurrent(parseInt(GOICurrent)-parseInt(TOECurrent))
    }, [GOICurrent, TOECurrent])

    useEffect(()=>{
        setNOIMonthly(parseInt(GOIMonthly)-parseInt(TOEMonthly))
    }, [GOIMonthly, TOEMonthly])

    const [PPCurrent, setPPCurrent] = useState(0)
    const [PPMonthly, setPPMonthly] = useState(0)
    const [CRCurrent, setCRCurrent] = useState(0)

    useEffect(()=>{
        let percent = parseFloat(NOICurrent)/parseFloat(PPCurrent) * 100
        if(isNaN(percent) || !isFinite(percent)){
            setCRCurrent(0)
        }else{
            setCRCurrent(Number(percent).toFixed(2))
        }
        
    }, [PPCurrent, NOICurrent])
    


    return(
        <div className="row justify-content-center mt-2">
            <h3>Cash Flow Analysis</h3>
            <div className="table-responsive">
                <table className="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col" width="60%">CASHFLOW ANALYSIS</th>
                        <th scope="col" width="20%" className="text-right">CURRENT</th>
                        <th scope="col" width="20%" className="text-right">MONTLY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gross Scheduled Rental Income</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={GSRICurrent}
                                        onChange={e => calcGOICurrent(e.target.value, 'GSRICurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={GSRIMonthly}      
                                        onChange={e => calcGOIMonthly(e.target.value, 'GSRIMonthly')}                                            
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Less Vacancy & Rent Loss</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={LVLLCurrent}
                                        onChange={e => calcGOICurrent(e.target.value, 'LVLLCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={LVLLMonthly}      
                                        onChange={e => calcGOIMonthly(e.target.value, 'LVLLMonthly')}                                            
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Gross Operating Income</th>
                            <th className="text-right">
                                <NumberFormat 
                                    className="w-75"
                                    value={GOICurrent} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                />
                            </th>
                            <th className="text-right">
                                <NumberFormat 
                                    className="w-75"
                                    value={GOIMonthly} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                />
                            </th>
                        </tr>
                        <tr>
                            <td>Operating Expenses</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="pl-4">Condo Expenses (HOA fess)</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={COCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'COCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={COMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'COMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Insurance</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={ICurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'ICurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={IMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'IMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Maintenance</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={MCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'MCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={MMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'MMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Managment Fee</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={MFCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'MFCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={MFMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'MFMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Property Taxes</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={PTCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'PTCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={PTMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'PTMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Real Estate Commision</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={RECCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'RECCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={RECMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'RECMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-4">Repair reserves</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={RRCurrent}
                                        onChange={e => calcTOECurrent(e.target.value, 'RRCurrent')}                                               
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={RRMonthly}
                                        onChange={e => calcTOEMonthly(e.target.value, 'RRMonthly')}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Operating Expenses</td>
                            <th className="text-danger text-right">
                                <NumberFormat 
                                    className="w-75"
                                    value={TOECurrent} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'- $'} 
                                />
                            </th>
                            <th className="text-danger text-right">
                                <NumberFormat 
                                    className="w-75"
                                    value={TOEMonthly} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'- $'} 
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>Net Operating Income</th>
                            <th className={`${NOICurrent > 0 ? 'text-success': NOICurrent < 0 ? 'text-warning' : ''} text-right`}>
                                <NumberFormat 
                                    className="w-75"
                                    value={NOICurrent} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                />
                            </th>
                            <th className={`${NOIMonthly > 0 ? 'text-success': NOIMonthly < 0 ? 'text-warning' : ''} text-right`}>
                                <NumberFormat 
                                    className="w-75"
                                    value={NOIMonthly} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                />
                            </th>
                        </tr>
                        <tr>
                            <td>Purchase price</td>
                            <td>
                                <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={PPCurrent}
                                        onChange={e => setPPCurrent(e.target.value)}                                               
                                    />
                                </div>
                            </td>
                            <td>
                            <div className="input-group input-group-sm w-75 float-right">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input 
                                        type="number"
                                        min="0" 
                                        className="form-control text-right"
                                        defaultValue={PPMonthly}
                                        onChange={e => setPPMonthly(e.target.value)}                                               
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Cap Rate</td>
                            <td className="text-right">
                                <NumberFormat 
                                    className="w-75"
                                    value={CRCurrent} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    suffix={'%'} 
                                />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    )
}