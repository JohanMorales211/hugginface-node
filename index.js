import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";
import fs from 'fs';

config();

const hf = new HfInference(process.env.HF_ACCES_TOKEN);

const model = "black-forest-labs/FLUX.1-dev";
const prompt = "A cat in Antarctica with a sign that says hello world";

try {
  const result = await hf.textToImage({
    inputs: prompt,
    model,
    parameters: {
      height: 1024,
      width: 1024,
      guidance_scale: 3.5,
      num_inference_steps: 50,
      max_sequence_length: 512,
    },
  });

  const buffer = await result.arrayBuffer();
  fs.writeFileSync('image-generated.png', Buffer.from(buffer)); 

  console.log('Image downloaded as image-generated.png');

} catch (error) {
  console.error("Error generating or downloading image:", error); 
}