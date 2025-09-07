// import OpenAI from 'openai';


// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//    dangerouslyAllowBrowser: true,
// });

// export default openai;
// src/utils/openaAI.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY, // use CRA-compatible var
  dangerouslyAllowBrowser: true // required if running OpenAI client in browser
});

export default openai;
