import React, { useContext, useEffect, } from 'react';
import '../style.scss';
import uuid from 'react-uuid';
import {
    TextField,
    Button,
    Checkbox,
} from '@mui/material';
import { CreateOrderVm } from "../CreateOrderComponent/vm";
import { renderWithSpinnerAsync } from "../../../../store/loaderFunction";

export const CreateOrderComponent = () => {
    const { load, data, events } = CreateOrderVm()

    useEffect(() => {
        renderWithSpinnerAsync(async () => {
            await load();
        })
    }, []);

    return (
        <>
            <div className='main-div'>
                <form >
                    <TextField
                        variant='outlined'
                        label='Amount:'
                        value={data.amountValue}
                        onChange={events.handleAmount}
                        error={data.amountNotValid}
                        helperText={data.amountNotValid ? 'Please enter a number greater than zero.' : ''}
                    />
                    <TextField
                        variant='outlined'
                        label='Reference: max character:100'
                        value={data.referenceValue || ''}
                        onChange={events.handleReference}
                        error={data.referenceNotValid}
                        helperText={data.referenceNotValid ? 'The maximum number of characters is 100.' : ''}
                    />
                    {data.isTimeLimitedChecked &&
                        <TextField
                            variant='outlined'
                            label="To be paid within:"
                            value={data.paidWithinValue}
                            onChange={events.handlePaidWithin}
                            error={data.paidWithinNotValid}
                            helperText={data.paidWithinNotValid ? 'Please enter a number greater than zero.' : ''}
                        />
                    }
                    <Checkbox
                        checked={data.isTimeLimitedChecked}
                        onChange={events.handleCheckBoxState}
                    />


                    <Button className='create-order-component__creating_button'
                        variant="contained"
                        type='submit'
                        disabled={data.isDisabled}
                    >
                        Create Order
                    </Button>
                </form>
            </div>
        </>
    )
}

// узнать что будет делать кнопка
// поменять онклик
// сделать функцию для установки disabled - в фолс. handleButtonState устанавливает в фолс

