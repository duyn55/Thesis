import axios from "axios";

import { SUBMIT_SURVEY } from "actions/types";

export const submitSurvey = survey => async dispatch => {
  const newSurvey = {
    title: "new title",
    subject: "new subject",
    body: "new body",
    recipients: "1@mail.com,2@mail.com",
    id: 1
  };

  let response;

  try {
    response = await axios.post("/api/surveys", newSurvey);
    console.log(response.data);
  } catch (e) {
    throw new Error(e);
  }
};