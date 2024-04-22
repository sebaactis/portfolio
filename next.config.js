require('dotenv').config();

module.exports = {
    env: {
        SERVICE_EMAIL_KEY: process.env.SERVICE_EMAIL_KEY,
        TEMPLATE_EMAIL_KEY: process.env.TEMPLATE_EMAIL_KEY,
        PUBLIC_EMAIL_KEY: process.env.PUBLIC_EMAIL_KEY
    },
};