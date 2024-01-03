import {  CCol, CContainer, CFormInput, CRow } from "@coreui/react-pro";
import { current } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import  { useRef, useState } from "react";

interface valueOperator{
  valueA: string,
  valueB: string,
  operator: string,
}

const Calculator = () => {
  // const [valueA, setValueA] = useState<string>("");
  // // const [valueB, setValueB] = useState<string>("");
  // const [operator, setOperator] = useState<string>("");
  // const valueC = useRef<number>(0)
  
  const initialValue: valueOperator = {
    valueA: '',
    valueB: '',
    operator: '',
  }
  const [value, setValue] = useState<valueOperator>(initialValue)

  //operator
  const btnEqual = () => {
      switch (value.operator){
        case '+':{
          return ( setValue({valueA: String(Number(value.valueB) + Number(value.valueA)), valueB:"", operator:""}))
        } 
        case '-':{
          return ( setValue({valueA: String(Number(value.valueB) - Number(value.valueA)), valueB:"", operator:"" }))
        } 
        case 'x':{
          return ( setValue({valueA: String(Number(value.valueB) * Number(value.valueA)) , valueB:"", operator:""}))} 
        case '/':{
          return ( setValue({valueA: String(Number(value.valueB) / Number(value.valueA)) , valueB:"", operator:""}))
        } 
        case '%':{
          return ( setValue({...value, operator: "", valueB: ''}))} 
        default: {
          return ( setValue({...value}) )
        } 
      }
  };

  // const btnEqual = () => {
  //   switch (operator){
      // case '+':{
      //   return ( setValueA(String(Number(valueB) + Number(valueA))),
      //   setOperator('') )
      // } 
      // case '-':{
      //   return ( setValueA(String(Number(valueB) - Number(valueA))),
      //   setOperator('') )
      // } 
      // case 'x':{
      //   return ( setValueA(String(Number(valueB) * Number(valueA))),
      //   setOperator('') )
      // } 
      // case '/':{
      //   return ( setValueA(String(Number(valueB) / Number(valueA))),
      //   setOperator('') )
      // } 
      // case '%':{
      //   return ( setValueA(String(Number(valueB) % Number(valueA))),
      //   setOperator('') )
      // } 
      // default: {
      //   return ( setValueA(valueA) )
      // } 
  //   }
  // };

  const arr: string[][] = [
    ['7', '8', '9'], ['4', '5', '6'] , ['1', '2', '3']
  ]
  const oprator : string[] = ['/', 'x', '-', '+']

  const btnAC = () =>{
    // setValueA("")
    setValue(initialValue)
    // setValueB("")
  }

  const btnNegative = () =>{
    // setValueA(String(Number(valueA) * -1))
    const negative =  String(Number(value.valueA)*-1)
    setValue({...value, valueA: negative })
  }

  const btnRemainder = () =>{
    // setValueB(valueA)
    const remainder = Number(value.valueA)/100;
    // setValue({valueA: '', valueB:String(remainder), operator: '%' })
    setValue({valueB: '', valueA: String(remainder), operator:"%" })
    // valueC.current =Number(valueA)
    // setValueA("")
    // setOperator("%")
  }

  const btnNumber = (num:number) => () =>{
    // setValueA(valueA + value)  
    const val = value.valueA
    setValue({...value, valueA: val + num})
  }

  const btnZero = () => {
    // setValueA(valueA + 0)
    const val = value.valueA
    setValue({...value, valueA: val + 0})
  }

  const btnComma =  () =>{
    // setValueA(valueA + ".")
    const val = value.valueA
    setValue({...value, valueA: val + '.'})
  }

  const btnOperator = (opera:string) => () =>{
    // setValueB(valueA)
    const valA = value.valueA
    setValue({valueA: '', valueB: valA, operator: opera})
    // valueC.current = Number(valueA)
    // setValueA("")
    // setOperator(opera)
  }
  return (
    <>
      <CContainer className="calculator-main p-0">
        <CFormInput
          value={value.valueA}
          placeholder="0"
          type="text"
          className="calculator-input"
          disabled
          onChange={(e) => console.log(e.currentTarget.value)}
        />
          <CRow className="p-0 calculator-box">
            <CCol sm={9} className='calculator-arr p-0' >
                <CRow className="calculator-row m-0 p-0" >
                   <CCol sm={4} onClick={btnAC} className="calculator-Col" >AC</CCol>
                   <CCol sm={4} onClick={btnNegative} className="calculator-Col" >+/-</CCol>
                   <CCol sm={4} className="calculator-Col" onClick={btnRemainder} >%</CCol>
                   {arr.map((ele) =>
                      ele.map((value) =>
                        <CCol className="calculator-Col" sm={4} onClick={btnNumber(Number(value))} >{value}</CCol>
                      )
                   )}
                   <CCol className="calculator-Col"  sm={8} onClick={btnZero} >0</CCol>
                   <CCol className="calculator-Col"  sm={4}  onClick={btnComma} >.</CCol>
                </CRow>
            </CCol>

            <CCol sm={3} className='calculator-oparator p-0 m-0'>
                  {oprator.map(ele =>
                    <CCol sm={12} className="calculator-Col"   onClick={btnOperator(ele)} >{ele}</CCol>
                    )}
                   <CCol className="calculator-Col"  sm={12}  
                   onClick={btnEqual} >=</CCol>
            </CCol>
            </CRow>
      </CContainer>
    </>
  );
};

export default Calculator;
