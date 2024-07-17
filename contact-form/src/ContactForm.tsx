import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export const ContactForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register('name', { required: true })} />

            <label htmlFor="email">Email</label>
            <input id="email" {...register('email', { required: true })} />

            <label htmlFor="message">Message</label>
            <textarea id="message" {...register('message', { required: true })} />

            <button type="submit">Submit</button>
        </form>
    );
};
