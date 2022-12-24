import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

const SignUp = ({ contact, submit, handlePhone, handleText, handlePhoto }) => {
    return (
        <>
            <div className="xl:w-3/12 lg:w-5/12 w-8/12 flex justify-between flex-col sm:flex-row my-2 ">
                <label className="w-full sm:w-2/12 text-center uppercase">
                    First Name <strong className="text-red-500">*</strong>
                </label>
                <TextField
                    className="w-full sm:w-8/12"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleText}
                    size="small"
                />
            </div>
            <div className="xl:w-3/12 lg:w-5/12 w-8/12 flex justify-between flex-col sm:flex-row my-2 ">
                <label className="w-full sm:w-2/12 text-center uppercase">
                    Last Name <strong className="text-red-500">*</strong>
                </label>
                <TextField
                    className="w-full sm:w-8/12"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleText}
                    size="small"
                />
            </div>
            <div className="xl:w-3/12 lg:w-5/12 w-8/12 flex justify-between flex-col sm:flex-row my-2 ">
                <label className="w-full sm:w-2/12 text-center uppercase">
                    Profile Photo <strong className="text-red-500">*</strong>
                </label>
                <Button
                    className="w-full sm:w-8/12"
                    variant="contained"
                    component="label"
                    color={
                        contact.profilePhoto !== '' || null
                            ? 'success'
                            : 'primary'
                    }
                >
                    Upload
                    <input
                        onChange={handlePhoto}
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                    />
                </Button>
            </div>
            <div className="xl:w-3/12 lg:w-5/12 w-8/12 flex justify-between flex-col sm:flex-row my-2 ">
                <label className="w-full sm:w-2/12 text-center uppercase">
                    Phone Number <strong className="text-red-500">*</strong>
                </label>
                <TextField
                    className="w-full sm:w-8/12"
                    value={contact.phoneNumber}
                    onChange={handlePhone}
                    size="small"
                />
            </div>
            <Button
                color="error"
                type="submit"
                onClick={submit}
                variant="contained"
            >
                Sign up
            </Button>
        </>
    );
};

SignUp.propTypes = {
    contact: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    handleText: PropTypes.func.isRequired,
    handlePhone: PropTypes.func.isRequired,
    handlePhoto: PropTypes.func.isRequired,
};

export default SignUp;
