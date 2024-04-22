import { FormEvent } from "react";
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";

export const sendEmail = (e: FormEvent<HTMLFormElement>, formCurrent: HTMLFormElement) => {
    e.preventDefault();

    const serviceEmailKey = process.env.SERVICE_EMAIL_KEY;
    const templateEmailKey = process.env.TEMPLATE_EMAIL_KEY;
    const publicEmailKey = process.env.PUBLIC_EMAIL_KEY;

    try {

        if (formCurrent !== null && serviceEmailKey !== undefined && templateEmailKey !== undefined) {

            emailjs.sendForm(serviceEmailKey, templateEmailKey, formCurrent, {
                publicKey: publicEmailKey,

            })
                .then(
                    () => {
                        Swal.fire({
                            title: "Good job!",
                            text: "Sended!",
                            icon: "success"
                        });

                        formCurrent.reset();
                    },
                    (error) => {
                        Swal.fire({
                            title: "Send email failed!",
                            text: "Error!",
                            icon: "error"
                        });
                    },
                );
        }

    } catch (e) {
        Swal.fire({
            title: "Service Error!",
            text: "Error!",
            icon: "error"
        });
    }
};