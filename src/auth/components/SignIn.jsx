import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

const SignIn = ({ contact, submit, handlePhone }) => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            validateSubmit();
        }
    };

    const validateSubmit = () => {
        if (contact.phoneNumber !== '') submit();
    };

    return (
        <>
            <div className="xl:w-3/12 lg:w-5/12 w-8/12 flex justify-between flex-col sm:flex-row my-2 ">
                <label className="w-full sm:w-2/12 text-center uppercase">
                    Phone Number
                </label>
                <TextField
                    variant="outlined"
                    value={contact.phoneNumber}
                    onChange={handlePhone}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    size="small"
                />
            </div>
            <Button
                color="error"
                onClick={validateSubmit}
                type="submit"
                variant="contained"
            >
                Sign in
            </Button>
        </>
    );
};

SignIn.propTypes = {
    contact: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    handlePhone: PropTypes.func.isRequired,
};

export default SignIn;
