import axios from "axios";

const token = 'eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODI0MDg3NzIyMzRfZmQ4ZTQ5ZDgtYTNkMS00OTQ5LTlmMjAtZTU4NDAwZjQ4OThlX3VlMSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI5ZmMwMzdkNzQ5N2Q0ODAyODY1YTIxNThlNzU4Njg3NiIsInVzZXJfaWQiOiJBREI1MjFGMDY0NDc1RUNFMEE0OTVDODlAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJBREI1MjFGMDY0NDc1RUNFMEE0OTVDODlAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJmZyI6IlhNTkxGVVRISFBON01QNktHT1FWWkhRQUJVPT09PT09IiwibW9pIjoiZWNhMGU3MTciLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJjcmVhdGVkX2F0IjoiMTY4MjQwODc3MjIzNCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQscmVhZF9vcmdhbml6YXRpb25zIn0.AT4HpSU9VbR1j67ilCcczeMjolxEQIjWBdTRefR10QJLV00y-FXDgrfGpcvNPPoNpEscqjwrrtWevX_CFWyR75out1VVIL_QFdJk0lTugXcVX9v26LdTY2E3oRG-8jQGe8Frd8eeZ-SlGjZB3cye6mjbz2cjcn3A8IPeLDaUHOpgE8_hYX-ZSfO1UBjzQG3FAQSpVhG9-K_Yk9kMaYwh8RWpEucfnYujnZD-xGZ_yQtTVizcfhDQ0Nsn1ilRJ8cNndk2yQi1Fav8H1OI42oRauV8sh3SY3yRnA4gn62LDjs4pQC4jWQZZfvQNT0pe9vT-0kGOHZIHo2QZo0G_Un5lQ'

const headers = {
    Authorization: `Bearer ${token}`,
    'x-api-key': '9fc037d7497d4802865a2158e7586876'
}

export const checkConnection = async () => [
    await axios.get(`https://image.adobe.io/pie/psdService/hello`, { headers: headers })
    // .then(res => res.json())
    .then(data => {return data.data})
    .catch((error) => {
        console.log(error);
    })
]

export const getLayerInfo = async () => {
    await axios.post(`https://image.adobe.io/pie/psdService/documentManifest`, { headers: headers })
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })
}