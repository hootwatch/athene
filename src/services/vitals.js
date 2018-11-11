import axios from "axios";
import fitbit from "fitbit-node";

const {
  FITBIT_CALLBACK_URI,
  FITBIT_CLIENT_ID,
  FITBIT_CLIENT_SECRET
} = process.env;

const url = "https://api.fitbit.com/1/user/-";
const fi = axios.create({ baseURL: url });

const client = new fitbit({
  clientId: FITBIT_CLIENT_ID,
  clientSecret: FITBIT_CLIENT_SECRET,
  apiVersion: "1"
});

const readFitbit = code =>
  new Promise(async (resolve, reject) => {
    try {
      const { access_token } = await client.getAccessToken(
        code,
        FITBIT_CALLBACK_URI
      );

      const hr_url = "/activities/heart/date/today/1d/1sec.json";
      const data = await client.get(hr_url, access_token);

      const heart_intraday =
        data[0]["activities-heart-intraday"].dataset.length;
      const last_vital =
        data[0]["activities-heart-intraday"].dataset[heart_intraday - 1];

      resolve(last_vital);
    } catch (e) {
      reject(e);
    }
  });

const authFitbit = () =>
  new Promise((resolve, reject) => {
    const options =
      "activity heartrate location nutrition profile settings sleep social weight";

    const auth_url = client.getAuthorizeUrl(options, FITBIT_CALLBACK_URI);

    resolve(auth_url);
  });

export default { authFitbit, readFitbit };
