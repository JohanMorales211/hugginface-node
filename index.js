import { HfInference } from "@huggingface/inference";
import {config} from 'dotenv'

config()

const hf = new HfInference(process.env.HF_ACCES_TOKEN);

const imageURL =
  "https://t2.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_orig.jpg";

const model = "Salesforce/blip-image-captioning-large";

  const response = await fetch(imageURL);
  const blob = await response.blob();

  const result = await hf.imageToText({
    data: blob,
    model
  })

  console.log(result)