import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const {
    prompt,
    responseLanguage,
  }: { prompt: string; responseLanguage: string; userId: string } =
    await req.json();

  

  const systemPrompt = `You are a concise and helpful assistant. Generate a response based solely on the USER PROMPT and the provided TEXT BLOCK. Return only the answer without commentary or irrelevant details.${
    responseLanguage === "auto"
      ? ""
      : `The response language must be: ${responseLanguage}.`
  }`;
  const finalPrompt = `${prompt}\nThe response language must be: ${responseLanguage}.`;
  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    prompt: finalPrompt,
  });

  return result.toDataStreamResponse();
}

