import React, { useState } from "react";

export function CreateOrderVm() {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [isTimeLimitedChecked, setIsTimeLimitedChecked] = useState<boolean>(false);
    const [amountValue, setAmountValue] = useState<number>()
    const [referenceValue, setReferenceValue] = useState<string>('')
    const [paidWithinValue, setPaidWithinValue] = useState<number>()
    const [amountNotValid, setAmountNotValid] = useState<boolean>()
    const [paidWithinNotValid, setPaidWithinNotValid] = useState<boolean>()
    const [referenceNotValid, setReferenceNotValid] = useState<boolean>()

    const data = {
        isDisabled,
        isTimeLimitedChecked,
        referenceValue,
        amountValue,
        paidWithinValue,
        amountNotValid,
        paidWithinNotValid,
        referenceNotValid,
    }

    async function load() {
        await events.getParams();
    }

    const events = {
        getParams: () => {
        },

        handleCheckBoxState: () => {
            setIsTimeLimitedChecked(prevState => !prevState)
        },

        handleButtonState: () => {
            setIsDisabled(false)
        },

        handleAmount: (event) => {
            setAmountValue(event.target.value)
            if (event.target.value > 0 && event.target.value != '') {
                setAmountNotValid(false)
            } else {
                setAmountNotValid(true)
            }
        },

        handleReference: (event) => {
            setReferenceValue(event.target.value);
            if (event.target.value?.length <= 100) {
                setReferenceNotValid(false)
            } else {
                setReferenceNotValid(true)
            }
        },

        handlePaidWithin: (event) => {
            setPaidWithinValue(event.target.value);
            if (event.target.value == 0) {
                setPaidWithinNotValid(false)
            } else {
                setPaidWithinNotValid(true)
            }
        },



    }



    return {
        load, data, events
    }
}



