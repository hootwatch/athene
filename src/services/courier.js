import client from "twilio";

const {
  TWILIO_PHONE_NUMBER,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN
} = process.env;

const twilio = client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendText = async (number, data) => {
  if (!number) throw new Error("Please provide a phone number.");

  if (!data) throw new Error("No data was specified");

  try {
    const options = {
      body: data,
      from: TWILIO_PHONE_NUMBER,
      to: number
    };

    const { sid } = await twilio.messages.create(options);

    return sid;
  } catch (e) {
    throw new Error(e);
  }
};

export { sendText };
