import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: "649a1d4c-c5d4-425d-8555-c9565c0b4015",
      safari_web_id: "web.onesignal.auto.370dd028-ab8a-4720-9087-4e2c917686de",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,});
  OneSignal.showSlidedownPrompt();
}